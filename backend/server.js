const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './backend/config/config.env'})
PORT = process.env.PORT
const DB=process.env.db_conn
mongoose.connect(DB, ()=>console.log('Database connected'))

app.listen(PORT, () => console.log(`Server is running on ${PORT}`) )