const Commodity = require('../models/commodity');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');


exports.getAllCommodities = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const commodities = await Commodity.findAll();
    res.json(commodities);
  } catch (error) {
    console.error('Error fetching commodities:', error);
    next(error);
  }
};

exports.getCommodityByCategory = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const { category } = req.params;

    const commodities = await Commodity.findAll({
      where: {
        commodity_category: category,
      },
    });

    if (!commodities.length) return res.status(404).json({ message: 'No commodities found in this category' });

    res.json(commodities);
  } catch (error) {
    console.error('Error fetching commodities by category:', error);
    next(error);
  }
};

exports.getCommodityByOrigin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const { origin } = req.params;

    const commodities = await Commodity.findAll({
      where: {
        commodity_origin: origin,
      },
    });

    if (!commodities.length) return res.status(404).json({ message: 'No commodities found from this origin' });

    res.json(commodities);
  } catch (error) {
    console.error('Error fetching commodities by origin:', error);
    next(error);
  }
};

exports.getCommodityByName = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const { name } = req.params;

    const commodity = await Commodity.findOne({
      where: {
        commodity_name: name,
      },
    });

    if (!commodity) return res.status(404).json({ message: 'Commodity not found' });

    res.json(commodity);
  } catch (error) {
    console.error('Error fetching commodity by name:', error);
    next(error);
  }
};

exports.getCommodityByFarmerId = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const { farmerId } = req.params;

    const commodities = await Commodity.findAll({
      where: {
        farmer_id: farmerId,
      },
    });

    if (!commodities.length) return res.status(404).json({ message: 'No commodities found for this farmer' });

    res.json(commodities);
  } catch (error) {
    console.error('Error fetching commodities by farmer ID:', error);
    next(error);
  }
};
