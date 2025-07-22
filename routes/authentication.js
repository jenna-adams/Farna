import express from 'express';
import {handleGetAuth, handlePostAuth} from '../controllers/authController.js';

// set router
const router = express.Router();


router.get('/:token', handleGetAuth);

router.post('/login', handlePostAuth);


export default router;