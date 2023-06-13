import React, { useEffect, useState } from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import axios from "axios"


const Feed = ({className, username}) => {
   const [Posts,setPosts] =useState([]);
  
   useEffect(()=>{
    const fetchPosts= async()=>{
      const res = username
      ?await axios.get("/api/posts/profile/"+ username)
      :await axios.get("/api/posts/timeline/64576245297b96423980ea09");
      
    setPosts(res.data);
    }
    fetchPosts();
    
   },[])
  return (
    <div className={`${className}`}>

      <div className="feedWrapper">
        <Share />
        {Posts.map(p => (

          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed