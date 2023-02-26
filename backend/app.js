const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
const pharmacies = require('./routes/PharmacieRoute')
app.use(cors({
    origin:'http://localhost:3000',
    methods:'GET.POST,PUT,PATCH,DELETE,OPTIONS'
}))
app.use('/api/',pharmacies)

const meds = require('./routes/medicamentRoute')
app.use('/api/',meds)

const dispo = require('./routes/disponibiliteRoute')
app.use('/api/',dispo)

const user = require('./routes/UserRoute')
app.use('/api',user)



module.exports = app