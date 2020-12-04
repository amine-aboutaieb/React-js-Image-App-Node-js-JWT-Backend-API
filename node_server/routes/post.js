const router = require('express').Router()
const verify = require('../middlwares/tokenVerify')
const PostController = require('../controllers/post')

router.post('/upload', verify, (req,res)=>{
    PostController.upload(req, res)
})
router.get('/profile', verify, (req,res)=>{
    PostController.profilePosts(req, res)
})



module.exports = router