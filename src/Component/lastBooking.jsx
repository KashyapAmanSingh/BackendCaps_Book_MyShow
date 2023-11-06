// Import required modules
 import Loader from "./loader";


import { Toast } from "./toast";
import showToast from "./toast";
import { FcClock, FcFilmReel } from "react-icons/fc";
import { MdOutlineEventSeat } from "react-icons/md";
import { FetchLastBooking } from "../Utils/getLastData/fetchLastBooking";

 
export const LastBooking = () => {
  const seatTypes = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'];
     const {lastBooking, loader}=FetchLastBooking();
     const { movie, seats, slot } = lastBooking;
  return (
    <div className="">
      <h1 className="text-center fw-bold my-1">Last Booking Details</h1>
      <h6 className="text-start fw-bold fs-5 text-center mt-0 mx-5 mb-0">Seats:</h6>
      <br />
      <div className="mx-5">
        {loader ? (
          <Loader />
        ) : (
          seatTypes.map((type, index) => (
            <div
              className="bg-dark rounded-3 mx-md-1 mx-lg-4 mx-sm-0  text-white d-flex justify-content-center
         "
              key={index}
            >
              <MdOutlineEventSeat size={25} className="bg-info text-black d-sm-none d-md-none d-lg-inline rounded-3 my-auto" />
              <p className="mx-md-2  mx-sm-0   my-3 fw-bold text-warning">{type}</p>
              <p className="mx-md-2   mx-sm-0  my-3 bg-info  px-sm-1  px-md-3 py-1 rounded-3 fw-bold text-dark">
                {seats && Object.keys(seats)[0] === type ? seats[Object.keys(seats)[0]] : 0}
              </p>
            </div>
          ))
        )}

        <h4 className="text-danger fw-bold my-1"><FcClock className="mx-1 my-0" />Time Slot: {slot}</h4>
        <h4 className="text-danger   text-center fw-bold my-1"><FcFilmReel className="mx-1 my-0" />Movie Name: {movie}</h4>
      </div>
      <button className="d-none" onClick={() => showToast('success', 'Wow, this is too success !')}>Notify Success!</button>

      < Toast />

    </div>
  )
}
