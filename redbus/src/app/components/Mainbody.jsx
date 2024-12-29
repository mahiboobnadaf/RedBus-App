import Location_input from "./Location_input";
import Offers from "./Offers";
function Mainbody(){
    return (
        <>
            <div className="w-full overflow-x-hidden" style={{
                backgroundImage: "url('/static/bg_image5.jpg')",
                backgroundSize:"100% 100%",
                height: "95vh",
                // minHeight:"90vh", 
                color: "white", 
                backgroundRepeat:"no-repeat"
            }}>
                <div className="text-white text-2xl font-extrabold font-sans flex justify-center p-2">
                    Indias No. 1 Online Bus Ticket Booking Site
                </div>

                <Location_input />
            </div>
            <Offers />
        </>
)
}

export default Mainbody;