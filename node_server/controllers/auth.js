const jwt = require('jsonwebtoken')
const jwt_secret = require('config').get('jwt_secret')
const UserModel = require('../models/user')

module.exports = {
    login : (req, res)=>{
        console.log(req.body)
        let {email, pwd} = req.body
        if(email && pwd){
            if(email !== "" && pwd !== ""){
                UserModel.login(email, pwd).then((result)=>{
                    if(result.length > 0){
                        //AUTH SUCCESS
                        //res.status(200).json(result)
                        let id = result[0].id
                        jwt.sign({id}, jwt_secret, (error, token)=>{
                            res.status(200).json({token:token})
                        })
                    }else{
                        res.status(400).json("Authentication data incorrect")
                    }
                }).catch((error)=>{
                    res.status(500).json(error)
                })
            }else{
                res.status(400).json({message : "Insufficient authentication data"})
            }
        }else{
            res.status(400).json({message : "Insufficient authentication data"})
        }
    },
    verify : (req,res)=>{
        let token = JSON.parse(req.headers['x-authentication-token'])
        jwt.verify(token, jwt_secret, (error, decoded)=>{
            if(error){
                res.status(400).json({message : "Invalid token"})
            }else{
                let {id} = decoded
                res.status(200).json({message : "Valid token", payload : {id}})
            }
        })
    }
}