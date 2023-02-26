const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({path: '../config/config.env'})

module.exports = (req,res,next) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Acces non autorise!')
    try {
        verifToken = jwt.verify(token,process.env.SECRET_TOKEN)
        next()
    } catch (err) {
        res.status(400).send(err.message)
    }

}