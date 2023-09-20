import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const navigate = useNavigate();

  const navigateToBrycePage = () => {
    navigate('/bryce');
  };

  const navigateToZionPage = () => {
    navigate('/zion');
  };

  return (
    <div className="image-container">
      <div className="pin-button-bryce" onClick={navigateToBrycePage}>
        <div className="pin-caption-bryce"><strong>Bryce</strong></div>
        <FontAwesomeIcon icon={faMapPin} size="4x" color='#226EA5'/>
      </div>
      <div className="pin-button-zion" onClick={navigateToZionPage}>
        <div className="pin-caption-zion"><strong>Zion</strong></div>
        <FontAwesomeIcon icon={faMapPin} size="4x" color='#226EA5'/>
      </div>
    </div>
  );
}

export default HomePage;
