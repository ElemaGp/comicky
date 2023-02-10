import React from 'react'
import style from "./reusableButton.module.scss"
import PropTypes from 'prop-types'

const ReusableButton = ({ btnWidth, btnBgColor, btnText, btnTextColor }) => {
  return (
    <span className={style.button} style={{width: btnWidth ? btnWidth : "6rem", backgroundColor: btnBgColor ? btnBgColor : "teal", color: btnTextColor ? btnTextColor : "white"}}>
        {btnText}
    </span>
  )
}

//prop-types
ReusableButton.propTypes = {
    btnWidth: PropTypes.string,
    btnBgColor: PropTypes.string,
    btnText: PropTypes.string.isRequired,
    btnTextColor: PropTypes.string,
}

export default ReusableButton
