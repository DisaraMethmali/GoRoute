const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
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

server.listen(8060, () => {
  console.log('listening on *:8060'); // Ensure correct port number here
});
