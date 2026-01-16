// This file handles logic related to loads
import client from '../models/client_db.js';
import { loads } from '../queries/loads.js';

// This function verifies 
export const getLoadsByToken = async (token) => {
//ask database for load. Call db with token
const load_data = await client.query(loads.getLoads,[token]);
  if (load_data.rows.length === 0) {
   throw new Error('incorrect token');
  }
  console.log (load_data.rows[0]);
  return load_data.rows[0];
};
  // Run the SQL query to find a matching loads 
  // If no load found, throw an error
  // Return the found load

  //updateloadassignmentbyusertoken
export const UpdateLoadAssignmentToken = async (token, username) => {
  console.log("updating user token" + token);
  client.query(loads.UpdateLoadAssignmentToken, [token, username]);
};
