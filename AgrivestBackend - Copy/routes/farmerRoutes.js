const express = require('express');
const router = express.Router();
const farmerController = require('../controllers/farmerController');

router.post('/register',  farmerController.register);
router.post('/login',  farmerController.login);
router.get('/countfarmers',  farmerController.countFarmers);
router.get('/farmers', farmerController.getFarmers);


module.exports = router;
