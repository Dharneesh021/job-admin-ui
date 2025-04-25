// lib/db.js
import { Pool } from 'pg';

// Create a new Pool instance using the DATABASE_URL environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:2003@localhost:5432/jobs_db', // Default to local if env var is not set
});

export default pool;
