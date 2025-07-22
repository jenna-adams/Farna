export const authQs = {
	getUser: `SELECT * FROM users WHERE username = $1 AND password = $2`,
	getUserByToken: `SELECT * FROM users WHERE api_token = $1`,
  };