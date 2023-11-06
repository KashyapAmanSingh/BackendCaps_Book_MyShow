import { useState, useEffect } from 'react';

export const FetchLastBooking = () => {
    const [lastBooking, setLastBooking] = useState({});
    const [loader, setLoader] = useState(true);

    const url = "https://backend-book-my-show.vercel.app";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}/api/booking`);
                if (response.ok) {
                    const result = await response.json();
                    setLastBooking(result && result.data);
                } else {
                    // Handle the response when it's not okay (e.g., 4xx or 5xx status codes)
                    console.error('Error:', response.status);
                }
            } catch (error) {
                // Handle any other errors that occurred during the fetch
                console.error('Error:', error);
            } finally {
                setLoader(false);
            }
        };

        fetchData();
    }, []); // Ensure this effect runs only once when the component mounts

    return { lastBooking, loader };
};
