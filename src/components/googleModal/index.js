import React, { useState } from 'react';

function LocationModal({onClose}) {
  // Define your modal content here using locationData
  return (
    <div className="modal w-32 h-40 bg-white">
    
      <button onClick={onClose}>X</button>

    </div>
  );
}

export default LocationModal;
