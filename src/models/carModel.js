const mongoose = require("mongoose");

const carsModel = mongoose.Schema({
        id: Number,
        brand: String,
        model: String,
        year: Number,
        price: Number,
        fuelType: String,
        seatingCapacity: Number,
        mileage: Number,
        transmission: String,
        color: String,
        engine: String,
        horsepower: Number,
        bodyType: String,
        features: {
            type : [String],
            default : []
        },
        image: String
})

const Car = mongoose.model('carsInfo',carsModel);
module.exports = Car;