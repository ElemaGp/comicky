import React from 'react'
import ReusableButton from '../reusableButton/ReusableButton'
import style from "./navbar.module.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarLeft}>
        <p>Comicky</p>
      </div> 
      <div className={style.navbarRight}>
        <div className={style.inputWrapper}>
          <SearchOutlinedIcon />
          <input type="text" placeholder='search for people'/>
        </div>
        <p>TAILORED-FEED</p>
        <ReusableButton btnText="LOGOUT" btnBgColor="red"/>
      </div>
    </div>
  )
}

export default Navbar
