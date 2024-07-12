// routes/routeRoutes.js
const express = require('express');
const router = express.Router();
const { addRoute, getRoutes } = require('../controllers/routeController');

router.post('/add', addRoute);
router.get('/', getRoutes);

module.exports = router;
