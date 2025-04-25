import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 5000,
  query_timeout: 10000
});

// Add connection verification
pool.connect()
  .then(() => {
    console.log('Successfully connected to Railway PostgreSQL');
  })
  .catch(err => {
    console.error('Failed to connect to database:', err);
  });

// Add error handling
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool;