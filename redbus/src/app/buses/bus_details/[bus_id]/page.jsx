"use client";

import { useSearchParams } from "next/navigation";
import { busData } from "../../busData";
import BusDetailsClient from "./BusDetailsClient";

export default function BusDetails({ params }) {
    const  {bus_id}  = params;
    const searchParams = useSearchParams();
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");

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
        <BusDetailsClient busDetails={busDetails} from={from} to={to} date={date} />
    );
}
