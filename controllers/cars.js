const Car = require('../models/car')

const createCar = async (req, res) => {
    if (req.body.cleanTitle) {
        req.body.cleanTitle = true;
    } else {
        req.body.cleanTitle = false;
    }
    
    try {
        await Car.create(req.body)
        res.redirect('/new')

    } catch (err) {
        console.log(err) 
        res.redirect('/new')
    }
}

module.exports = {
    createCar,
}