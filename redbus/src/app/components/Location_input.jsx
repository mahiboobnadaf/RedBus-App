"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LocationInput() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const router = useRouter();

    const today = new Date();
    const currYear = today.getFullYear();
    const currMonth = (today.getMonth() + 1).toString().padStart(2, "0"); 
    const currDate = today.getDate().toString().padStart(2, "0");
    const minDate = `${currYear}-${currMonth}-${currDate}`;

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        router.push(`/buses?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`);
    };

    return (
        <div className="flex items-center justify-center h-[85%]">
            <form
                onSubmit={handleSubmit}
                className="text-red-950 p-10 bg-opacity-40 rounded-2xl flex flex-wrap gap-2"
            >
                <div className="p-2">
                    <label htmlFor="from" className="block mb-1 text-white font-extrabold">
                        From:
                    </label>
                    <input
                        type="text"
                        id="from"
                        name="from"
                        className="border w-full p-2 rounded-xl"
                        placeholder="Enter departure city"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        required
                    />
                </div>

                <div className="p-2">
                    <label htmlFor="to" className="block mb-1 text-white font-extrabold">
                        To:
                    </label>
                    <input
                        type="text"
                        id="to"
                        name="to"
                        className="border w-full p-2 rounded-xl"
                        placeholder="Enter destination city"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        required
                    />
                </div>

                <div className="p-2">
                    <label htmlFor="date" className="block mb-1 text-white font-extrabold">
                        Date:
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        min={minDate}
                        className="border w-full p-2 rounded-xl"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="p-2 flex w-full justify-center">
                    <button
                        type="submit"
                        className="bg-red-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-red-800"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}
