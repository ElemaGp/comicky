import { Button } from '@mui/material'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import style from "./create.module.scss"

const Create = () => {
  return (
    <div className={style.createContainer}>
        <Navbar />
        <div className={style.createWrapper}>
            <form className={style.createForm}>
                <div className={style.createLabelAndItem}>
                    <label htmlFor='imageUpload'>Post funny meme/image/short video:</label>
                    <input type="file" id="imageUpload" />
                </div>
                <div className={style.createLabelAndItem}>
                    <label htmlFor="postCaption">Caption:</label>
                    <textarea id="postCaption" cols="30" rows="4" />
                </div>
                <Button variant='contained' color='primary' disabled={false}>POST</Button>
            </form>
        </div>
      
    </div>
  )
}

export default Create
