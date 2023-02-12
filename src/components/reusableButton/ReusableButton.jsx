import React from 'react'
import style from "./reusableButton.module.scss"
import PropTypes from 'prop-types'

const ReusableButton = ({ btnWidth, btnBgColor, btnText, btnTextColor, btnPadding }) => {
  return (
    <span className={style.button} style={{width: btnWidth, backgroundColor: btnBgColor, color: btnTextColor, padding: btnPadding}}>
        {btnText}
    </span>
  )
}

//prop-types
ReusableButton.propTypes = {
    btnWidth: PropTypes.string,
    btnBgColor: PropTypes.string,
    btnPadding: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    btnTextColor: PropTypes.string,
}

export default ReusableButton
