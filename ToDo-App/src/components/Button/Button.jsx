import React from 'react'

import styles from "./Button.module.css"


function Button({text , onClick ,icon}) {
  return (
    <div>
      <button className={styles.btn} onClick={onClick}>
        {text}
        {icon}
      </button>
    </div>
  )
}

export default Button
