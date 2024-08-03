const express = require('express');
const router = express.Router();
const menuController = require('../controller/menuController')

router.post('/add', menuController.add);
router.get('/get/:foodSku', menuController.getBySku);
router.get('/get', menuController.get);
router.put('/edit/:foodSku', menuController.edit);
router.delete('/delete/:foodSku', menuController.delete);

module.exports = router;