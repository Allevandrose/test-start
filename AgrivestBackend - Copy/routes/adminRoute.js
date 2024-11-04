const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.post('/adminregister', adminController.adminregister);
router.post('/adminlogin',  adminController.adminlogin);


module.exports = router;
