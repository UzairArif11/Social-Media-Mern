import React, { useEffect, useState , useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { MoreVert } from '@material-ui/icons';
import axios from "axios"
import {format  } from "timeago.js";
import { Link } from "react-router-dom";
import "./post.css"
const Post = ({post}) => {
    const URLR = process.env.REACT_APP_URL;
  const [like, setLike]= useState(post.likes.length);
  const [islike, setIsLike]= useState(false);
  const [user, setUser]= useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext);

  useEffect(()=>{
    const cancelToken = axios.CancelToken.source();
    const fetchUser= async()=>{
        try {
            const res =await axios.get(`${URLR}/users?userId=${post.userId}`, {cancelToken: cancelToken.token});
      
            setUser(res.data);
        } catch (error) {
            if (axios.isCancel(error)){
                console.log("cancelled")
              }else{
    
                console.log(error);
              }
        }
     
    };
    fetchUser();
    
    return ()=> {
        cancelToken.cancel();
      }
   },[post.userId])


   useEffect(() =>{
    setIsLike(post.likes.includes(currentUser._id));
   },[currentUser._id, post.likes])
 const likeHandler=()=>{
    try {
        axios.put(`${URLR}/posts/`+ post._id+ "/like", {userId:currentUser._id})
    } catch (error) {
        
    }
    setLike(islike? like-1 : like+1);
    setIsLike(!islike)
 };
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? PF + 'person/'+user.profilePicture : `${PF}person/noAvatar.png`} alt="" className="postProfileImg" />
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
                    <img src={post.img ? `${PF}post/${post.img}` : ""} alt="" className="postImg" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} onClick={likeHandler} alt="" className="LikeIcon" />
                        <img src={`${PF}heart.png`}  onClick={likeHandler} alt="" className="LikeIcon" />
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