const express = require("express");
const router = express.Router();
const consumerController = require("../controllers/consumerController"); // Ensure this path is correct

// Define the routes
router.post("/register", consumerController.register);
router.post("/login", consumerController.login);
router.get("/countconsumers", consumerController.countConsumers);
router.get("/consumers", consumerController.getConsumers);

module.exports = router;
