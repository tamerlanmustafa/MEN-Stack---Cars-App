const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const methodOverride = require("method-override");
const morgan = require("morgan");

const carsController = require('./controllers/cars')
const Car = require("./models/car")

PORT = process.env.PORT || 3000;

const app = express()



app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));




  
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log('Connected')
})

mongoose.connection.on("error", (err) => {
    console.log(err);
});




app.get('/', carsController.getAllCars)

app.get('/cars/new', (req, res) => {
    res.render('cars/new')
})  

app.get('/cars/show/:id', carsController.getOneCar)


app.post('/create', carsController.createCar)

app.listen(3000, () => {
    console.log(`Server is running on port: ${PORT}`)
}) 


