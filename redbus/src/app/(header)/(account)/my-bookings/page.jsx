"use client"

import { bookedBusData } from "@/app/buses/bookedBusData";

export default function MyBooking(){
    // console.log(window.localStorage.getItem('id'))
return <>
        <div className=" bg-slate-300 flex justify-center items-center max-h-auto">
            <div className="w-[400px] h-auto mt-10 mb-10 bg-slate-800 p-5 rounded-lg">
                <div className="text-white">
                    <p className="flex justify-center font-bold">My Tickets</p>
                            <div className="pt-3 text-white">
                                {bookedBusData.length > 0 && localStorage.getItem('id') ? (
                                    bookedBusData.map((item,index)=>(
                                        <div key={index} className="">
                                            <p className="pt-3 font-semibold">Bus Details: {index+1}</p> 
                                            <div className="pl-4 pt-2">   
                                            <p><strong>Passenger:</strong> {localStorage.getItem('name')} </p>
                                                <p> Bus Name : {item.busName}</p>
                                                <p> From {item.from} to --- {item.to} </p>
                                                <p> Departure Date : {item.departureDate}</p>
                                                <p> Seat No. : {item.bookedSeats}</p>
                                                <p> Departure Time : {item.departureTime}</p>
                                                <p> Arrival Time : {item.arrivalTime}</p>
                                            </div>
                                        </div>
                                        
                                    ))
                                )
                                : (
                                    <p> No Bookings Found </p>
                                )    
                                }
                            </div>
                </div>
            </div>
        </div>
    </>
}

