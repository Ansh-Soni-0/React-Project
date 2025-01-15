import styles from "./Button.module.css"

import React from 'react'

function Button ({ isWhiteBtn , icon , text , ...rest}) {

    //destructuring of props
    //nnow no need to write props.isWhiteBtn , props.icon , props.text
    // const { isWhiteBtn , icon , text } = props

  return (
    <button 
    {...rest}
    className={isWhiteBtn ? styles.white_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button 