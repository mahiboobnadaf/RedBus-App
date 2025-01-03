
const express = require("express");
const {connection} = require("./config/dbConfig");
const app = express();
var cors = require('cors')
 
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    // console.log(connection);    
    res.send("Heloo world" )
})

// routing

// Sign Up - User registration
const signUp = require('./controller/signup');
app.post("/signup", signUp.user_register);

//Login 
const logIn = require('./controller/login');
app.get("/login",logIn.login);





app.listen(3003,()=>{
    console.log("Server is running at port: 3003")
})