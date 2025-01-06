import express from 'express'
import { getsingleUser, getUser, postUser } from '../controllers/user.js';

const router = express.Router();

router.route('/post/user').post(postUser)
router.route('/get/users').get(getUser)
router.route('/get/user/:id').get(getsingleUser)

export default router;