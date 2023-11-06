 import showToast from "../../Component/toast";
import { fetchData } from "./fetchData";

// Define the function for posting data to the server
// Define the function for posting data to the server
export const postBookingData = async () => {
    const url = "https://backend-book-my-show.vercel.app";
    const data = fetchData() ; // You should define the 'fetchData' function

    if (data) {
        try {
            const response = await fetch(`${url}/api/booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                // Handle the response from the server here
                console.log(result);
            } else {
                // Handle the response when it's not okay (e.g., 4xx or 5xx status codes)
                console.error('Error:', response.status);
            }
        } catch (error) {
            // Handle any other errors that occurred during the fetch
            console.error('Error:', error);
        }
    }

    sessionStorage.setItem('seatClickedData', '');
    sessionStorage.setItem('timeSlotsData', '');
    sessionStorage.setItem('bookedMovieName', '');
    showToast('success', 'Show Booked Successfully !');
    // You should include a component for rendering toasts (if it's not already defined)
};

export default postBookingData;
