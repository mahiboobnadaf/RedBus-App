
import { busData } from "../../busData";
import BusDetailsClient from "./BusDetailsClient";

export default async function BusDetails({ params }) {
    const { bus_id } = await params;

    const busDetails = busData.find((bus) => bus.id === parseInt(bus_id));

    if (!busDetails) {
        return (
            <div>
                <h1>Bus Details</h1>
                <p>No bus found for ID: {bus_id}</p>
            </div>
        );
    }

    return (
        <BusDetailsClient busDetails={busDetails} />
    );
}


// "use client"
// import React, { useState, useEffect } from "react";
// import { busData } from "../../busData"; // Your bus data file
// import SeatPicker from "react-seat-picker";

// export default function BusDetails({ params }) {
//   const { bus_id } = React.use(params);
  
//   // Fetch bus details based on bus_id
//   const busDetails = busData.find((bus) => bus.id === parseInt(bus_id));

//   // If no bus is found, return a message
//   if (!busDetails) {
//     return (
//       <div>
//         <h1>Bus Details</h1>
//         <p>No bus found for ID: {bus_id}</p>
//       </div>
//     );
//   }

//   // States for seat availability
//   const [seats, setSeats] = useState([]);

//   useEffect(() => {
//     // Generate random seat availability (some occupied, some free)
//     const seatLayout = [];
//     for (let i = 0; i < busDetails.availability; i++) {
//       // Randomly decide whether a seat is occupied or not
//       const isOccupied = Math.random() < 0.4; // 40% chance the seat is occupied
//       seatLayout.push({ id: i, isReserved: isOccupied });
//     }
//     setSeats(seatLayout);
//   }, [busDetails]);

//   // Handle seat selection (toggle availability)
//   const handleSeatSelect = (id) => {
//     const updatedSeats = [...seats];
//     const seatIndex = updatedSeats.findIndex((seat) => seat.id === id);
    
//     if (seatIndex >= 0 && !updatedSeats[seatIndex].isReserved) {
//       updatedSeats[seatIndex].isReserved = true;
//       setSeats(updatedSeats);
//     }
//   };

//   return (
//     <div>
//       <h1>{busDetails.name}</h1>
//       <p>Departure: {busDetails.departure}</p>
//       <p>Arrival: {busDetails.arrival}</p>
//       <p>Price: ₹{busDetails.price}</p>
//       <p>Seats Available: {busDetails.availability - seats.filter(seat => seat.isReserved).length}</p>

//       <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
//         <SeatPicker
//           row={5} // Number of rows (adjust this based on your seat count)
//           col={6} // Number of columns (adjust this based on your seat count)
//           availableSeats={seats} // Pass the availability state
//           onSeatSelect={handleSeatSelect} // Handle seat selection
//         />
//       </div>
//     </div>
//   );
// // }
// "use client";
// import React, { useState, useEffect } from 'react';
// import { busData } from "../../busData"; // Your bus data file
// import SeatPicker from "react-seat-picker";
// import { useRouter } from 'next/router';

// export default function BusDetails() {
//   const [isClient, setIsClient] = useState(false);
//   const [seats, setSeats] = useState([]);
//   const [busDetails, setBusDetails] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     // Ensure the component is mounted on the client
//     setIsClient(true);
//   }, []);

//   // Get bus_id from query only when on the client side
//   useEffect(() => {
//     if (isClient && router.query.bus_id) {
//       const { bus_id } = router.query;
//       const foundBus = busData.find((bus) => bus.id === parseInt(bus_id));
//       if (foundBus) {
//         setBusDetails(foundBus);
//       }
//     }
//   }, [isClient, router.query]);

//   // Handle seat availability
//   useEffect(() => {
//     if (busDetails) {
//       const seatLayout = [];
//       for (let i = 0; i < busDetails.availability; i++) {
//         const isOccupied = Math.random() < 0.4; // 40% chance the seat is occupied
//         seatLayout.push({ id: i, isReserved: isOccupied });
//       }
//       setSeats(seatLayout);
//     }
//   }, [busDetails]);

//   // Handle seat selection
//   const handleSeatSelect = (id) => {
//     setSeats((prevSeats) => {
//       return prevSeats.map((seat) =>
//         seat.id === id && !seat.isReserved
//           ? { ...seat, isReserved: true }
//           : seat
//       );
//     });
//   };

//   if (!isClient || !busDetails) {
//     return null; // Render nothing during SSR or while waiting for bus details
//   }

//   return (
//     <div>
//       <h1>{busDetails.name}</h1>
//       <p>Departure: {busDetails.departure}</p>
//       <p>Arrival: {busDetails.arrival}</p>
//       <p>Price: ₹{busDetails.price}</p>
//       <p>
//         Seats Available:{" "}
//         {busDetails.availability - seats.filter((seat) => seat.isReserved).length}
//       </p>

//       <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
//         <SeatPicker
//           row={5} // Number of rows (adjust this based on your seat count)
//           col={6} // Number of columns (adjust this based on your seat count)
//           availableSeats={seats} // Ensure seats is always populated
//           onSeatSelect={handleSeatSelect} // Handle seat selection
//         />
//       </div>
//     </div>
//   );
// }
