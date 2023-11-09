  # Hello Viewers this is Ui Frontend part of  capstone project of Backend module name BackendCaps_Book_MyShow

## Book My Show - Frontend

This project is a "Book My Show" application that allows users to discover and book tickets for various events, movies, and shows. The project is divided into two parts: the frontend and the backend. This is the README for the frontend part of the project. For the backend repository, please refer to the link below.

## Installation

To run the frontend part of the application, follow these steps:

1. Clone the repository to your local machine.
- git clone https://github.com/KashyapAmanSingh/Backend_BookMyShow

2. Navigate to the frontend directory.
- cd front_Show

3. Install the required dependencies.
- npm install


4. Start the development server.
- npm run dev


 
This will start the frontend application using Vite and enable you to access it at http://localhost:3000. Make sure the backend server is running as well. For the backend, please use this URL: https://github.com/KashyapAmanSingh/BackendCaps_Book_MyShow.git

## Application Code Folder Structure

```
├───public
│       vite.svg
│
└───src
    │   App.css
    │   App.jsx
    │   index.css
    │   main.jsx
    │
    ├───assets
    │       react.svg
    │
    ├───Component
    │   │   bookButton.jsx
    │   │   lastBooking.jsx
    │   │   loader.jsx
    │   │   mainUi.jsx
    │   │   toast.jsx
    │   │
    │   └───Sub_Component
    │           movieSeat.jsx
    │           movieSelect.jsx
    │           movieTime.jsx
    │
    └───Utils
        ├───getLastData
        │       fetchLastBooking.jsx
        │
        └───postData
                fetchData.jsx
                handlePost.jsx

```
#This is the documentation for the Schema that we used---
   @typedef {Object} BookMovieTicket
  @property {String} movie - The name of the movie for which the ticket is booked.
 * @property {String} slot - The time slot for the movie.
 * @property {Object} seats - The details of the booked seats.
 * @property {String} seats.A1 - The status of seat A1.
 * @property {String} seats.A2 - The status of seat A2.
 * @property {String} seats.A3 - The status of seat A3.
 * @property {String} seats.A4 - The status of seat A4.
 * @property {String} seats.D1 - The status of seat D1.
 * @property {String} seats.D2 - The status of seat D2.
 
 * Mongoose model for storing movie booking details.
 * @name BookTicketModel



## API Reference

### Base URL

-  https://backend-caps-book-my-show-qo2wyr2b6-kashyapamansingh.vercel.app/   


#### Booking

- `GET /api/bookings`: Returns a list of all bookings stored in the database in JSON format.
- `POST /api/bookings`: 
- `movie`: Required. A string representing the selected movie.
- `timeSlot`: Required. A string representing the selected time slot.
- `seats`: Required. A string representing the selected seats.

## Deployment

Here are the links to the deployed project:

- For Frontend: https://backend-caps-book-my-show-qo2wyr2b6-kashyapamansingh.vercel.app/   
- For Backend:  https://backend-book-my-show-pvlja8xe4-kashyapamansingh.vercel.app/

By clicking the links above, you can access and explore the project.

## How to Use
- Click on the link: https://backend-caps-book-my-show-o9mod85kl-kashyapamansingh.vercel.app

- Select the movie you would like to watch.
- Select a timeslot.
- Select your preferred seats.
- Click on the "Book Now" button. If you need to make changes, do so before finalizing the booking.

After clicking "Book Now," you will receive a successful booking message, and your last booking details will be displayed on the screen under the "Last Booking Details" section.

 
![Frontend UI](https://github.com/KashyapAmanSingh/BackendCaps_Book_MyShow/assets/119684617/2802814d-4d8c-42bd-922f-32abb21e4ba2)

 
## Tech Stack
- React Vite: The core framework for building a dynamic and efficient web application.
- Bootstrap: A responsive and polished design framework for creating visually appealing user interfaces.
- React Toast: A component for displaying notifications or toasts in the application, providing user feedback.
- React-loader: A component to display loading indicators or spinners, enhancing user experience during data retrieval or processing.

## Team Members
- worked Individually
 
