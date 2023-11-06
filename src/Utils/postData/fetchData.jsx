
export const fetchData=() => {
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