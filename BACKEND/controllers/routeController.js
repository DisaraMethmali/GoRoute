// controllers/routeController.js
const Route = require('../models/Route');

exports.addRoute = async (req, res) => {
  const { routeNumber, startPoint, destination, departureTime, journeyTime, halts, features } = req.body;

  try {
    const newRoute = new Route({ routeNumber, startPoint, destination, departureTime, journeyTime, halts, features });
    await newRoute.save();
    res.status(201).json(newRoute);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


exports.searchRoutes = async (req, res) => {
  const { from, to } = req.body;

  try {
    const routes = await Route.find({
      $or: [
        { startPoint: from, destination: to },
        { startPoint: from, halts: to },
        { halts: from, destination: to },
        { halts: from, halts: to }
      ]
    });

    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};