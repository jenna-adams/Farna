// This file handles logic related to authentication
import client from '../models/client_db.js';
import { authQs } from '../queries/authQs.js';

// This function verifies username + password for login
// Farris to do
export const getUserByCreds = async (username, password) => {
//ask database for user. Call db with username and password
const user_data = await client.query(authQs.getUser,[username, password]);
  if (user_data.rows.length === 0) {
   throw new Error('Username and Password Invalid');
  }
  console.log (user_data.rows[0]);
  return user_data.rows[0];
}
  // Run the SQL query to find a matching user 
  // If no user found, throw an error
  // Return the found user

// export function getUserByCreds(username, password) { 
// console.log ('username does exist!')
// const user = {
//   "username": username,
//   "password": password,
// }
// return user
//   //try {
//     //query the user by username
//     //const [rows] = await pool.query(
//       //"SELECT * FROM users WHERE username = ?",
//       //[username]
//     //);

// };

//This function finds a user based on an API token
export const getUserByToken = async (api_token) => {
  console.log('Looking for user with token:', api_token);

  //Run the SQL query to find a matching token
  const result = await client.query(authQs.getUserByToken, [api_token]);

  //If no matching user, throw an error
  if (result.rows.length === 0) {
   throw new Error('Token invalid');
 }

 //Return the found user
 return result.rows[0];
};
