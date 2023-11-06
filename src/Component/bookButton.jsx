import postBookingData from "../Utils/postData/handlePost";
 import { FcApproval } from 'react-icons/fc';

const bookButton = () => {
  return (
    <div>
            <button
        className="btn btn-danger px-4 mx-5 mt-2 mb-5"
        onClick={postBookingData} 
      >
       <FcApproval size={25}/> Book Now!
      </button> 
 
  
    </div>
  )
}

export default bookButton



 
