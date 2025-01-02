const express=require('express');
const { postUser, getUser, getsingleUser } = require('../controllers/usercontroller');
const router=express.Router();

router.route('/user').post(postUser)
router.route('/alluser').get(getUser)
router.route('/singleuser/:id').get(getsingleUser)
module.exports=router;