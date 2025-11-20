// This file defines all routes under the /loads path to get to a certain

import express from 'express';
import { handleGetLoads } from '../controllers/loads.js';

// Create a router to define routes in the load path
const router = express.Router();

// GET /auth/:loads — validates by calling handleGetLoads
router.get('/', handleGetLoads);

// Export the router so it can be mounted in index.js
export default router;
