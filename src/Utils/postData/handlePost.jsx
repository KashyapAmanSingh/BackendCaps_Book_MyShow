import showToast from "../../Component/toast";
import { fetchData } from "./fetchData";

// Define the function for posting data to the server
export const postBookingData = async () => {
    const url = import.meta.env.VITE_Backend_Deployment_URL;
    const data = fetchData(); // You should define the 'fetchData' function

    if (data) {
        const { movie, slot, seats } = data;
    
        if (Math.sign(Object.values(seats)[0]) !== 1 || slot === "" || movie === "") {
            // Handle the case where data is missing
            if (Math.sign(Object.values(seats)[0]) !== 1) {
                showToast('error', 'Seat Clicked Data is missing');
            }
            if (slot === "") {
                showToast('error', 'Time Slots Data is missing');
            }
            if (movie === "") {
                showToast('error', 'Booked Movie Name is missing');
            }
            return null; // or return an appropriate value or handle the error as needed
        } else {
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

            sessionStorage.setItem('seatClickedData', '');
            sessionStorage.setItem('timeSlotsData', '');
            sessionStorage.setItem('bookedMovieName', '');
            showToast('success', 'Show Booked Successfully !');
        }
    } else {
        showToast('error', 'Data is missing');
    }
};

export default postBookingData;
