const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    foodSku: {
        type: String,
        required: true,
        unique: true,
    },
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
    },
    foodDescription: {
        type: String,
        required: true,
    },
    foodIngredients: {
        type: [String],
        required: false,
    },
    foodAllergens: {
        type: [String],
        required: false,
    },
    foodSize: {
        type: [String],
        required: true,
    },
    foodImage: {
        type: String,
        required: true,
    },
    foodAvailablity: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Menu', menuSchema)