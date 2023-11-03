import { ToastContainer, toast } from 'react-toastify';

export  default function showToast(type, message = '🦄 Wow, it\'s so easy!') {
  const toastMethods = {
    warn: toast.warn,
    success: toast.success,
    error: toast.error,
  };
  const selectedToast = toastMethods[type] || toast;
  if (selectedToast) {
    selectedToast(message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}

export const Toast = () => {
  return (
    <div>
      {/* <button onClick={() => showToast('warn')}>Notify Warning!</button>
      <button onClick={() => showToast('success','Wow, this is too success !')}>Notify Success!</button> */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

 