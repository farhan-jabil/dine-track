const express = require('express');
const router = express.Router();
const staffConstroller = require('../controller/staffController')

router.post('/add', staffConstroller.add);
router.get('/getById/:staffId', staffConstroller.getById);
router.get('/get', staffConstroller.get);
router.put('/edit/:staffId', staffConstroller.edit);
router.delete('/delete/:staffId', staffConstroller.delete);

module.exports = router;