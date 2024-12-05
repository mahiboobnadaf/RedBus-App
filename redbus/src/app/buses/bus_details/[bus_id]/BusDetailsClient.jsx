"use client";

import { useState } from "react";

export default function BusDetailsClient({ busDetails }) {
    const { id, name, arrival, departure, availability, price } = busDetails;
    console.log(name)

    const totalSeats = 50; // Total seats on the bus
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Generate seat structure with availability
    const seats = Array.from({ length: totalSeats }, (_, index) => ({
        id: index + 1,
        status: index < availability ? "available" : "occupied", // Mark seats as available or occupied
    }));

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

            <div className="grid grid-cols-6 gap-2">
                {seats.map((seat) => (
                    <div
                        key={seat.id}
                        className={`w-12 h-12 flex items-center justify-center text-white font-bold cursor-pointer rounded
                            ${
                                seat.status === "occupied"
                                    ? "bg-slate-500 cursor-not-allowed"
                                    : selectedSeats.includes(seat.id)
                                    ? "bg-red-400"
                                    : "bg-green-500"
                            }`}
                        onClick={() => handleSeatClick(seat.id)}
                    >
                        {seat.id}
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <h2 className="text-lg font-semibold">Legend:</h2>
                <div className="flex items-center space-x-4 mt-2">
                    <div className="w-6 h-6 bg-green-500 rounded"></div>
                    <span>Available</span>
                    <div className="w-6 h-6 bg-slate-500 rounded"></div>
                    <span>Occupied</span>
                    <div className="w-6 h-6 bg-red-500 rounded"></div>
                    <span>Selected</span>
                </div>
            </div>

            {selectedSeats.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold">Selected Seats:</h3>
                    <p>{selectedSeats.join(", ")}</p>
                </div>
            )}
        </div>
    );
}
