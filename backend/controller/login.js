const {connection} = require('../config/dbConfig')

// console.log(connection + "**#")

let login = (req,res) =>{
    const {mobile_no,password} = req.body;
    
    if (!mobile_no || !password) {
        return res.send("Mobile number and password are required.");
    }
    
    let loginQuery = "SELECT user_name,mobile_no,password FROM USERS_TABLE WHERE mobile_no = ? "
    
    connection.query(loginQuery,[mobile_no], (err,result)=>{
     if (err) {
        console.error("Database error:", err);
        return res.send("DB server error.");
    }

    if (result.length == 0){
        return res.send("Mobile Number Not FOund");
    }

    if(result[0].password == password){
        console.log("Authenticated")
        return res.send(`Welcome ${result[0].user_name}`)
    }

    return res.send("Password Wrong!!!")
    
})
}

module.exports={login}