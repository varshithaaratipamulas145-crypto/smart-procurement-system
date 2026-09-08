import React, { useState } from 'react';
import './login.css';

export default function Login({ onLoginSuccess }) {
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [language, setLanguage] = useState('English');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim().length !== 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    setPhoneError('');
    onLoginSuccess(phoneNumber);
  };

  return (
    <div className="fullscreen-login-wrapper">
      <div className="login-card-container">
        
        {/* HERO BRANDING AREA */}
        <div className="hero-banner">
          <div className="hero-overlay"></div>
          <div className="brand-content">
            <div className="leaf-logo">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5,16 3,21C8,21 14,18 17,14C19,11.3 19,8.5 17,8Z" />
                <path d="M12,3C5,5 3,11 2,15C6,15 10,13 12,10C13.5,7.8 13.5,5 12,3Z" />
              </svg>
            </div>
            <h1 className="main-title">Smart Procurement</h1>
            <p className="sub-title">Better Information for a Brighter Tomorrow</p>
          </div>
        </div>

        {/* CENTERED BUTTONS & FORM AREA */}
        <div className="centered-action-area">
          {!showPhoneForm ? (
            <div className="prominent-buttons-group">
              <button 
                type="button"
                className="btn-large btn-primary"
                onClick={() => setShowPhoneForm(true)}
              >
                Login
              </button>
              <button 
                type="button"
                className="btn-large btn-secondary"
                onClick={() => setShowPhoneForm(true)}
              >
                Register
              </button>
            </div>
          ) : (
            <form onSubmit={handleLoginSubmit} className="phone-entry-form">
              <div className="phone-input-box">
                <span className="country-code">+91</span>
                <input
                  type="tel"
                  className="mobile-input"
                  placeholder="Enter 10-digit Mobile Number"
                  maxLength="10"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  autoFocus
                />
              </div>
              {phoneError && <p className="field-error">{phoneError}</p>}

              <button type="submit" className="btn-large btn-primary">
                Continue →
              </button>
              
              <button 
                type="button" 
                className="btn-back-link" 
                onClick={() => setShowPhoneForm(false)}
              >
                ← Back
              </button>
            </form>
          )}

          {/* LANGUAGE SELECTOR */}
          <div className="language-section">
            <span className="lang-title">🌐 Choose Language</span>
            <div className="lang-pill-group">
              <button 
                type="button"
                className={`lang-pill ${language === 'Telugu' ? 'active' : ''}`}
                onClick={() => setLanguage('Telugu')}
              >
                తెలుగు
              </button>
              <button 
                type="button"
                className={`lang-pill ${language === 'Hindi' ? 'active' : ''}`}
                onClick={() => setLanguage('Hindi')}
              >
                हिन्दी
              </button>
              <button 
                type="button"
                className={`lang-pill ${language === 'English' ? 'active' : ''}`}
                onClick={() => setLanguage('English')}
              >
                English
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}