"use client"

import { useSearchParams } from "next/navigation";
import { busData } from "./busData";
import { useRouter } from "next/navigation";


export default function BusesPage() {
    const searchParams = useSearchParams();
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");

    const router = useRouter();

    const handleClick = (busId) => {
        const queryString = new URLSearchParams({ from, to, date }).toString();
        router.push(`/buses/bus_details/${busId}?${queryString}`);
    };
    

    return (
    <>
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                Buses from {from} to {to} on {date}
            </h1>

            <div className="grid grid-cols-1 gap-5">
                {busData.length > 0 ? (
                    busData.map((bus) => (
                        <div key={bus.id} className="p-4 border rounded-lg shadow" 
                                onClick={()=>handleClick(bus.id)}
                        >
                            <h2 className="text-xl font-semibold">{bus.name}</h2>
                            <p>Departure: {bus.departure}</p>
                            <p>Arrival: {bus.arrival}</p>
                            <p>Price: {bus.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No buses available for the selected route and date.</p>
                )}
            </div>
        </div>

        {/* <BusDetails
            from={from}
            to={to}
            date={date}
        /> */}
    </>
    );
}
