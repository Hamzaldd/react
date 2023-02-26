const express = require('express')
const router = express.Router()
const userCtr = require('../Controllers/UserController')
const verifyToken  = require('./verifyToken')




router.post('/AuthUser',userCtr.register)
router.post('/login',userCtr.login)
router.get('/test',verifyToken,userCtr.test)

module.exports = router