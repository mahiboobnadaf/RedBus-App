export default function MyBooking(busName,arrival,departure,bookedSeats){
    console.log(busName,arrival,departure,bookedSeats)
    // console.log(bookedSeats)
    console.log(window.localStorage.getItem('name'))
    return <h1 className="text-lg font-bold">My Bookings section   </h1>
}