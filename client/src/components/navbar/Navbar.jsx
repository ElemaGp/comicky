import React, { useContext, useState } from 'react'
import ReusableButton from '../reusableButton/ReusableButton'
import style from "./navbar.module.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Drawer, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = ({feedType}) => {

  const {dispatch} = useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogout=()=>{
    dispatch(logout());
  }
  
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarLeft}>
        <p>Comicky</p>
      </div> 
      <div className={style.navbarRight}>
        <div className={style.inputWrapper}>
          <SearchOutlinedIcon style={{cursor: "pointer"}} onClick={()=>setIsDrawerOpen(true)} />
          {/* <input type="text" placeholder='search people' onClick={()=>setOpen(true)} onChange={()=>setOpen(true)}/> */}
        </div>
        <p>{feedType}</p>
        {/* <ReusableButton 
        btnText="LOGOUT" 
        btnBgColor="red" 
        btnPadding="5px" 
        btnTextColor="white" 
        onClick={handleLogout}
        /> */}
        <button onClick={handleLogout}>LOGOUT</button>
      </div>

      {/*TEMPORARY DRAWER TO SEARCH USERS*/}
      <Drawer anchor="top" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}> {/* whenever "isDrawerOpen" is true, the drawer opens. Whenever the drawer closes eg by the user clicking outside the drawer, "isDrawerOpen" is set to false */}
        <Stack p={4} height="80px" alignItems="center" justifyContent="center" role="presentation">
          <Stack width="80vw" p={3} direction="row" alignItems="center" justifyContent="center">
            <TextField id="standard-basic" label="Search Users..." variant="standard" sx={{width:{
              xs:200, //for 0 screen width and above
              sm:400, //for 600 screen width and above
              md:600, //for 900 screen width and above
              lg:800, //for 1200 screen width and above
              xl:1000 //for 1536 screen width and above
            }}} />
          </Stack>
        </Stack>
      </Drawer>

    </div>
  )
}

export default Navbar
