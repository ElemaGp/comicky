import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import style from "./feed.module.scss"

const Feed = () => {
  return (
    <div className={style.feedContainer}>
        <Navbar />
        <div className={style.eachPost}>
          <div className={style.postTop}>
            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" className={style.profilePic} alt="profile pic" />
            <h3>Collins</h3>
          </div>
          <img src="https://images.pexels.com/photos/1519192/pexels-photo-1519192.jpeg?auto=compress&cs=tinysrgb&w=600" className={style.postImg} alt="post img"/>
          <p>My nice car</p>
          <br />
          
        </div>
    </div>
  )
}

export default Feed
