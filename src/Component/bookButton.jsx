import showToast, { Toast } from "./toast";


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
        console.log(seatClickedData,"-------------------------------------------------- ----");

        return data;
     }
    
      

  const url="http://localhost:8080"
        const handlePost = () => {
             const data=fetchData()
            if (data) {
         fetch(`${url}/api/booking`, {
                // fetch(`/api/booking`, {
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
        Book Now!
      </button> 
 
  
    </div>
  )
}

export default bookButton



 
