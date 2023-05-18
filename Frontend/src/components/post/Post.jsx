import React from 'react'
import {MoreVert} from '@material-ui/icons';

import "./post.css"
const Post = () => {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="assests/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">uzair123</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    Hey! its my first post:)
                </span>
                <img src="assests/post/1.jpeg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assests/like.png" alt="" className="LikeIcon" />
                    <img src="assests/heart.png" alt="" className="LikeIcon" />
                    <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post