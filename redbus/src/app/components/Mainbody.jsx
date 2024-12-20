"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Location_input from "./Location_input";

function Mainbody(){
   
    const router = useRouter();

    useEffect(() => {
        const userId = window.localStorage.getItem('id');
        if (!userId) {
            router.push('/login');
        }
    }, [router]);
    
    return (
        <div className="w-screen overflow-x-hidden" style={{
            backgroundImage: "url('/static/bg_image5.jpg')",
            backgroundSize:"100% 90%",
            height: "100vh", 
            color: "white", 
            backgroundRepeat:"no-repeat"
        }}>
            <div className="text-white text-2xl font-extrabold font-sans flex justify-center p-2">
                Indias No. 1 Online Bus Ticket Booking Site
            </div>

        
            <Location_input />
        </div>
)
}

export default Mainbody;