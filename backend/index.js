const express = require("express");

const app = express();

var cors = require('cors')
 
app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.send("Heloo world")
})

app.listen(3003,()=>{
    console.log("Server is running at port: 3003")
})