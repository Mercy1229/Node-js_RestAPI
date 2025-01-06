import express from 'express'
import { getsingleUser, getUser, postUser } from '../controllers/user.js';

const router = express.Router();

router.post('/post/user', postUser)
router.get('/get/users', getUser)
router.get('/get/user/:id', getsingleUser)

export default router;
