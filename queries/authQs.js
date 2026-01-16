// This file contains SQL statements used for authentication

export const authQs = {
  // SQL to fetch user by username and password
  // Farris to do
  getUser: `SELECT * FROM users WHERE username = $1 and password = $2`,

  // SQL to fetch user by full_name
  getUserByToken: `SELECT full_name, api_token, dashboard_code, menu_code FROM users WHERE username = $1`,

  // Update user toke
  updateUserToken: `UPDATE users SET api_token = $1 WHERE username = $2`,
};
