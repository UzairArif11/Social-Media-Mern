import React ,{useState, useEffect} from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from "axios"
import {useParams} from "react-router"
const Profile = () => {
  const URLR = process.env.REACT_APP_URL;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser]= useState({});
  const username = useParams().username;


  useEffect(()=>{
    const cancelToken = axios.CancelToken.source();
    const fetchUser= async()=>{
      try {
        const res =await axios.get(`${URLR}/users?username=${username}`, {cancelToken: cancelToken.token});
        setUser(res.data);
      } catch (error) {
        if (axios.isCancel(error)){
          console.log("cancelled")
        }else{

          console.log(error);
        }
      }
   
      
 
    }
    fetchUser();
    return ()=> {
      cancelToken.cancel();
    }
   },[username])
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
        <img src={user.coverPicture ? PF +  '/person/'+user.coverPicture : PF+'/person/noCover.png'} alt="" className="profileCoverImg" />
          <img src={user.profilePicture ? PF + '/person/'+user.profilePicture : `${PF}/person/noAvatar.png`} alt="" className="profileUserImg" />

        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDesc">{user.desc}</span>
        </div>
        </div>
        <div className="profileRightBottom ">
        <div className=" container-fluid">
    <div className="row">
        <Feed className="col-lg-9" username={username}/>
        {Object.keys(user).length !== 0 && <Rightbar className="col-lg-3" user={user} />}
        </div></div>
    </div></div></div></div>
    </>
  )
}

export default Profile