// Import required modules

import { useState } from "react";
import showToast from "../toast";


// Component to select a movie seat and show a toast notification
const MovieSeat = () => {
    const [value, setValue] = useState();
    const [clickedIndex, setClickedIndex] = useState();
    const seatTypes = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'];


    // Handle click event to select a seat and store data in sessionStorage
    const handleSeatClick = (seatNumber, index) => {
        const dataToStore = {};

        dataToStore[seatTypes[index]] = seatNumber;
        setValue(seatNumber);
        setClickedIndex(index);
        sessionStorage.setItem('seatClickedData', JSON.stringify(dataToStore));

    }
    // Handle a toast notification for the selected seat

    const handleToast = (index) => {
        showToast("", `Booked ${seatTypes[index]} seats`)


    }
    return (
        <div>
            <div className="col-sm-12 rounded-4 bg-white border border-1 border-dark py-1 text-center">
                <h6 className="text-start fw-bold fs-3 mx-4 my-2">Select a Seat</h6>
                <div className="row mx-auto">
                    {seatTypes.map((type, index) => (
                        <div className="col-md-3 col-sm-3  col-lg-1  mx-4 mt-1 mb-3 my-auto" key={index} onClick={() => handleToast(index)}>
                            <button className="btn btn-dark">
                                <p>Type {type}</p>
                                <input type="number" value={index === clickedIndex ? value : 0} className="inputs" onChange={(e) => handleSeatClick(e.target.value, index)} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default MovieSeat
