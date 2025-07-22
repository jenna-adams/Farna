import client from '../models/db.js';
import { authQs } from '../queries/authQs.js';

export const loginAuth = async ({ username, password }) => {
  const result = await client.query(authQs.getUser, [username, password]);
  if (result.rows.length === 0) {
    throw new Error('User not found');
  }
  return result.rows[0];
};

export const getUserByToken = async (api_token) => {
	console.log('Looking for user with token:', api_token);
  const result = await client.query(authQs.getUserByToken, [api_token]);
  if (result.rows.length === 0) {
    throw new Error('Token invalid');
  }
  return result.rows[0];
};
