const express = require('express');
const router = express.Router();
const menuController = require('../controller/menuController')

router.post('/add', menuController.add);
router.get('/get/:foodSku', menuController.getBySku)
router.get('/get', menuController.get)

module.exports = router;