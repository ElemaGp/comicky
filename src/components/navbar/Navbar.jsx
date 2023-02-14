import React from 'react'
import ReusableButton from '../reusableButton/ReusableButton'
import style from "./navbar.module.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = ({feedType}) => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarLeft}>
        <p>Comicky</p>
      </div> 
      <div className={style.navbarRight}>
        <div className={style.inputWrapper}>
          <SearchOutlinedIcon />
          <input type="text" placeholder='search people'/>
        </div>
        <p>{feedType}</p>
        <ReusableButton btnText="LOGOUT" btnBgColor="red" btnPadding="5px" btnTextColor="white" />
      </div>
    </div>
  )
}

export default Navbar
