const dbCon = require('mysql').createConnection(require('config').get('dbConfig'))
const uuid = require('uuid')

module.exports = {
    register : (username, email, pwd)=>{
        return new Promise((resolve, reject)=>{
            let id = `${uuid.v4()}${uuid.v4()}`
            dbCon.query(`INSERT INTO accounts VALUES('${id}', ${dbCon.escape(username)}, ${dbCon.escape(email)}, ${dbCon.escape(pwd)});`, (err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    },
    login : (email, pwd) =>{
        return new Promise((resolve, reject)=>{
            dbCon.query(`SELECT * FROM accounts WHERE email LIKE ${dbCon.escape(email)} AND password LIKE ${dbCon.escape(pwd)};`, (err, result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
    }
}