import express from 'express'
import { signin, signup } from '../controllers/user.controller.js'
const router = express.Router();

router.post('/signin', signin);
router.post('/signin', signup);
export default router;