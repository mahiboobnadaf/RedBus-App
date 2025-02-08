// const connection = require("../config/dbConfig")


// let busses =  [ 
//     {
//     bus_id :1 ,totalseats : 30 
//     }

//     ,

//     {
//         bus_id :2 ,totalseats : 40 
        
//     }
// ]

// for(let bus of busses){
//     for(let i = 0 ; i< bus.totalseats ; i++){

//         let equery = 'insert into SEATS_TABLE(seat_number , status , bus_id) values(?,?,?)'
//         connection.execute(equery, [i+1 , 1 ,  bus.bus_id  ], async (err, result) => {
//             if (err) {
//                 console.error("Database error:", err);
//                 return res.send("Database server error.");
//             }else{
//                 console.log(result);
                
//             }
//         })
//     }
// }


const {connection} = require("../config/dbConfig");

let busses = [
    { bus_id: 1, totalseats: 30 },
    { bus_id: 2, totalseats: 40 }
];

for (let bus of busses) {
    for (let i = 0; i < bus.totalseats; i++) {
        let query = "INSERT INTO SEATS_TABLE (seat_number, status, bus_id) VALUES (?, ?, ?)";
        connection.query(query, [i + 1, 1, bus.bus_id], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return;
            }
            console.log("Seat inserted:", result);
        });
    }
}
