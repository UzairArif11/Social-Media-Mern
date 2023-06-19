const User = require('../model/user.model');
const bcrypt = require('bcrypt');
exports.register=async(req,res,next)=>{

try {
    const userAlreadyExist = await User.findOne({ email: req.body.email });
    if (userAlreadyExist) {
      return res.status(404).json("User Already exist");
    }
    // generate new hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(req.body.password, salt);
    // create new user
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });
    // save user and return respond
    const user = await newUser.save();
    res.status(200).json(user);
} catch (error) {
    res.status(500).json(error);
}

}
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("User not found");
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json("Wrong password");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.updateUser = async (req, res, next) => {
    if (req.body._id === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (error) {
          return res.status(500).json(error);
        }
      }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json('Account has been updated');
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      return res.status(403).json('You can update only your account');
    }
  };
  
exports.deleteUser = async (req, res, next) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      
      try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json('Account has been deleted');
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      return res.status(403).json('You can delete only your account');
    }
  };
exports.getUser = async (req, res, next) => {
  const userId = req.query.userId;
  const username = req.query.username;
        try {
      const user = userId
      ? await User.findById(userId)
      : await User.findOne({username});
      const {password, updatedAt, ...other} = user._doc;
      res.status(200).json(other);
        } catch (error) {
          return res.status(500).json(error);
        }
    }
    exports.getFriends = async(req, res , next)=>{
      try {
        const user = await User.findById(req.params.userId);
        const friends = await Promise.all(
          user.following.map(friendId=>{
            return User.findById(friendId)
          })
        );
        let friendList = [];
        friends.map(friendData =>{
          const {_id, username, profilePicture} =friendData;
          friendList.push({_id, username, profilePicture});
        })
        res.status(200).json(friendList)
      } catch (error) {
        res.status(500).json(error)
      }
    }
exports.followUser = async (req, res, next) => {
  if (req.body.userId !== req.params.id){
        try {
            const user= await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{following:req.params.id}});
                res.status(200).json('user has been followed');
            } else {
                  res.status(403).json('you already follow this user');
            }
            
        } catch (error) {
            res.status(500).json(error);
        }
      
    }else{
        res.status(403).json('you cannot follow yourself');
    }
    }
exports.unfollowUser = async (req, res, next) => {
  if (req.body.userId !== req.params.id){
        try {
            const user= await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$pull:{following:req.params.id}});
                res.status(200).json('user has been unfollowed');
            } else {
                  res.status(403).json('you donot follow this user');
            }
            
        } catch (error) {
            res.status(500).json(error);
        }
      
    }else{
        res.status(403).json('you cannot unfollow yourself');
    }
    }
