 # BackendCaps_Book_MyShow

## Book My Show - Frontend

This project is a "Book My Show" application that allows users to discover and book tickets for various events, movies, and shows. The project is divided into two parts: the frontend and the backend. This is the README for the frontend part of the project. For the backend repository, please refer to the link below.

## Installation

To run the frontend part of the application, follow these steps:

1. Clone the repository to your local machine.
git clone https://github.com/KashyapAmanSingh/BackendCaps_Book_MyShow.git

2. Navigate to the frontend directory.
cd front_Show

3. Install the required dependencies.
npm install


4. Start the development server.
npm run dev


 
This will start the frontend application using Vite and enable you to access it at http://localhost:3000. Make sure the backend server is running as well. For the backend, please use this URL: https://github.com/KashyapAmanSingh/BackendCaps_Book_MyShow.git

## API Reference

### Base URL

- [https://vercel.com/kashyapamansingh/backend-book-my-show](https://vercel.com/kashyapamansingh/backend-book-my-show)

#### Booking

- `GET /api/bookings`: Returns a list of all bookings stored in the database in JSON format.
- `POST /api/bookings`: 
- `movie`: Required. A string representing the selected movie.
- `timeSlot`: Required. A string representing the selected time slot.
- `seats`: Required. A string representing the selected seats.

## Deployment

Here are the links to the deployed project:

- For Frontend: [https://backend-caps-book-my-show.vercel.app/](https://backend-caps-book-my-show.vercel.app/)
- For Backend: [https://backend-book-my-show.vercel.app/api/bookings](https://backend-book-my-show.vercel.app/api/bookings)

By clicking the links above, you can access and explore the project.

## How to Use

- Click on the link: [https://backend-book-my-show.vercel.app/api/bookings](https://backend-book-my-show.vercel.app/api/bookings)
- Select the movie you would like to watch.
- Select a timeslot.
- Select your preferred seats.
- Click on the "Book Now" button. If you need to make changes, do so before finalizing the booking.

After clicking "Book Now," you will receive a successful booking message, and your last booking details will be displayed on the screen under the "Last Booking Details" section.

![Frontend UI](https://github.com/KashyapAmanSingh/BackendCaps_Book_MyShow/assets/119684617/3463af4b-4e58-4c3c-9a3e-ee8864f6e12a)

 
## Tech Stack
- Frontend: React Vite, Bootstrap, React Toast, React-loader

## Team Members
- Individually
 
