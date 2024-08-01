const express = require('express');
const router = express.Router();
const foodController = require('../controller/foodController')

router.post('/add', foodController.add);

module.exports = router;