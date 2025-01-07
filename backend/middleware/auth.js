const jwt = require('jsonwebtoken');
const JWT_SECRET = "Mahiboob@Nadaf@123";


const verifyToken = (req, res, next) => {
    try {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];


        if (!token) {
            console.error("No token provided.");
            return res.send("Access denied. No token provided.");
        }
        
        const decoded = jwt.decode(token);
        console.log(JSON.stringify(decoded));  


        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                console.error("Token verification failed:", err.message);
                return res.send("Invalid or expired token.");
            }

            req.user = user;
            next(); 
        });
    } catch (err) {
        console.error("Error in token verification middleware:", err.message);
        return res.send("Internal server error.");
    }
};

module.exports = verifyToken;
