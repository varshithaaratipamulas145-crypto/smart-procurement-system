import React, { useState } from 'react';
import './StaffDashboard.css';

export default function StaffDashboard({ procurementId = 1 }) {
  const [formData, setFormData] = useState({
    weight_quintals: 35.6,
    moisture_percentage: 12.5,
    grade: 'A (Good)',
    status: 'Procurement Accepted'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/procurement/${procurementId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert('Data saved! Live update sent to farmer view.');
      }
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h2>Procurement Center Dashboard</h2>
        <p>Update Farmer Records and Emit Real-Time Socket Events</p>
      </div>

      <form onSubmit={handleSave} className="responsive-form">
        <div className="form-group">
          <label>Weight (Quintals)</label>
          <input 
            type="number" 
            step="0.1" 
            name="weight_quintals" 
            value={formData.weight_quintals} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Moisture Percentage (%)</label>
          <input 
            type="number" 
            step="0.1" 
            name="moisture_percentage" 
            value={formData.moisture_percentage} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Quality Grade</label>
          <input 
            type="text" 
            name="grade" 
            value={formData.grade} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Current Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="In Queue">In Queue</option>
            <option value="Weighing">Weighing</option>
            <option value="Moisture Test">Moisture Test</option>
            <option value="Procurement Accepted">Procurement Accepted</option>
          </select>
        </div>

        <button type="submit" className="action-btn">
          Save & Broadcast Live Update
        </button>
      </form>
    </div>
  );
}