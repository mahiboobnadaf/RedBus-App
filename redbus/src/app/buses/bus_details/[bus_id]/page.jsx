
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
