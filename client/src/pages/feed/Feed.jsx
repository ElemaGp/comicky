import React, { useContext, useEffect, useState, useRef } from 'react'
import Navbar from '../../components/navbar/Navbar'
import style from "./feed.module.scss"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineLike } from 'react-icons/ai';
import { AuthContext } from '../../authContext/AuthContext';
import useAutosizeTextArea from "../../useAutosizeTextArea";
import { Link } from 'react-router-dom';

const Feed = () => {

  const {user} = useContext(AuthContext);
  console.log(user);

  const [data, setData] = useState([]);

  //bringing in the reusable custom hook for making the textarea box increase based on text size
  const [value, setValue] = useState("");
  const textAreaRef = useRef(null);
  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (event) => {
    const val = event.target?.value;

    setValue(val);
  };

  useEffect(()=>{
    fetch('/allpost',{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        setData(result.posts)
    })
 },[])


  return (
    <div className={style.feedContainer}>

        <Navbar feedType="TAILORED FEED"/>
        {
          data.map(item=>{
            return(
            <div className={style.eachPost} key={item._id}>
              <div className={style.postTop}>
                <div className={style.postTopPicAndName}>
                  <img src={item.postedBy.pic} className={style.profilePic} alt="profile pic" />
                  <Link to={item.postedBy._id !== user.user._id ? "/profile/"+item.postedBy._id : "/profile"  } ><h3>{item.postedBy.name}</h3></Link>
                </div>
                {
                  item.postedBy._id === user.user._id &&
                  <div className={style.postTopEditAndDeleteIcons}>
                    <p className={style.postEditIcon}><AiOutlineEdit /></p>
                    <p className={style.postDeleteIcon}><AiOutlineDelete /></p>
                  </div>
                }
              </div>
              <img src={item.photo} className={style.postImg} alt="post img"/>
              <p className={style.caption}>{item.caption}</p>
              <AiOutlineLike className={style.thumbIcon}/> 
              <h4>{item.likes.length} likes</h4>
              <div className={style.comments}>
                <span className={style.commentName}>John Imeh</span>
                <span>lol, this was me and my friends back then</span>
                
                {
                  item.postedBy._id === user.user._id &&
                  <div className={style.deleteAndEditIcons}>
                  <p className={style.commentsIcon}><AiOutlineDelete /></p>
                  <p className={style.commentsIcon}><AiOutlineEdit /></p>
                </div>
                }

                <textarea name="comments" id="comments"   placeholder='add a comment...' onChange={handleChange} ref={textAreaRef} rows={1} value={value}/>
              </div>
            </div>
            )
          })
        }
          

    </div>
  )
}

export default Feed