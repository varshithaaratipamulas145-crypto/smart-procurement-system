import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Login from './login.jsx';
import './FarmerApp.css';

const socket = io('http://localhost:5000');

export default function FarmerApp({ procurementId = 1 }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [currentScreen, setCurrentScreen] = useState('home');

  const [data, setData] = useState({
    farmer_name: 'Ravi',
    center_name: 'Mangalagiri Center',
    district: 'Guntur District',
    date: '10 Sep 2026',
    time_window: '8:00 AM - 5:00 PM',
    token_number: 'P104',
    queue_position: '18 / 42',
    wait_time: '1h 45m',
    current_processing: 'Farmer #16',
    weight_quintals: 25.0,
    moisture_percentage: 12.5,
    grade: 'A (Good)',
    status: 'Payment Processing',
    payment_amount: '₹ 18,240',
    payment_date: '10 Sep 2026',
    transaction_id: 'TXN248731'
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/procurement/${procurementId}`)
      .then((res) => res.json())
      .then((apiData) => setData((prev) => ({ ...prev, ...apiData })))
      .catch((err) => console.error(err));

    socket.on(`procurement-update-${procurementId}`, (updatedData) => {
      setData((prev) => ({ ...prev, ...updatedData }));
    });

    return () => socket.off(`procurement-update-${procurementId}`);
  }, [procurementId]);

  const handleLoginSuccess = (phone) => {
    setUserPhone(phone);
    setIsLoggedIn(true);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserPhone('');
  };

  // 1. Render Login Screen if unauthenticated
  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // 2. Render Main App once authenticated
  return (
    <div className="phone-wrapper">
      <div className="phone-screen">
        <div className="phone-header">
          <span className="time-display">9:41</span>
          <span className="app-title">Farmer Space</span>
          <button className="icon-btn" onClick={() => setCurrentScreen('notifications')}>🔔</button>
        </div>

        {/* Dashboard Content */}
        {currentScreen === 'home' && (
          <div className="screen-content">
            <div className="user-greeting">
              <div className="avatar">🧑‍🌾</div>
              <div className="user-details">
                <p className="small-label">Namaskaram,</p>
                <h3>{data.farmer_name}</h3>
                <span className="phone-badge">📱 +91 {userPhone}</span>
              </div>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>

            <div className="center-info-card">
              <div className="card-tag">Assigned Procurement Center</div>
              <h4>📍 {data.center_name}</h4>
              <p className="subtext">{data.district}</p>
              <div className="info-row">
                <span>📅 {data.date}</span>
                <span>⏰ {data.time_window}</span>
              </div>
            </div>

            <div className="section-heading">Today's Status</div>
            <div className="status-card">
              <div className="stat-box green-box">
                <span className="stat-icon">👥</span>
                <div>
                  <span className="stat-num">18</span>
                  <span className="stat-label">Farmers ahead</span>
                </div>
              </div>
              <div className="stat-box blue-box">
                <span className="stat-icon">⏱️</span>
                <div>
                  <span className="stat-num">{data.wait_time}</span>
                  <span className="stat-label">Est. waiting time</span>
                </div>
              </div>
            </div>

            <div className="menu-grid">
              <button className="menu-btn green-btn" onClick={() => setCurrentScreen('queue')}>
                <span>📊 View Queue</span>
                <span>→</span>
              </button>
              <button className="menu-btn blue-btn" onClick={() => setCurrentScreen('tracking')}>
                <span>🔍 Track Procurement</span>
                <span>→</span>
              </button>
              <button className="menu-btn purple-btn" onClick={() => setCurrentScreen('payment')}>
                <span>💳 Payment Status</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* Live Queue Screen */}
        {currentScreen === 'queue' && (
          <div className="screen-content">
            <button className="back-btn" onClick={() => setCurrentScreen('home')}>← Back to Home</button>
            <div className="card queue-header-card">
              <div className="center-badge">🌾 {data.center_name}</div>
              <p className="crop-type">Paddy Procurement</p>
              <div className="token-row">
                <div>
                  <span className="label">Token</span>
                  <div className="token-tag">#{data.token_number}</div>
                </div>
                <div className="right-align">
                  <span className="label">Your Position</span>
                  <div className="position-tag">{data.queue_position}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Procurement Tracking Screen */}
        {currentScreen === 'tracking' && (
          <div className="screen-content">
            <button className="back-btn" onClick={() => setCurrentScreen('home')}>← Back to Home</button>
            <h3>Procurement Status</h3>
            <div className="card">
              <p><strong>Weight:</strong> {data.weight_quintals} Quintals</p>
              <p><strong>Moisture:</strong> {data.moisture_percentage}%</p>
              <p><strong>Quality Grade:</strong> {data.grade}</p>
              <p><strong>Current Stage:</strong> {data.status}</p>
            </div>
          </div>
        )}

        {/* Payment Status Screen */}
        {currentScreen === 'payment' && (
          <div className="screen-content">
            <button className="back-btn" onClick={() => setCurrentScreen('home')}>← Back to Home</button>
            <h3>Payment Information</h3>
            <div className="card">
              <p><strong>Amount:</strong> {data.payment_amount}</p>
              <p><strong>Date:</strong> {data.payment_date}</p>
              <p><strong>Transaction ID:</strong> {data.transaction_id}</p>
            </div>
          </div>
        )}

        {/* Notifications Screen */}
        {currentScreen === 'notifications' && (
          <div className="screen-content">
            <button className="back-btn" onClick={() => setCurrentScreen('home')}>← Back to Home</button>
            <h3>Notifications</h3>
            <div className="notify-item info">
              <p>Your queue position is updated dynamically in real-time.</p>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="phone-navbar">
          <button className={currentScreen === 'home' ? 'active-nav' : ''} onClick={() => setCurrentScreen('home')}>🏠<br/>Home</button>
          <button className={currentScreen === 'queue' ? 'active-nav' : ''} onClick={() => setCurrentScreen('queue')}>📊<br/>Queue</button>
        </div>
      </div>
    </div>
  );
}