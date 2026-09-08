import React, { useState, useEffect } from 'react';
import './App.css';
import FarmerApp from './FarmerApp';
import StaffDashboard from './StaffDashboard';
import AdminDashboard from './AdminDashboard';
import loginIcon from './assets/hero.png';

function App() {
  const [currentView, setCurrentView] = useState('farmer');
  const [showLogin, setShowLogin] = useState(false);
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch((err) => {
        console.error('Backend connection error:', err);
        setStatus('Backend disconnected');
      });
  }, []);

  return (
    <div className="app-container">
      {/* Backend Connection Status Banner */}
      <div style={{ padding: '8px', backgroundColor: '#1e293b', color: '#94a3b8', textAlign: 'center', fontSize: '14px' }}>
        System Status: <span style={{ color: '#4ade80' }}>{status}</span>
      </div>

      {/* Navigation Header */}
      <nav className="top-nav">
        <div className="brand">
          <span className="brand-icon">🌱</span>
          <h2>Smart Procurement System</h2>
        </div>
        <div className="nav-links">
          <button 
            className={currentView === 'farmer' ? 'active' : ''} 
            onClick={() => { setCurrentView('farmer'); setShowLogin(false); }}
          >
            Farmer View
          </button>
          <button 
            className={currentView === 'staff' ? 'active' : ''} 
            onClick={() => { setCurrentView('staff'); setShowLogin(false); }}
          >
            Staff Dashboard
          </button>
          <button 
            className={currentView === 'admin' ? 'active' : ''} 
            onClick={() => { setCurrentView('admin'); setShowLogin(false); }}
          >
            Admin Dashboard
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {currentView === 'farmer' && <FarmerApp />}
        {currentView === 'staff' && <StaffDashboard />}
        {currentView === 'admin' && <AdminDashboard />}
      </main>
    </div>
  );
}

export default App;