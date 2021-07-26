import express from 'express'
import auth from '../middleware/auth.js';
const router = express.Router();
import { getPostsBySearch, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/post.controller.js';
router.get('/search', getPostsBySearch);
router.get('/', getPost);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
export default router;