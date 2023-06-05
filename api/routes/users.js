const express = require('express')
const router= express.Router()
const userController=require('../controllers/usersController')
//update user
router.route('/:id').put(userController.updateUser)
//delete user
router.route('/:id').delete(userController.deleteUser)
//get a user
router.route('/:id').get(userController.getUser)
//follow a user
router.route('/:id/follow').put(userController.followUser)
//unfollow a user
router.route('/:id/unfollow').put(userController.unfollowUser)
module.exports = router