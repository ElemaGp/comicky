import React, { useContext, useEffect, useState, useRef } from 'react'
import Navbar from '../../components/navbar/Navbar'
import style from "./feed.module.scss"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineLike } from 'react-icons/ai';
import { AuthContext } from '../../authContext/AuthContext';
import useAutosizeTextArea from "../../useAutosizeTextArea";

const Feed = () => {

  const {user} = useContext(AuthContext);
  console.log(user);

  const [data, setData] = useState([]);

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
                <img src={user.user.pic} className={style.profilePic} alt="profile pic" />
                <h3>{item.postedBy.name}</h3>
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
                  <p className={style.icon}><AiOutlineDelete /></p>
                  <p className={style.icon}><AiOutlineEdit /></p>
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