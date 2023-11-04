 import { useEffect, useState } from "react";
import Loader from "./loader";
 
 
import { Toast } from "./toast";
import showToast from "./toast";
import { FcClock, FcFilmReel } from "react-icons/fc";
import { MdOutlineEventSeat } from "react-icons/md";



export const LastBooking = () => {
    const [lastBooking, setLastBooking] = useState({});
    const [loader, setLoader] = useState(true);

    const seatTypes = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'];
     const { movie, seats, slot } = lastBooking;
     const url="https://backend-book-my-show.vercel.app"
     const handleLastData = () => {
    
        fetch(`${url}/api/booking`)
            .then(response => response.json())
            .then(result => {
                 setLastBooking(result && result?.data)    
                  setLoader(false)
             })
            .catch(error => {
                 console.error('Error:', error);            });
    }
 useEffect(()=>{

    handleLastData()
 },[]);
 console.log(seats)
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
                className="bg-dark rounded-3 text-white mx-5 d-flex justify-content-center"
                key={index}
              >
                    <MdOutlineEventSeat  size={25} className="bg-info text-black rounded-3 my-auto"/> 
                    <p className="mx-3 my-3 fw-bold text-warning">{type}</p>
                <p className="mx-3 my-3 bg-info px-4 py-1 rounded-3 fw-bold text-dark">
             {seats && Object.keys(seats)[0] === type ? seats[Object.keys(seats)[0]] : 0}
                </p>
              </div>
            ))
          )}
  
          <h4 className="text-danger fw-bold my-1"><FcClock className="mx-1 my-0"/>Time Slot: {slot}</h4>
          <h4 className="text-danger   text-center fw-bold my-1"><FcFilmReel className="mx-1 my-0"/>Movie Name: {movie}</h4>
        </div>
        <button className="d-none" onClick={() => showToast('success','Wow, this is too success !')}>Notify Success!</button>
      
         < Toast/> 
      
      </div>
    )
}
