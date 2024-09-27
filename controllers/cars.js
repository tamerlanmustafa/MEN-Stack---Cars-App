const Car = require('../models/car')

const createCar = async (req, res) => {

    try {
        await Car.create(req.body)
        res.redirect('/')
    } catch (err) {
        console.log(err) 
        res.redirect('/')
    }
}

const getAllCars = async (req, res) => {

    try {
        const allCars = await Car.find()
        res.render('index', { cars: allCars })
        
    } catch(err) {
        console.log(err) 
        res.redirect('/')
    }
}

const getOneCar = async (req, res) => {
    try {
        const foundCar = await Car.findById(req.params.id)
        res.render('cars/show', {foundCar: foundCar} )
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    createCar,
    getAllCars, 
    getOneCar
}