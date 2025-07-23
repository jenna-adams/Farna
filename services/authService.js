// This file handles logic related to authentication
import client from '../models/db.js';
import { authQs } from '../queries/authQs.js';

// This function verifies username + password for login
// Farris to do
export const loginAuth = async ({ username, password }) => {

  // Run the SQL query to find a matching user
  
  // If no user found, throw an error

  // Return the found user

};

// This function finds a user based on an API token
export const getUserByToken = async (api_token) => {
  console.log('Looking for user with token:', api_token);

  // Run the SQL query to find a matching token
  const result = await client.query(authQs.getUserByToken, [api_token]);

  // If no matching user, throw an error
  if (result.rows.length === 0) {
    throw new Error('Token invalid');
  }

  // Return the found user
  return result.rows[0];
};
