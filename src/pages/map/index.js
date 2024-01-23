// App.js
import React from 'react';
import GoogleMapComponent from '../../components/googlemap';

function Map() {
  const locations = [
    {
      name: 'Location 1',
      lat: 40.7128,
      lng: -74.0060,
      description: 'Description of Location 1',
    },
    {
      name: 'Location 2',
      lat: 34.0522,
      lng: -118.2437,
      description: 'Description of Location 2',
    },
    // Add more locations as needed
  ];

  return (
    <div className="App">
      <h1>Custom Google Map with React</h1>
      <GoogleMapComponent locations={locations} />
    </div>
  );
}

export default Map ;
