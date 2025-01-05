const {connection} = require('../config/dbConfig');
const bcrypt = require('bcrypt'); 

// console.log(connection + "**#")

let login = (req,res) =>{
    try{
        const {mobile_no,password} = req.body;
    
        if (!mobile_no || !password) {
            return res.send("Mobile number and password are required.");
        }
        
        let loginQuery = "SELECT user_name,mobile_no,password FROM USERS_TABLE WHERE mobile_no = ? "
        
        connection.query(loginQuery,[mobile_no], async (err,result)=>{
        
            if (err) {
            console.error("Database error:", err);
            return res.send("DB server error.");
        }

        if (result.length == 0){
            return res.send("Mobile Number Not FOund");
        }

        const isPasswordRight = await bcrypt.compare(password,result[0].password);
        
        if(isPasswordRight){
            console.log("Authenticated")
            return res.send(`Welcome ${result[0].user_name}`)
        }

        return res.send("Password Wrong!!!")
        
        })
    }
    catch(err){
        console.error(err)
        return res.send("DB Error")
    }
}

module.exports={login}