const jwt = require('jsonwebtoken')
const jwt_secret = require('config').get("jwt_secret")


function verify(req, res, next){
    let token = JSON.parse(req.headers['x-authentication-token'])
    jwt.verify(token, jwt_secret, (error, decoded)=>{
        if(error){
            res.status(401).json({message : "Invalid token"})
        }else{
            let {id} = decoded
            req.userId = id
            next()
            //res.status(200).json({message : "Valid token", payload : {id}})
        }
    })
}


module.exports = verify