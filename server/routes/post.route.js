import express from 'express'

const router = express.Router();
import { getPosts, createPost, updatePost, deletePost, likePost, getPostsBySearch } from '../controllers/post.controller.js';
import auth from '../middleware/auth.js';

router.get('/search', getPostsBySearch)
router.get('/', getPosts)
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
router.patch('/:id/like', auth, likePost)

export default router;