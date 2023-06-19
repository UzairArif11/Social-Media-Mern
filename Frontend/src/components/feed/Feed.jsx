import React, { useEffect, useState, useContext } from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import axios from "axios"
import { AuthContext } from "../context/AuthContext";

const Feed = ({className, username}) => {
  const URLR = process.env.REACT_APP_URL;
  const [Posts,setPosts] =useState([]);
  const {user} = useContext(AuthContext);

   useEffect(()=>{
    const fetchPosts= async()=>{
      const res = username
      ?await axios.get(`${URLR}/posts/profile/`+ username)
      :await axios.get(`${URLR}/posts/timeline/`+ user._id);
      
    setPosts(res.data.sort((p1, p2) => {
 
      return new Date(p1.createAt) > new Date(p2.createAt) ? 1 : -1
    }));
    }
    fetchPosts();
    console.log(username === user.username )
   },[username,user._id])
  return (
    <div className={`${className}`}>

      <div className="feedWrapper">
      {(!username ||username === user.username) && <Share/>}
      
        {Posts.map(p => (

          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed