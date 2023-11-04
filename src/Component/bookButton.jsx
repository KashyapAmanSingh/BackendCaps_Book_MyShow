import showToast, { Toast } from "./toast";
import { FcApproval } from 'react-icons/fc';


const bookButton = () => {
    const fetchData=() => {
        const seatClickedData = sessionStorage.getItem('seatClickedData');
        let parsedSeatData = {};
        
        try {
          parsedSeatData = JSON.parse(seatClickedData);
        } catch (error) {
           parsedSeatData = {};
        }
        
        const timeSlotsData = sessionStorage.getItem('timeSlotsData');
        const bookedMovieName = sessionStorage.getItem('bookedMovieName');
        
        const data = {
          movie: bookedMovieName,
          slot: timeSlotsData,
          seats: parsedSeatData,
        };
 
        return data;
     }
    
      

  const url="https://backend-book-my-show.vercel.app";
        const handlePost = () => {
             const data=fetchData()
            if (data) {
         fetch(`${url}/api/booking`, {
               
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
                .then(response => response.json())
                .then(result => {
                  // Handle the response from the server here
                  console.log(result);
                 })
                .catch(error => {
                  // Handle any errors that occurred during the fetch
                  console.error('Error:', error);
                });
            }
  
               sessionStorage.setItem('seatClickedData', '');
           sessionStorage.setItem('timeSlotsData', '');
           sessionStorage.setItem('bookedMovieName', '');
           showToast('success','Show Booked SuccessFully !');
           < Toast/>
                    };
 
  return (
    <div>
            <button
        className="btn btn-danger px-4 mx-5 mt-2 mb-5"
        onClick={handlePost} 
      >
       <FcApproval size={25}/> Book Now!
      </button> 
 
  
    </div>
  )
}

export default bookButton



 
