const PostModel = require('../models/post')

module.exports = {
    upload : (req, res)=>{
        let {title, type, data} = req.body
        let id = req.userId
        PostModel.upload(id, title, type, data).then(()=>{
            res.status(200).json({message : "Post added successfully"})
        }).catch((error)=>{
            console.log(error)
            res.status(500).json({message : "An error has occured"})
        })
    },
    profilePosts : (req, res)=>{
        let id = req.userId
        PostModel.profilePosts(id).then((result)=>{
            res.status(200).json({posts : result})
        }).catch((error)=>{
            console.log(error)
            res.status(500).json({message : "An error has occured"})
        })
    }
}