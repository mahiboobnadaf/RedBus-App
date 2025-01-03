var mysql = require('mysql');

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mahiboob@123",
  database:"RedBus_App"
});

// console.log(connection);

let connected = connection.connect((err)=> {
    if (err) throw err;
    console.log("Database Connected!");
})

// for(const key in connection){
//   console.log(key)
// }

// console.log(connection);

module.exports = {connection};


// con.connect((err)=>{
//     if (err) throw err;
//     console.log("Database connected");

//     con.query("SELECT * FROM BUSES_TABLE", (err, result, fields)=> {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

