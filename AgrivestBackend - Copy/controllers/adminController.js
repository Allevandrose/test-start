const  Admin  = require('../models/admin.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();



exports.adminregister = async (req, res, next) => {
  try {
    const { adminname, email, password } = req.body;

        // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin instance with the hashed password
    const newAdmin = new Admin({ adminname, email, password: hashedPassword });

        // Save the user to the database   

        const savedAdmin = await newAdmin.save();   


        // Respond with the created user info
        res.status(201).json({ id: savedAdmin.id, adminname: savedAdmin.adminname, email: savedAdmin.email });
  } catch (error) {
    next(error);
  }
};



exports.adminlogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ where: { email } });
    if (!admin) return res.status(401).json({ message: 'Invalid Email credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid Password credentials' });

    const token = jwt.sign({ id: admin.id, adminname: admin.adminname, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '30m' });

  

    res.json({
      token,
      admin: {
        email: admin.email,
        adminname: admin.adminname
      }
      
    });
    console.log(token, admin.adminname)
  } catch (error) {
    console.error("Login error:", error);
    next(error);
  }
};



