import React from 'react'
import './rightbar.css'
import { Users } from "../../dummyData";
import Online from '../online/Online';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const Rightbar = ({className ,user}  ) => {

  const HomeRightbar =()=>{
  
    return(
      <>
              <div className={`birthdayContainer ${className}`}>
          <img src={`${PF}/gift.png`} alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Pola Foster </b>and <b>3 other friends</b> have a birthday today</span>
        </div>
      
      <img src={`${PF}/ad.png`} alt="" className="rightbarAd" />
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
    return(<>
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
  <div className="rightbarFollowing">
    <img src={`${PF}/person/1.jpeg`}alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src={`${PF}/person/2.jpeg`}alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src={`${PF}/person/3.jpeg`}alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src={`${PF}/person/4.jpeg`} alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src={`${PF}/person/5.jpeg`}alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div>
  <div className="rightbarFollowing">
    <img src={`${PF}/person/6.jpeg`} alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">John Carter</span>
  </div></div>
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