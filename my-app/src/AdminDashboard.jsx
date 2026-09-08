import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalCenters: 24,
    farmersToday: 1240,
    completed: 870,
    waiting: 290,
    delayed: 80
  });

  const [centers, setCenters] = useState([
    { id: 1, name: 'Mangalagiri', farmers: 52, load: '68%', status: 'Normal' },
    { id: 2, name: 'Guntur', farmers: 48, load: '92%', status: 'Heavy' },
    { id: 3, name: 'Vijayawada', farmers: 42, load: '55%', status: 'Normal' },
    { id: 4, name: 'Narasaraopet', farmers: 38, load: '47%', status: 'Normal' },
    { id: 5, name: 'Tadepalli', farmers: 31, load: '78%', status: 'Normal' }
  ]);

  return (
    <div className="admin-container">
      {/* Header Bar */}
      <div className="admin-header">
        <div>
          <h2>State Procurement Overview</h2>
          <p className="admin-subtitle">Real-time monitoring across all regional centers</p>
        </div>
        <select className="region-select" defaultValue="Andhra Pradesh">
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Telangana">Telangana</option>
        </select>
      </div>

      {/* Top Metric Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <span className="metric-label">Total Centers</span>
          <p className="metric-value">{stats.totalCenters}</p>
        </div>
        <div className="metric-card">
          <span className="metric-label">Farmers Today</span>
          <p className="metric-value">{stats.farmersToday.toLocaleString()}</p>
        </div>
        <div className="metric-card success">
          <span className="metric-label">Completed</span>
          <p className="metric-value">{stats.completed}</p>
        </div>
        <div className="metric-card warning">
          <span className="metric-label">Waiting</span>
          <p className="metric-value">{stats.waiting}</p>
        </div>
        <div className="metric-card danger">
          <span className="metric-label">Delayed</span>
          <p className="metric-value">{stats.delayed}</p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="admin-main-grid">
        {/* Table Column */}
        <div className="panel center-table-panel">
          <h3>Center-wise Status</h3>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Center</th>
                  <th>Farmers</th>
                  <th>Queue Load</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {centers.map((center) => (
                  <tr key={center.id}>
                    <td><strong>{center.name}</strong></td>
                    <td>{center.farmers}</td>
                    <td>{center.load}</td>
                    <td>
                      <span className={`status-pill ${center.status.toLowerCase()}`}>
                        {center.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insights & Alerts Column */}
        <div className="panel insights-panel">
          <h3>AI Insights & Recommendations</h3>
          <div className="alert-box warning-box">
            <strong>Guntur Center is overloaded</strong>
            <p>Queue load is 92%. Redirect next 20 farmers to Vijayawada Center (Estimated wait time 45 min less).</p>
          </div>

          <h3 className="section-title-spacing">Recent System Alerts</h3>
          <ul className="alerts-list">
            <li>
              <span>Delay at Guntur Center</span>
              <small>11:20 AM</small>
            </li>
            <li>
              <span>Machine maintenance required at Tadepalli</span>
              <small>10:15 AM</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}