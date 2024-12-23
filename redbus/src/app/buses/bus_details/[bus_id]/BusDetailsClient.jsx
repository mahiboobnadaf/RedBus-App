"use client";

import { useState } from "react";
import MyBooking from "@/app/(header)/(account)/my-bookings/page";
import { bookedBusData } from "../../bookedBusData";
import { useEffect } from "react";

export default function BusDetailsClient({busDetails,from,to,date}) {
    const { id, name, arrival, departure, availability, price } = busDetails;
    const totalSeats = 48; // Total seats on the bus
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [myBooking,setMyBooking] = useState([])

    
    const [seats, setSeats] = useState(() => {
        let storedSeats = localStorage.getItem(`bus_${id}_seats`);
        if (storedSeats) {
          return JSON.parse(storedSeats);
        }
    
        // Generate seat structure with availability
        return Array.from({ length: totalSeats }, (_, index) => ({
          id: index + 1,
          status: index < availability ? "available" : "occupied", 
        }));

      });
    
      useEffect(() => {
        if (seats.length > 0) {
          localStorage.setItem(`bus_${id}_seats`, JSON.stringify(seats));
        }
      }, [seats]);

    const handleSeatClick = (seatId) => {
        const seat = seats.find((s) => s.id === seatId);
        if (seat.status === "available") {
            if (selectedSeats.includes(seatId)) {
                setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
            } else {
                setSelectedSeats([...selectedSeats, seatId]);
            }
        }
    };

    const handleSeatBook = (bookSeats) => {
        setSeats((prev) =>
            prev.map((seat) =>{
                // console.log(seat);
                
                return bookSeats.includes(seat.id) ? { ...seat, status: "occupied" } : seat
            })
        );
        setMyBooking(selectedSeats);
        addBookingDetails(bookSeats);
        setSelectedSeats([]); // Clearing after statas chang
    };

    const addBookingDetails = (bookSeats) =>{
        const newBooking = {
            busName : name,
            departureTime : departure,
            arrivalTime : arrival,
            bookedSeats : bookSeats.sort((a,b)=>a-b).join(", "),
            from:from,
            to:to,
            departureDate:date
        }

        bookedBusData.push(newBooking);
        // console.log("booking details added : ",bookedBusData)
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Bus Details</h1>
            <div className="border rounded-lg p-4 shadow-lg mb-6">
                <p>
                    <strong>Bus ID:</strong> {id}
                </p>
                <p>
                    <strong>Bus Name:</strong> {name}
                </p>
                <p>
                    <strong>Departure:</strong> {departure}
                </p>
                <p>
                    <strong>Arrival:</strong> {arrival}
                </p>
                <p>
                    <strong>Seats Available:</strong> {availability}
                </p>
                <p>
                    <strong>Price:</strong> Rs.{price}
                </p>
            </div>

            <h2 className="text-xl font-bold mb-4">Select Your Seats</h2>

            <div className="max-w-screen gap-5 flex">
                <div className="grid grid-cols-12 gap-2">
                    {seats.map((seat) => (
                        <div
                            key={seat.id}
                            className={`w-12 h-12 flex items-center justify-center text-black font-bold cursor-pointer rounded
                                ${
                                    seat.status === "occupied"
                                        ? "bg-slate-500 cursor-not-allowed"
                                        : selectedSeats.includes(seat.id)
                                        ? "bg-green-500"
                                        : "bg-white border-2 border-lime-600"
                                }`}
                            onClick={() => handleSeatClick(seat.id)}
                        >
                            {seat.id}
                        </div>
                    ))}
                </div>

                <div className="mt-4 pl-10">
                    <h2 className="text-lg font-semibold">Legend:</h2>
                    <div className="flex items-center space-x-4 mt-2">
                        <div className="w-6 h-6 bg-white  mr-30rounded border-2 border-lime-600"></div>
                        <span>Available</span>
                        <div className="w-6 h-6 bg-slate-500 rounded"></div>
                        <span>Occupied</span>
                        <div className="w-6 h-6 bg-green-500 rounded"></div>
                        <span>Selected</span>
                    </div>

                    <div> 
                        {selectedSeats.length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-lg font-bold">Selected Seats:</h3>
                                <p>{selectedSeats.sort((a,b)=>a-b).join(", ")}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        {myBooking.length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-lg font-bold text-red-700 ">  Booking Succesful:</h3>
                                <p className="font-bold">Seat No. : {myBooking.sort((a,b)=> a-b).join(", ")}</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>        

           
            <div className="mt-10 flex justify-center">
                <button type="submit" className="bg-red-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-red-800 "
                onClick={()=>handleSeatBook(selectedSeats)} >
                    Book Seats </button>
            </div>
        </div>
       

    );
}
