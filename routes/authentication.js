// This file defines all routes under the /auth path

import express from 'express';
import { handleGetAuth, handlePostAuth } from '../controllers/authController.js';

// Create a router to define routes like GET /auth/:token and POST /auth/login
const router = express.Router();

// GET /auth/:token — validates the token by calling handleGetAuth
router.get('/:token', handleGetAuth);

// POST /auth/login — attempts to log in using username/password
// Farris to do


// Export the router so it can be mounted in index.js
export default router;
