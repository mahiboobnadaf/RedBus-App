
// import { busData } from "../../busData";
// import BusDetailsClient from "./BusDetailsClient";
// import SeatSelection from "./SeatSelection";



// export default async function BusDetails({ params }) {
//     const { bus_id } = await params;

//     const busDetails = busData.find((bus) => bus.id === parseInt(bus_id));

//     if (!busDetails) {
//         return (
//             <div>
//                 <h1>Bus Details</h1>
//                 <p>No bus found for ID: {bus_id}</p>
//             </div>
//         );
//     }

//     return (
//         // <BusDetailsClient busDetails={busDetails} />
//         <SeatSelection />
//     );
// }


import { busData } from "../../busData";
import SeatSelection from "./SeatSelection";

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

  // Example seat layout
  const seatLayout = busDetails.seatLayout || [
    [
      { id: 1, number: 1, isReserved: false },
      { id: 2, number: 2, isReserved: true },
      null,
      { id: 3, number: 3, isReserved: false },
      { id: 4, number: 4, isReserved: false },
    ],
    [
      { id: 5, number: 5, isReserved: false },
      { id: 6, number: 6, isReserved: true },
      null,
      { id: 7, number: 7, isReserved: false },
      { id: 8, number: 8, isReserved: false },
    ],
  ];

  return (
    <div>
      <h1>Bus Details</h1>
      <p>Bus Name: {busDetails.name}</p>
      <SeatSelection seatLayout={seatLayout} />
    </div>
  );
}
