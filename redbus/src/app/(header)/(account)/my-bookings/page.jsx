"use client"
import { useState } from "react";
export default function MyBooking(name,arrival,departure,bookSeats){
    console.log(name,arrival,departure,bookSeats);
    // let [name,arrival,departure,bookSeats]= params
    // console.log(busDetails)
    // let [busName,setBusName] = useState(name || '')
    // let [arrivalTime,setArrivalTime] = useState(arrival || '')
    // let [departureTime,setDepartureTime] = useState(departure || '')
    // let [bookedSeats,setBookedSeats] = useState(bookSeats || '')

    // setBookedSeats(bookedSeats.sort((a,b)=>a-b).join(", "));
    
    // const name = localStorage.getItem('name')
    // console.log(name)

return <>
        <div className=" bg-slate-400 flex justify-center items-center max-h-screen">
            <div className="w-96 h-96 bg-slate-800 p-5">
                <div className="text-white">
                    <p className="flex justify-center font-bold">My Tickets</p>
                    <p className="pt-3 font-semibold">Bus Details:</p>
                    <div>
                        <p>Bus Name : {busName}</p>
                        <p>Departure Time : {departureTime}</p>
                        <p>Arrival Time : {arrivalTime}</p>
                        <p>Departure Time : {bookSeats}</p>

                    </div>
                </div>

            </div>
        </div>
    </>
}