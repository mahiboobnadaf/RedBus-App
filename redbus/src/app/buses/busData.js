export const busData = [
    { 
      id: 1, 
      name: "Express Bus", 
      departure: "10:00 AM", 
      arrival: "2:00 PM", 
      price: "1500", 
      availability: 15, 
      seats: Array(15).fill(false)  // false represents available, true represents occupied
    },
    { 
      id: 2, 
      name: "Luxury Bus", 
      departure: "11:00 AM", 
      arrival: "3:00 PM", 
      price: "2500", 
      availability: 39, 
      seats: Array(39).fill(false)
    },
    { 
      id: 3, 
      name: "Nightline Bus", 
      departure: "9:00 PM", 
      arrival: "1:00 AM", 
      price: "1800", 
      availability: 23, 
      seats: Array(23).fill(false)
    }
  ];
  