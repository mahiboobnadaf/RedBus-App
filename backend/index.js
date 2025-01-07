const express = require("express");
const { connection } = require("./config/dbConfig");
const verifyToken = require('./middleware/auth'); 
const cors = require('cors');

const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing

app.get('/', verifyToken, (req, res) => {  
    res.send(`Welcome ${req.user.user_name}, you have access to this ROOT route.`);
});

// Sign Up - User Registration
const signUp = require('./controller/signup');
app.post("/signup", signUp.user_register);

// Login
const logIn = require('./controller/login');
app.post("/login", logIn.login);

// Start Server
app.listen(3003, () => {
    console.log("Server is running at port: 3003");
});
