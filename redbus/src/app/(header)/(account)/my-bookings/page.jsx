"use client"
import { bookedBusData } from "@/app/buses/bookedBusData";

export default function MyBooking(){

return <>
        <div className=" bg-slate-400 flex justify-center items-center max-h-screen">
            <div className="w-96 h-96 bg-slate-800 p-5">
                <div className="text-white">
                    <p className="flex justify-center font-bold">My Tickets</p>
                    <div className="pt-3">
                        {bookedBusData.length > 0 ? (
                            bookedBusData.map((item,index)=>(
                                <div key={index} className="ml-4">
                                    <p className="pt-3 font-semibold">Bus Details: {index+1}</p> 
                                    <div className="pl-4 pt-2">               
                                        <p>Bus Name : {item.busName}</p>
                                        <p> From {item.from} to --- {item.to} </p>
                                        <p>Departure Date : {item.departureDate}</p>
                                        <p>Seat No. : {item.bookedSeats}</p>
                                        <p>Departure Time : {item.departureTime}</p>
                                        <p>Arrival Time : {item.arrivalTime}</p>
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

    
    // setBookedSeats(bookedSeats.sort((a,b)=>a-b).join(", "));
    
    // const name = localStorage.getItem('name')
    // console.log(name)

    // let [busName,setBusName] = useState(name || '')
    // let [arrivalTime,setArrivalTime] = useState(arrival || '')
    // let [departureTime,setDepartureTime] = useState(departure || '')
    // let [bookedSeats,setBookedSeats] = useState(bookSeats || '')
    