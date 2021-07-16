import express from 'express'

const router = express.Router();
import { getPost, createPost, updatePost } from '../controllers/post.controller.js';
router.get('/', getPost)
router.post('/', createPost);
router.patch('/:id', updatePost);

export default router;