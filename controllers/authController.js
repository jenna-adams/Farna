import { loginAuth, getUserByToken } from '../services/authService.js';

export const handlePostAuth = async (req, res) => {
  try {
    const result = await loginAuth(req.body);  // call service
    res.status(200).json(result);             // send back result
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const handleGetAuth = async (req, res) => {
  const api_token = req.params.token;
  console.log('set token:', api_token);

  try {
    const user = await getUserByToken(api_token);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send('Failed to authenticate user - '+ error);
  }
};
