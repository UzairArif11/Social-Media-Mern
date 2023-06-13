const express = require('express')
const router= express.Router()
const postController=require('../controllers/postsController')
//create post
router.route('/').post(postController.createPost)
//update post
router.route('/:id').put(postController.updatePost)
//delete post
router.route('/:id').delete(postController.deletePost)
//like post
router.route('/:id/like').put(postController.likePost)
//get a post
router.route('/:id').get(postController.getSinglePost)
//get all  posts of user
router.route('/profile/:username').get(postController.getAllPosts)
//get all  posts of user and his friends
router.route('/timeline/:userId').get(postController.timelinePost)

module.exports = router