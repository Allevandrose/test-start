const express = require('express');
const router = express.Router();
const commodityController = require('../controllers/commodityController');
const consumerauthenticateToken = require('../middleware/consumerMiddleware');
const farmerauthenticateToken = require('../middleware/farmerMiddleware');
const adminauthenticateToken = require('../middleware/adminMiddleware');

//CONSUMER
router.get('/getallcommodities(CONSUMER)', consumerauthenticateToken, commodityController.getAllCommodities);
router.get('/getcommoditycategory(CONSUMER)', consumerauthenticateToken, commodityController.getCommodityByCategory);
router.get('/getcommodityorigin(CONSUMER)', consumerauthenticateToken, commodityController.getCommodityByOrigin);
router.get('/getcommodityname(CONSUMER)', consumerauthenticateToken, commodityController.getCommodityByName);

//FARMER
router.get('/getallcommodities(FARMER)', farmerauthenticateToken, commodityController.getAllCommodities);
router.get('/getcommoditycategory(FARMER)', farmerauthenticateToken, commodityController.getCommodityByCategory);
router.get('/getcommodityorigin(FARMER)', farmerauthenticateToken, commodityController.getCommodityByOrigin);
router.get('/getcommodityname(FARMER)', farmerauthenticateToken, commodityController.getCommodityByName);
router.get('/getcommodityfarmerid(FARMER)', farmerauthenticateToken, commodityController.getCommodityByName);

//ADMIN
router.get('/getallcommodities(ADMIN)', adminauthenticateToken, commodityController.getAllCommodities);
router.get('/getcommoditycategory(ADMIN)', adminauthenticateToken, commodityController.getCommodityByCategory);
router.get('/getcommodityorigin(ADMIN)', adminauthenticateToken, commodityController.getCommodityByOrigin);
router.get('/getcommodityname(ADMIN)', adminauthenticateToken, commodityController.getCommodityByName);
router.get('/getcommodityfarmerid(ADMIN)', adminauthenticateToken, commodityController.getCommodityByName);



module.exports = router;
