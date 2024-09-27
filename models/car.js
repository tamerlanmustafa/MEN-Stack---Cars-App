const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    imageUrl: { type: String },    
})


const carsSchema = new mongoose.Schema({
    make: String,
    model: String,
    miles: Number, 
    year: Number,
    cleanTitle: Boolean,
    images: [imageSchema]
})

const Car = mongoose.model("Car", carsSchema)

module.exports = Car