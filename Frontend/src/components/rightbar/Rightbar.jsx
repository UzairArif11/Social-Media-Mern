import React, { useEffect, useReducer, useState } from 'react'
import './rightbar.css'
import { Users } from "../../dummyData";
import Online from '../online/Online';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Add, Remove } from '@material-ui/icons';

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Rightbar = ({className ,user}  ) => {
 

  const HomeRightbar =()=>{
  
    return(
      <>
              <div className={`birthdayContainer `}>
          <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Pola Foster </b>and <b>3 other friends</b> have a birthday today</span>
        </div>
      
      <img src={`${PF}ad.png`} alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
     
      {Users.map(u=>(
          <Online key={u.id} user={u}/>
        ))}
      </ul>
      </>
    )
  }
  const ProfileRightbar= ()=>{
    const [friends, setFriends] = useState([]);
const URLR = process.env.REACT_APP_URL;
const {user:currentUser, dispatch} = useContext(AuthContext);
const [followed, setFollowed] = useState(currentUser.following.includes(user?.id));



const handleClick = async()=>{
  try {
    console.log(followed)
    if (followed) {
      await axios.put(`${URLR}/users/`+user._id+"/unfollow", {userId: currentUser._id});
      dispatch({type:"UNFOLLOW", payload:user._id})
    }else{
      await axios.put(`${URLR}/users/`+user._id+"/follow", {userId: currentUser._id});
      dispatch({type:"FOLLOW", payload:user._id})
    }
  } catch (error) {
    console.log(error)
  }
  setFollowed(prev=> !prev);
  console.log(followed)
}

    useEffect(()=>{
      setFollowed(currentUser.following.includes(user?.id))
    },[currentUser, user])
    useEffect(()=>{
      const cancelToken = axios.CancelToken.source();

      const getFriends = async () =>{
        // console.log(user)
        try {
          const friendList = await axios.get(`${URLR}/users/friends/${user._id}`, {cancelToken: cancelToken.token});
          setFriends(friendList.data);
        } catch (error) {
          if (axios.isCancel(error)){
            console.log("cancelled")
          }else{

            console.log(error);
          }
        }
      };
      getFriends();
      return ()=> {
        cancelToken.cancel();
      }
    },[user._id]);
    return(<>

      {user.username !== currentUser.username && (
        <button className='rightbarFollowButton' onClick={handleClick}>
         
          {followed? "unfollow":"Follow"}
          {followed? <Remove/> : <Add/>}
        </button>
      )}  
     <div className={` ${className}`}>
     <div className=" container-fluid">
    <div className="row">
    <div className="rightbarInfo col-lg-12 col-6">
      <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoKeyVAlue">{user.city}</span>
        </div>
     
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoKeyVAlue">{user.from}</span>
        </div>
      
      
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoKeyVAlue">{user.relationship ===1
          ?"Single"
          : user.relationship ===2
          ? "Married"
          : "-"
          }</span>
        
      </div>
      </div>
<div className="col-lg-12 col-6">
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
      {friends.map((friend)=>(
    
        <Link key={friend._id} to={`/profile/${friend.username} `} style={{textDecoration: "none"}}>
  <div  className="rightbarFollowing">
    <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"}alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">{friend.username }</span>
  </div>
  </Link>
  ))}
  </div>
</div>
    </div>
    </div>
   </div>
      </>
    )
  }
  return (
    <div className='rightbar  col-lg-3 '>

      <div className="rightbarWrapper">
   {user?    <ProfileRightbar/>: <HomeRightbar />}
  
    </div></div>
  )
};

export default Rightbar