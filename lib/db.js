// lib/db.js
import { Pool } from 'pg';

// Create a new Pool instance using the DATABASE_URL environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL 
});

export default pool;
