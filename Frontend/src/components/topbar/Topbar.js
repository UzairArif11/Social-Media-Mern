import React, { useContext } from 'react'
import {Search ,Person, Chat,Notifications} from '@material-ui/icons';
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./topbar.css"
const Topbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext);

  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
        <Link to="/"  style={{textDecoration:'none'}}>
            <span className="logo">Social.com</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input placeholder='Search for friend, post or video' className='searchInput'/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarlinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcon">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">3</span>
                </div>
            </div>
            <Link to={`/profile/${user.username}`} >
            <img src={user.profilePicture
            ? PF + user.profilePicture
            : PF + "/person/noAvatar.png"
            } alt="" className="topbarImag" />
            </Link>
        </div>
    </div>
  )
}

export default Topbar