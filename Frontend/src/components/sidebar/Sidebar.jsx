import React from 'react'
import './sidebar.css'
import { Bookmark, Group, HelpOutline, RssFeed, WorkOutline, Chat, School, PlayCircleFilled, Event } from '@material-ui/icons';
import CloseFriend from '../closeFriend/CloseFriend';
import { Users } from "../../dummyData";

const Sidebar = ({className}) => {
    console.log(className)
    return (
        <div className={`sidebar ${className}`} >
            <div className="sidebarWrapper">
                <div className="sidebarList">
                    <ul>
                        <li className="sidebarListItem">
                            < RssFeed className='sidebarIcon' />
                            <span className="sidebarListItemText">Feed</span>
                        </li>
                        <li className="sidebarListItem">
                            < Chat className='sidebarIcon' />
                            <span className="sidebarListItemText">Chats</span>
                        </li>
                        <li className="sidebarListItem">
                            < PlayCircleFilled className='sidebarIcon' />
                            <span className="sidebarListItemText">Videos</span>
                        </li>
                        <li className="sidebarListItem">
                            < Group className='sidebarIcon' />
                            <span className="sidebarListItemText">Groups</span>
                        </li>
                        <li className="sidebarListItem">
                            < Bookmark className='sidebarIcon' />
                            <span className="sidebarListItemText">Bookmarks</span>
                        </li>
                        <li className="sidebarListItem">
                            < HelpOutline className='sidebarIcon' />
                            <span className="sidebarListItemText">Questions</span>
                        </li>
                        <li className="sidebarListItem">
                            < WorkOutline className='sidebarIcon' />
                            <span className="sidebarListItemText">Jobs</span>
                        </li>
                        <li className="sidebarListItem">
                            < Event className='sidebarIcon' />
                            <span className="sidebarListItemText">Events</span>
                        </li>
                        <li className="sidebarListItem">
                            < School className='sidebarIcon' />
                            <span className="sidebarListItemText">Courses</span>
                        </li>
                    </ul>
                    <button className="sidebarButton">Show More</button>
                    <hr className="sidebarHr" />
                    <ul className="sidebarFriendList">
                     {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                     ))}
                       
                    </ul>
                </div>
            </div> </div>
    )
}

export default Sidebar