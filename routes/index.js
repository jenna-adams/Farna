// Import Express and the authentication routes
import express from "express";
import authRoutes from './authentication.js';
import loadRoutes from './loads.js'

// Create a router object to define route groups
const router = express.Router();

// Mount all auth-related routes under /auth
// e.g. GET /auth/:token or POST /auth/login
router.use('/auth', authRoutes);
router.use('/loads', loadRoutes);

// Export the router to be used in server.js
export default router;