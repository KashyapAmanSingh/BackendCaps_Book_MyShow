// import { Toast } from "./toast";
import showToast from "./toast";
import { AiOutlineClockCircle } from 'react-icons/ai';
const MovieTime = () => {
    const timeSlots = ['10:00 AM', '01:00 PM', '03:00 PM', '08:00 PM', '10:00 PM'];
    const handleMovieTime= (index) => {
        showToast('',`Selected ${timeSlots[index]}!`);
        // <Toast/>
        sessionStorage.setItem('timeSlotsData', timeSlots[index]);
   };
  return (
    <div>
          <div className="col-sm-12 rounded-4  bg-white border border-1 border-dark my-5"  >
                            <h6 className="text-start fw-bold fs-3 mx-4 my-2">Select a Time Slot</h6>
                            {timeSlots.map((time, index) => (
                                <button className="btn btn-dark mx-3 mt-1 py-3  px-3 mb-4" key={index} onClick={() => handleMovieTime(index)}>
                                  <AiOutlineClockCircle size={20}/>  {time}
                                </button>
                            ))}
                        </div>
    </div>
  )
}

export default MovieTime