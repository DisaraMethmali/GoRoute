// routes/routeRoutes.js
const express = require('express');
const router = express.Router();
const { addRoute, getRoutes, searchRoutes } = require('../controllers/routeController');

router.post('/add', addRoute);
router.get('/', getRoutes);
router.post('/search', searchRoutes);

module.exports = router;
