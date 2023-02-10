import React from 'react'
import ReusableButton from '../reusableButton/ReusableButton'
import style from "./navbar.module.scss"

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarLeft}>
        <p>Comicky</p>
      </div> 
      <div className={style.navbarRight}>
        <input type="text" />
        <p>TAILORED-FEED</p>
        <ReusableButton btnText="LOGOUT" btnBgColor="red"/>
      </div>
    </div>
  )
}

export default Navbar
