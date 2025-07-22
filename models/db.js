// models/db.js
import pg from 'pg';
import dotenv from 'dotenv';

const {Client} = pg;
dotenv.config();
const client = new Client({
  connectionString: "postgresql://farna_postgresql_user:bFWhWJY5T5G2TbH6qdWrQKvmoBrkE956@dpg-d1mlufq4d50c73b06250-a.oregon-postgres.render.com/farna_postgresql",
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

export default client;