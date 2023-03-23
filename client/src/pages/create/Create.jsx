import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import style from "./create.module.scss"

const Create = () => {

    const [image, setImage] = useState("");
    const [imgCloudinaryUrl, setImgCloudinaryUrl] = useState("");
    const [caption, setCaption] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        if(image){
            const data = new FormData()
            data.append("file", image)
            data.append("upload_preset", "crud-operation")
            data.append("cloud_name", "dxyejrjbp")
            fetch("https://api.cloudinary.com/v1_1/dxyejrjbp/image/upload",{
                method: "post",
                body: data
            })
            .then(res=>res.json())  //the argument in a ".then" method basically means the response. You can use anything as it's placeholder text. Here it is called "res". Below, it is called "data"
            .then(data=>{           //the argument in a ".then" method basically means the response. You can use anything as it's placeholder text. Here it is called "data". Above, it is called "res"
                console.log(data)
                setImgCloudinaryUrl(data.url);
                console.log(data.url);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },[image])


    const handleSubmit = (e) =>{
        e.preventDefault();

        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                caption,
                pic:imgCloudinaryUrl
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              console.log(data.error);
           }
           else{
               console.log("Post created successfully");
               navigate('/');
           }
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className={style.createContainer}>
        <Navbar />
        <div className={style.createWrapper}>
            <form className={style.createForm} onSubmit={handleSubmit}>
                <div className={style.createLabelAndItem}>
                    <label htmlFor='imageUpload'>Post funny meme/image/short video:</label>
                    <input type="file" id="imageUpload" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div className={style.createLabelAndItem}>
                    <label htmlFor="postCaption">Caption:</label>
                    <textarea id="postCaption" cols="30" rows="4"
                    value={caption}
                    onChange={(e)=>setCaption(e.target.value)}
                    />
                </div>
                {/* <Button variant='contained' color='primary' disabled={false}>POST</Button> */}
                <button>POST</button>
            </form>
        </div>
      
    </div>
  )
}

export default Create