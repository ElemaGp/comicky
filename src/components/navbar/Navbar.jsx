import React from 'react'
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
        <span>LOGOUT</span>
      </div>
    </div>
  )
}

export default Navbar
