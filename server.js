const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const methodOverride = require("method-override");
const morgan = require("morgan");

const carsController = require('./controllers/cars')


PORT = process.env.PORT || 3000;

const app = express()



app.set('view engine', 'ejs')





mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log('Connected')
})

mongoose.connection.on("error", (err) => {
    console.log(err);
});




app.get('/', (req, res) => {
    res.send("HOME")
})

app.get('/new', (req, res) => {
    res.render('new')
})



app.post('/create', carsController.createCar)

app.listen(3000, () => {
    console.log(`Server is running on port: ${PORT}`)
}) 


