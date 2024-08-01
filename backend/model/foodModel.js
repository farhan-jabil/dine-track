const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodName: {
        type: String,
        required: true,
    },
    foodPrice: {
        type: Number,
        required: true,
    },
    foodCategory: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Food', foodSchema)