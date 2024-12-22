"use client"
import { useState } from "react";
export default function MyBooking(){
    // console.log(name,arrival,departure,bookSeats + "* (");
    
  

return <>
        <div className=" bg-slate-400 flex justify-center items-center max-h-screen">
            <div className="w-96 h-96 bg-slate-800 p-5">
                <div className="text-white">
                    <p className="flex justify-center font-bold">My Tickets</p>
                    <p className="pt-3 font-semibold">Bus Details:</p>
                      <div>
                        <p>Bus Name : {busName}</p>
                        <p>Departure Time : {}</p>
                        <p>Arrival Time : {}</p>
                        <p>Departure Time : {}</p>

                    </div>
                </div>

            </div>
        </div>
    </>
}

    
    // setBookedSeats(bookedSeats.sort((a,b)=>a-b).join(", "));
    
    // const name = localStorage.getItem('name')
    // console.log(name)

    // let [busName,setBusName] = useState(name || '')
    // let [arrivalTime,setArrivalTime] = useState(arrival || '')
    // let [departureTime,setDepartureTime] = useState(departure || '')
    // let [bookedSeats,setBookedSeats] = useState(bookSeats || '')
    