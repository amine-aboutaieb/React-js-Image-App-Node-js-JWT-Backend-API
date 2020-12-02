const UserModel = require('../models/user')

module.exports = {
    register : (req,res)=>{

        let {username, email, pwd} = req.body
        if(username && email && pwd){
            if(username !== "" && email !== "" && pwd !== ""){
                UserModel.register(username, email, pwd).then(()=>{
                    res.status(200).json({message : "New user registered successfully"})
                }).catch((err)=>{
                    res.status(500).json({message : "An error has occured"})
                })
            }else{
                res.status(400).json({message : "Insufficient registration data"})
            }
        }else{
            res.status(400).json({message : "Insufficient registration data"})
        }
        
    },
    getUserData : (req,res)=>{
        // console.log("FROM USER CONTROLLER =>"+req.userId)
        UserModel.getUserData(req.userId).then((result)=>{
            if(result.length > 0){
                console.log(result[0])
                res.status(200).json({data : result[0], id : req.userId})
            }else{
                res.status(400).json({message : "An error has occured"})    
            }
        }).catch((error)=>{
            res.status(400).json({message : "An error has occured"})
        })
    }
}