import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css'; // Add your styles for the button here

function BackButton() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/buttons');
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      Back
    </button>
  );
}

export default BackButton;
