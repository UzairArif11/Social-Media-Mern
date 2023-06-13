import React, { useEffect, useState } from 'react'
import { MoreVert } from '@material-ui/icons';
import axios from "axios"
import {format  } from "timeago.js";
import { Link } from "react-router-dom";
import "./post.css"
const Post = ({post}) => {
  const [like, setLike]= useState(post.likes.length);
  const [islike, setIsLike]= useState(false);
  const [user, setUser]= useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const fetchUser= async()=>{
      const res =await axios.get(`/api/users?userId=${post.userId}`);
      
    setUser(res.data);
    }
    fetchUser();
    
   },[post.userId])
 const likeHandler=()=>{
    setLike(islike? like-1 : like+1);
    setIsLike(!islike)
 };
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img src={user.profilePicture ? user.profilePicture : `${PF}/person/noAvatar.png`} alt="" className="postProfileImg" />
</Link>
                          <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img src={post.img ? `${PF}/post/${post.img}` : ""} alt="" className="postImg" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}/like.png`} onClick={likeHandler} alt="" className="LikeIcon" />
                        <img src={`${PF}/heart.png`}  onClick={likeHandler} alt="" className="LikeIcon" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post