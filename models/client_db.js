// This file creates the PostgreSQL database client

import pg from 'pg';         // PostgreSQL client library
import dotenv from 'dotenv'; // Load environment variables from .env

const { Client } = pg;
dotenv.config();

// Create a new DB client using DATABASE_URL from the environment
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Required by some cloud DBs (e.g., Render)
  }
});

// Connect to the database
client.connect();

// Export the client so it can be used in other files
export default client;
