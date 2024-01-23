import React, { useState } from 'react';
import LocationModal from '../googleModal'; // Import your modal component
import marker from '../../images/marker2.png'
function MapComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <iframe
      className='relative'
        title="Custom Location"
        width="600"
        height="450"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12614.26956833944!2d-122.45773873903372!3d37.776740721677626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580b1c78c2adb%3A0x2e9cccc14c333364!2s1312-1400%20Fulton%20St%2C%20San%20Francisco%2C%20CA%2094117%2C%20USA!5e0!3m2!1sen!2s!4v1696092370894!5m2!1sen!2s"
        allowFullScreen
      ></iframe>
     
      {isModalOpen && (
        <LocationModal className='absolute' style={{ top: '100px', left: '50px' }} onClose={handleCloseModal}  />
      )}
       <div  >
      <img onClick={handleMarkerClick} className='custom-marker absolute top-32 left-32' src={marker} style={{height:'200px', width:'250px'}}/> </div>
    </div>
  );
}

export default MapComponent;

