const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'webxiaodudu',
    database: 'game_mod',
    password:'pltkd@198526'
  });

function query (sql,value){
    return new Promise((resolve,reject)=>{
        connection.query(sql,value,(error,result)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(result)
            }
        })
    })
    
}
module.exports=query