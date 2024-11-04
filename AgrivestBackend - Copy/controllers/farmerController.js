const Farmer = require("../models/Farmer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.register = async (req, res, next) => {
  try {
    const {
      farmer_name,
      farmer_email,
      farmer_phone,
      farmer_location,
      farmer_password,
    } = req.body;

    // Validate request body
    if (!farmer_name || !farmer_email || !farmer_password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the farmer already exists
    const existingFarmer = await Farmer.findOne({ where: { farmer_email } });
    if (existingFarmer) {
      return res.status(409).json({ message: "Farmer already exists" });
    }

    // Hash the farmer_password
    const hashedfarmer_password = await bcrypt.hash(farmer_password, 10);

    // Create a new farmer instance with the hashed farmer_password
    const newFarmer = new Farmer({
      farmer_name,
      farmer_email,
      farmer_phone,
      farmer_location,
      farmer_password: hashedfarmer_password,
    });

    // Save the farmer to the database
    const savedFarmer = await newFarmer.save();

    // Respond with the created farmer info
    res.status(201).json({
      farmer_id: savedFarmer.farmer_id,
      farmer_name: savedFarmer.farmer_name,
      farmer_email: savedFarmer.farmer_email,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { farmer_email, farmer_password } = req.body;

    const farmer = await Farmer.findOne({ where: { farmer_email } });
    if (!farmer)
      return res
        .status(401)
        .json({ message: "Invalid farmer_email credentials" });

    const isMatch = await bcrypt.compare(
      farmer_password,
      farmer.farmer_password
    );
    if (!isMatch)
      return res
        .status(401)
        .json({ message: "Invalid farmer_password credentials" });

    const token = jwt.sign(
      {
        farmer_id: farmer.farmer_id,
        farmer_name: farmer.farmer_name,
        farmer_email: farmer.farmer_email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      farmer: {
        farmer_email: farmer.farmer_email,
        farmer_name: farmer.farmer_name,
      },
    });
    console.log(token, farmer);
  } catch (error) {
    console.error("Login error:", error);
    next(error);
  }
};

exports.countFarmers = async (req, res, next) => {
  try {
    const farmerCount = await Farmer.count();
    res.status(200).json({ count: farmerCount });
  } catch (error) {
    next(error);
  }
};

exports.getFarmers = async (req, res, next) => {
  try {
    const farmers = await Farmer.findAll({
      attributes: ["farmer_id", "farmer_name", "farmer_email", "createdAt"], // Select specific fields to return
    });
    res.status(200).json(farmers);
  } catch (error) {
    next(error);
  }
};
