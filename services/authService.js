// This file handles logic related to authentication
import client from "../models/client_db.js";
import { authQs } from "../queries/authQs.js";

// This function verifies username + password for login
// Farris to do
export const getUserByCreds = async (username, password) => {
  //ask database for user. Call db with username and password
  const user_data = await client.query(authQs.getUser, [username, password]);
  if (user_data.rows.length === 0) {
    throw new Error("Username and Password Invalid");
  }
  console.log(user_data.rows[0]);
  return user_data.rows[0];
};
//This function finds a user based on an API token
export const getUserByToken = async (api_token) => {
  console.log("Looking for user with token:", api_token);

  //Run the SQL query to find a matching token
  const result = await client.query(authQs.getUserByToken, [api_token]);

  //If no matching user, throw an error
  if (result.rows.length === 0) {
    throw new Error("Token invalid " + api_token);
    //Return the found user
    //
  }
  console.log(result.rows[0]);
  return result.rows[0];
};

//updateusertoken
export const updateUserToken = async (api_token, username) => {
  console.log("updating user token" + api_token);
  client.query(authQs.updateUserToken, [api_token, username]);
};
