const Post = require('../model/post.model');
const bcrypt = require('bcrypt');
const User = require('../model/user.model');
exports.createPost=async(req,res,next)=>{

try {
   const newPost= new Post (req.body);
   const savePost=await newPost.save();
    res.status(200).json(savePost);
} catch (error) {
    res.status(500).json(error);
}

}
exports.updatePost = async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json('Post has been updated');
      } else {
        res.status(403).json('You can update only your post');
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
exports.deletePost = async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json('Post has been deleted');
      } else {
        res.status(403).json('You can delete only your post');
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
exports.likePost = async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post.likes.includes(req.body.userId) ) {
        await post.updateOne({ $push :{likes:req.body.userId} });
        res.status(200).json('Post has been liked');
      } else {
        await post.updateOne({ $pull :{likes:req.body.userId} });
        res.status(200).json('Post has been disliked');
      
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
exports.getSinglePost = async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id);
     
        res.status(200).json(post);
      
    } catch (error) {
      res.status(500).json(error);
    }
  };
  exports.getAllPosts = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.params.username});
      const post = await Post.find({userId: user._id});
     
        res.status(200).json(post);
      
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  exports.timelinePost = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPost = await Post.find({userId:currentUser._id});
        const friendsPost = await Promise.all(
            currentUser.following.map((friendsId)=>{
             return Post.find({userId:friendsId});
            })
        );

     
        res.status(200).json(userPost.concat(...friendsPost));
      
    } catch (error) {
      res.status(500).json(error);
    }
  };
  