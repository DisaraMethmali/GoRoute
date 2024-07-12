import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { io } from 'socket.io-client';
import 'leaflet/dist/leaflet.css';

// Replace with your WebSocket server URL
const socket = io('http://localhost:5000');

const LiveBusTracker = ({ busId }) => {
  const [busLocation, setBusLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [path, setPath] = useState([]);

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      const updateUserLocation = (position) => {
        const location = [position.coords.latitude, position.coords.longitude];
        console.log('User Location:', location); // Debug log
        setUserLocation(location);
        setPath((prevPath) => [...prevPath, location]);
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          updateUserLocation(position);
          navigator.geolocation.watchPosition(updateUserLocation, (error) => {
            console.error('Error getting user location:', error);
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }

    // Listen for bus location updates
    socket.on(`bus-location-${busId}`, (location) => {
      const busLoc = [location.latitude, location.longitude];
      console.log('Bus Location:', busLoc); // Debug log
      setBusLocation(busLoc);
      setPath((prevPath) => [...prevPath, busLoc]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off(`bus-location-${busId}`);
    };
  }, [busId]);

  // Determine the center of the map
  const center = userLocation || [6.9271, 79.8612];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '600px', width: '80%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
      {busLocation && (
        <Marker position={busLocation}>
          <Popup>Bus Location</Popup>
        </Marker>
      )}
      {path.length > 1 && (
        <Polyline positions={path} color="blue" />
      )}
    </MapContainer>
  );
};

export default LiveBusTracker;
