const express = require('express');
const router = express.Router();
const menuController = require('../controller/menuController')

router.post('/add', menuController.add);

module.exports = router;