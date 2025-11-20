//Import service functions that contain the actual logic
import {getUserByCreds} from '../services/authService.js';

// POST /auth/login handler
// Farris to do
export const handlePostAuth = async (req, res) => {
const eleoskey = req.headers['eleos-platform-key'];
try { if (eleoskey === process.env.ELEOS_PLATFORM_KEY)
  {
    // Call the login logic from the service, passing the request body
//getUserByCreds is a function defined by us and the (username,password) is the info in the db we are searching for
    try{
      const username = req.body.username;
      const password = req.body.password;
      const user_data = await getUserByCreds(username,password); // const user defines that variable as user for the rest of the code. we make the variable 'user' & find credentials with username and password by defining the function which is getUserByCreds
      res.status(200).json(user_data); //respond with a status 200 and user data
    } catch (error) 
    {res.status(400).send('Failed to authenticate user - ' + error);} // respond with a 400 status and send an error}
}} catch (error) {
  res.status(400).send ('Bahhhhd Eleos Platform key - ' + error)
};
};
// GET /auth/:token handler - user refresh
export const handleGetAuth = async (req, res) => {
  const eleoskey = req.headers['eleos-platform-key'];
  try { if (eleoskey === process.env.ELEOS_PLATFORM_KEY) 
    {const api_token = req.params.token; //saving token
  console.log('set token:', api_token);
  // const (constant variable) means things should not change for the duration of the code
  try {
    // Try to get the user associated with this token and if not then throw an error 
    const user_data = await getUserByToken(api_token);
    res.status(200).json(user_data);
  } catch (error) {
    // Send back a general error if the token is invalid
    res.status(400).send('Failed to authenticate user - ' + error);
  }}} catch (error)  {
  res.status(400).send ('Bahhhhd Eleos Platform key - ' + error)
};
  // Extract the token from the path parameter - get the token within the URL
};
