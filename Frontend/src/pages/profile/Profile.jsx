import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const Profile = () => {

  return (
    <><div className="container-fluid position-fixed z-3">
<div className="row">
    <Topbar/></div> </div>
    <div className=" container-fluid">
    <div className="row">
        <Sidebar className="col-lg-3"/>
        <div className="profileRight col-lg-9">
        <div className="profileRightTop">
        <div className="profileCover">
        <img src={`${PF}/post/3.jpeg`} alt="" className="profileCoverImg" />
        <img src={`${PF}/person/7.jpeg`} alt="" className="profileUserImg" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Uzair khan</h4>
            <span className="profileInfoDesc">Software engineer</span>
        </div>
        </div>
        <div className="profileRightBottom ">
        <div className=" container-fluid">
    <div className="row">
        <Feed className="col-lg-9" />
        <Rightbar className="col-lg-3" profile/>
        </div></div>
    </div></div></div></div>
    </>
  )
}

export default Profile