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
      position: "top-left",
      autoClose: 1500,
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
 
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
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

 