import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ParticleButtons from './components/ParticleButtons';
import BankStatementImport from './components/BankStatementImport';
import SalesImport from './components/SalesImport';
import PurchaseImport from './components/PurchaseImport';  // Import the PurchaseImport component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/buttons" element={<ParticleButtons />} />
        <Route path="/bank-statement-import" element={<BankStatementImport />} />
        <Route path="/sales-import" element={<SalesImport />} />
        <Route path="/purchase-import" element={<PurchaseImport />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
