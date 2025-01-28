import React from 'react'
import styles from './OtherInfo.module.css'

function OtherInfo({formData , setFormData}) {
  return (
    <div className={styles.OtherInfoContainer}>

      <input 
      type="text" 
      placeholder='Nationality...' 
      value={formData.nationality} 
      onChange={(event) => setFormData({...formData,nationality:event.target.value})}
      />

      <input 
      type="text" 
      placeholder='Other...' 
      value={formData.other} 
      onChange={(event) => setFormData({...formData,other:event.target.value})}
      />

    </div>
  )
}

export default OtherInfo
