 import React from 'react'
import './home.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Home = () => {
  return (
    <> <Topbar/>
    <div className="container-fluid">
       <div className="row">
       <Sidebar className="col-lg-3"/>
        <Feed className="col-lg-6"/>
        <Rightbar className="col-lg-3"/>
       </div>
    </div>
    </>
  )
}

export default Home