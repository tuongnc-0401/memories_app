import express from 'express'

const router = express.Router();
import { getPost, createPost, updatePost, deletePost } from '../controllers/post.controller.js';
router.get('/', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
export default router;