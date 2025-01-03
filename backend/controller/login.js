const {connection} = require('../config/dbConfig')

// console.log(connection + "**#")

let login = (req,res) =>{
    const {mobile_no,password} = req.body;
    let loginQuery = "SELECT user_name FROM USERS_TABLE WHERE mobile_no = ? AND password = ?"
    connection.query(loginQuery,[mobile_no,password], (err,result,fields)=>{
      if(result.length == 0 || err){
        console.error(err);
        return res.end("No User Found" )
      }
    //   console.log(result[0].user_name)
    res.send(`Welcome ${result[0].user_name}`)
    })
}

module.exports={login}