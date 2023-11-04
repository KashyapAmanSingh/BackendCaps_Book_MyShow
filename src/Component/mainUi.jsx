 import { FcFilm } from "react-icons/fc";
import BookButton from "./bookButton";
import { LastBooking } from "./lastBooking";
import MovieSeat from "./movieSeat";
import MovieSelect from "./movieSelect";
import MovieTime from "./movieTime";


const MainUi = () => {

    return (
        <div>
            <h3 className='text-success bg-white my-3 mx-5 py-auto px-4  text-start fw-bolder'><FcFilm className="mb-2"  />ShowTime - Your Ultimate Entertainment Hub</h3>
            <div className="container">
                {/* <!-- First Row - Movie Selection --> */}
                <div className="row">
                    <div className="col-sm-8">
                        {/* movie name  */}
                        <MovieSelect />

                        {/* MovieTime */}
                        <MovieTime />

                        {/* MovieSeat  */}
                        <MovieSeat />
                    </div>


                    <div className="col-sm-4 border rounded-4 border-1 border-dark">

                        {/* LastBooking */}
                        <LastBooking />
                    </div>
                </div>

                {/* BookButton */}
              <BookButton/>


            </div>
        </div>
    )
}

export default MainUi