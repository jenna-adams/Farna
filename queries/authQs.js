// This file contains SQL statements used for authentication

export const authQs = {
	// SQL to fetch user by username and password
	// Farris to do
	getUser: ``,
  
	// SQL to fetch user by token
	getUserByToken: `SELECT * FROM users WHERE api_token = $1`,
  };