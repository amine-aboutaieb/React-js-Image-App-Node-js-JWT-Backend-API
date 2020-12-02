const router = require('express').Router()
const UserController = require('../controllers/user')
const tokenVerify = require('../middlwares/tokenVerify')

router.post('/register', (req, res)=>{
    UserController.register(req, res)
})

router.get('/data', tokenVerify, (req, res)=>{
    UserController.getUserData(req, res)
})




module.exports = router