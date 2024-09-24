import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ParticleButtons.css';

function ParticleButtons() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>WELCOME TO ARJUN ASSOCIATES</h2>
      <div className="wrapper">
        <button className="button2" data-type="square" onClick={() => navigate('/bank-statement-import')}>
          BANK STATEMENT IMPORT
        </button>
        <button className="button2" data-type="mario" onClick={() => navigate('/sales-import')}>
          SALES IMPORT
        </button>
        <button className="button2" data-type="shadow" onClick={() => navigate('/purchase-import')}>
          PURCHASE IMPORT
        </button> {/* New button for Purchase Import */}
      </div>
      <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default ParticleButtons;
