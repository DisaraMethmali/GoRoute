// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routeRoutes = require('./routes/routeRoutes');

dotenv.config();

const http = require('http');
const { Server } = require('socket.io');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/routes', routeRoutes);

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Adjust the origin as needed for CORS
    methods: ["GET", "POST"]
  }
});

const busLocation = { latitude: 6.9271, longitude: 79.8612 }; // Initial bus location

// Emit bus location every 5 seconds for example
setInterval(() => {
  io.emit('bus-location-example-bus-id', busLocation);
}, 5000);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
