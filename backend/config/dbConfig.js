var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mahiboob@123",
  database:"RedBus_App"
});

con.connect((err)=> {
  if (err) throw err;
  console.log("Database Connected!");
});

// con.connect((err)=>{
//     if (err) throw err;
//     console.log("Database connected");

//     con.query("SELECT * FROM BUSES_TABLE", (err, result, fields)=> {
//       if (err) throw err;
//       console.log(result);
//     });
//   });