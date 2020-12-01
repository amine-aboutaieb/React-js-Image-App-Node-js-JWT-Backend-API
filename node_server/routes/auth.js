const router = require('express').Router()
const AuthController = require('../controllers/auth')

router.post('/login', (req,res)=>{
    AuthController.login(req, res)
})
router.get('/verify', (req, res)=>{
    AuthController.verify(req, res)
})


module.exports = router