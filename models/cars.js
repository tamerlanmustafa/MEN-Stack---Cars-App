const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    imageUrl: { type: String, require },    
})

const carsSchema = new mongoose.Schema({
    make: String,
    model: String,
    miles: Number, 
    year: Date,
    cleanTitle: Boolean,
    images: [imageSchema]
})

const Cars = mongoose.model("Cars", carsSchema)

module.exports = Cars