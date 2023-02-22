import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import style from "./feed.module.scss"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineLike } from 'react-icons/ai';

const Feed = () => {
  return (
    <div className={style.feedContainer}>

        <Navbar feedType="TAILORED FEED"/>

        <div className={style.eachPost}>
          <div className={style.postTop}>
            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" className={style.profilePic} alt="profile pic" />
            <h3>Collins</h3>
          </div>
          <img src="https://static.langimg.com/thumb/msid-69069820,width-680,resizemode-3/69069820.jpg" className={style.postImg} alt="post img"/>
          <p className={style.caption}>More like an hour before exam. Haha!</p>
          <AiOutlineLike className={style.thumbIcon}/> 
          <h4>0 likes</h4>
          <div className={style.comments}>
            <span className={style.commentName}>John Imeh</span>
            <span>lol, this was me and my friends back then</span>
            
            <div className={style.deleteAndEditIcons}>
              <p className={style.icon}><AiOutlineDelete /></p>
              <p className={style.icon}><AiOutlineEdit /></p>
            </div>
          </div>

        </div>
        
        <div className={style.eachPost}>
          <div className={style.postTop}>
            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" className={style.profilePic} alt="profile pic" />
            <h3>Collins</h3>
          </div>
          <img src="https://static.langimg.com/thumb/msid-69069820,width-680,resizemode-3/69069820.jpg" className={style.postImg} alt="post img"/>
          <p className={style.caption}>More like an hour before exam. Haha!</p>
          <AiOutlineLike className={style.thumbIcon}/> 
          <h4>0 likes</h4>
          <div className={style.comments}>
            <span className={style.commentName}>John Imeh</span>
            <span>lol, this was me and my friends back then</span>
            
            <div className={style.deleteAndEditIcons}>
              <p className={style.icon}><AiOutlineDelete /></p>
              <p className={style.icon}><AiOutlineEdit /></p>
            </div>
          </div>

        </div>

        

    </div>
  )
}

export default Feed
