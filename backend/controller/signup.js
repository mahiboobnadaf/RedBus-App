const { connection } = require('../config/dbConfig');
const express = require('express');
const bcrypt = require('bcrypt'); 
const app = express();

let user_register =async (req, res) => {
    try {
        const { name, mobile_no, address, password } = req.body;

        // console.log(name, mobile_no, password, address)
        
        if (!name || !mobile_no || !password || !address) {
            return res.send("some fields are required missing");
        }


        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // console.log(hashedPassword + "$%")

        let signupQuery = `INSERT INTO USERS_TABLE (user_name, mobile_no, address, password) VALUES (?, ?, ?, ?)`;
        
        connection.query(signupQuery, [name, mobile_no, address, hashedPassword], (err, result) => {
            if (err) {
                console.error(err.sqlMessage || err);
                return res.send("Error occurred while adding user");
            }

            res.send("User added successfully");
        });
    } catch (error) {
        console.error("Error in user_register:", error);
        res.send("Error while adding user");
    }
};

module.exports = { user_register };
