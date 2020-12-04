const dbCon = require('mysql').createConnection(require('config').get('dbConfig'))


module.exports = {
    upload : (userId, title, type, dataStr)=>{
        return new Promise((resolve, reject)=>{
            dbCon.query(`INSERT INTO posts VALUES(NULL, ${dbCon.escape(userId)}, ${dbCon.escape(title)}, ${dbCon.escape(type)}, ${dbCon.escape(dataStr)})`, (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve()
                }
            })
        })
    },
    profilePosts : (userId)=>{
        return new Promise((resolve, reject)=>{
            dbCon.query(`SELECT id, title, type, dataStr from posts WHERE user_id LIKE ${dbCon.escape(userId)};`, (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }
}