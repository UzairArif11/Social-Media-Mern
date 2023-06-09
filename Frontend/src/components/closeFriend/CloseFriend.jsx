import React from 'react'
import "./closeFriend.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const CloseFriend = ({user}) => {
    console.log(user)
  return (
    <li className="sidebarFriend">
    <img src={PF + user.profilePicture} alt="" className="sidebarFriendImg" />
    <span className="sidebarFriendName">{user.username} </span>
</li>
  )
}

export default CloseFriend