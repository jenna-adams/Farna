// Import service functions that contain the actual logic
import { loginAuth, getUserByToken } from '../services/authService.js';

// POST /auth/login handler
// Farris to do
export const handlePostAuth = async (req, res) => {

    // Call the login logic from the service, passing the request body

    // Send back the user if successful

    // Send back error message if login fails

  
};

// GET /auth/:token handler
export const handleGetAuth = async (req, res) => {
  // Extract the token from the path parameter
  const api_token = req.params.token;
  console.log('set token:', api_token);

  try {
    // Try to get the user associated with this token
    const user = await getUserByToken(api_token);
    res.status(200).json(user);
  } catch (error) {
    // Send back a general error if the token is invalid
    res.status(400).send('Failed to authenticate user - ' + error);
  }
};
