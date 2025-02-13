const { connection } = require('../config/dbConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "Mahiboob@Nadaf@123"; 

let login = (req, res) => {
    try {
        const { mobile_no, password } = req.body;

        if (!mobile_no || !password) {
            return res.status(400).send("Mobile number and password are required.");
        }

        let loginQuery = "SELECT user_id,user_name, mobile_no, password FROM USERS_TABLE WHERE mobile_no = ?";

        connection.query(loginQuery, [mobile_no], async (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.send("Database server error.");
            }

            if (result.length === 0) {
                return res.send("Mobile number not found.");
            }

            const isPasswordRight = await bcrypt.compare(password, result[0].password);

            if (isPasswordRight) {
                const token = jwt.sign(
                    { user_name: result[0].user_name, user_id: result[0].user_id },
                    JWT_SECRET,
                    { expiresIn: '1h' } 
                );

                console.log("Authenticated tokem : ", token);
                // console.log(req.header("mama") + "AA")
                return res.json({
                    message: `Welcome ${result[0].user_name}`,
                    token: token,
                });
            }

            return res.send("Incorrect password.");
        });
    } catch (err) {
        console.error(err);
        return res.send("Internal server error.");
    }
};

module.exports = { login };
