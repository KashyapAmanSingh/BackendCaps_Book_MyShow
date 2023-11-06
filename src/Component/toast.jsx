import { ToastContainer, toast } from 'react-toastify';


// Function to show a toast notification
export  default function showToast(type, message = '🦄 Wow, it\'s so easy!') {
    // Define different toast methods for various types
  const toastMethods = {
    warn: toast.warn,
    success: toast.success,
    error: toast.error,
  };

    // Select the appropriate toast method based on the provided type
  const selectedToast = toastMethods[type] || toast;

    // Show the toast notification
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





// This Component render the ToastContainer for toast notifications

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

 