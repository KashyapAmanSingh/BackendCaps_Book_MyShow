 
 import showToast from "./toast";
 import { FcFilmReel } from 'react-icons/fc';
 

 
 const MovieSelect = () => {
    const movies = ["Pathaan","Tiger 3","Napoleon (Upcoming)", "Shaadi mai jaroor aana", "War", "3 Idiots", "Adipurush", "Pathaan"];
    const handlebookedMovieName= (index) => {
        showToast('',`Selected ${movies[index]}!`);
        // < Toast/>
       // Update local storage with the data
       sessionStorage.setItem('bookedMovieName', movies[index]);
   };

  return (
    <div>
        
     <div className="col-sm-12 bg-white  rounded-4  py-4 border border-1 border-dark">
                            <h6 className="text-start fw-bold fs-3 mx-4 ">Select a Movie</h6>
                            {movies.map((movieName, index) => (
                                <button className="btn btn-dark  border border-1 border-dark mx-4 my-2" key={index}  onClick={() => handlebookedMovieName(index)}>
                                <FcFilmReel className="my-1"/>    {movieName}
                                </button>
                            ))}
                        </div>
    </div>
  )
}

export default MovieSelect