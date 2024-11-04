const Consumer = require("../models/Consumer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Register a new consumer
exports.register = async (req, res, next) => {
  try {
    const { consumer_name, consumer_email, consumer_phone, consumer_password } =
      req.body;

    // Validate request body
    if (!consumer_name || !consumer_email || !consumer_password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the consumer already exists
    const existingConsumer = await Consumer.findOne({
      where: { consumer_email },
    });
    if (existingConsumer) {
      return res.status(409).json({ message: "Consumer already exists" });
    }

    // Hash the consumer_password
    const hashedconsumer_password = await bcrypt.hash(consumer_password, 10);

    // Create a new consumer instance
    const newConsumer = new Consumer({
      consumer_name,
      consumer_email,
      consumer_phone,
      consumer_password: hashedconsumer_password,
    });

    // Save the consumer to the database
    const savedConsumer = await newConsumer.save();

    // Respond with the created consumer info
    res.status(201).json({
      consumer_id: savedConsumer.consumer_id,
      consumer_name: savedConsumer.consumer_name,
      consumer_email: savedConsumer.consumer_email,
    });
  } catch (error) {
    next(error);
  }
};

// Login a consumer
exports.login = async (req, res, next) => {
  try {
    const { consumer_email, consumer_password } = req.body;

    const consumer = await Consumer.findOne({ where: { consumer_email } });
    if (!consumer) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(
      consumer_password,
      consumer.consumer_password
    );
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        consumer_id: consumer.consumer_id,
        consumer_name: consumer.consumer_name,
        consumer_email: consumer.consumer_email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      consumer: {
        consumer_email: consumer.consumer_email,
        consumer_name: consumer.consumer_name,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    next(error);
  }
};

// Count consumers
exports.countConsumers = async (req, res, next) => {
  try {
    const count = await Consumer.count();
    res.json({ count });
  } catch (error) {
    next(error);
  }
};

// Get all consumers
exports.getConsumers = async (req, res, next) => {
  try {
    const consumers = await Consumer.findAll();
    res.json(consumers);
  } catch (error) {
    next(error);
  }
};
