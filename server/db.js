const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USER || 'postgres',
  host: process.env.PG_HOST || 'localhost',
  database: process.env.PG_DATABASE || 'smart_procurement',
  password: process.env.PG_PASSWORD || '7036148555', // Replace with your PostgreSQL password
  port: process.env.PG_PORT || 5432,
});

// Create users table automatically if it doesn't exist
const initDb = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(50) DEFAULT 'farmer'
    );
  `;
  try {
    await pool.query(queryText);
    console.log('PostgreSQL database connected and tables initialized.');
  } catch (err) {
    console.error('Error initializing PostgreSQL database:', err);
  }
};

initDb();

module.exports = pool;