// import { Toast } from "./toast";
import showToast from "./toast";
 
const MovieTime = () => {
    const timeSlots = ['Time 1', 'Time 2', 'Time 3', 'Time 4', 'Time 5'];
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
                                <button className="btn btn-dark mx-4 mt-1 py-3 mx-4 px-4 mb-4" key={index} onClick={() => handleMovieTime(index)}>
                                    {time}
                                </button>
                            ))}
                        </div>
    </div>
  )
}

export default MovieTime