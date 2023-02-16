import React, { useState } from 'react'
import ReusableButton from '../reusableButton/ReusableButton'
import style from "./navbar.module.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, Modal, Stack, Typography } from '@mui/material';

const Navbar = ({feedType}) => {

  const [open, setOpen] = useState(false);
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarLeft}>
        <p>Comicky</p>
      </div> 
      <div className={style.navbarRight}>
        <div className={style.inputWrapper}>
          <SearchOutlinedIcon onClick={()=>setOpen(true)}/>
          {/* <input type="text" placeholder='search people' onClick={()=>setOpen(true)} onChange={()=>setOpen(true)}/> */}
        </div>
        <p>{feedType}</p>
        <ReusableButton btnText="LOGOUT" btnBgColor="red" btnPadding="5px" btnTextColor="white" />
      </div>

      {/*MODAL TO CHANGE PROFILE PICTURE*/}
      {/* the Modal's "open" prop is true when my "open" useState is true. Also, when i click outside the modal, the onClose prop is called, and that is where i set my "open" useState to false */}
      <Modal open={open} onClose={()=>setOpen(false)}> 
          <Box position="absolute" top="50%" padding={4} sx={{backgroundColor:"white", left:{
            xs: 35, //for 0vw and above
            sm: 200, //for 600vw and above
            md: 300, //for 900vw and above
            lg: 400, //for 1200vw and above
            xl: 500, //for 1536vw and above
          }}}>
          <Stack gap={2}>
            <Typography fontWeight={500}>Select a new profile pic</Typography>
              <input type="file" />
            <Button variant="contained" color="primary">UPLOAD</Button>
          </Stack>
          </Box>
        </Modal>

    </div>
  )
}

export default Navbar
