// models/Route.js
const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
  routeNumber: { type: String, required: true },
  startPoint: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: String, required: true },
  journeyTime: { type: String, required: true },
  halts: { type: [String], required: true },
  features: {
    ac: { type: Boolean, default: false },
    wifi: { type: Boolean, default: false },
    phoneCharger: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model('Route', RouteSchema);
