const router = require('express').Router()
const UserController = require('../controllers/user')

router.post('/register', (req, res)=>{
    UserController.register(req, res)
})




module.exports = router