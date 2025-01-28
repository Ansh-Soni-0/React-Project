import React from 'react'
import styles from './Personal.module.css'

function PersonalInfo({formData , setFormData}) {
  return (
    <div className={styles.personalInfoContainer}>
      <input 
      type="text" 
      placeholder='First Name...' 
      value={formData.firstName}
      onChange={(event) => setFormData({...formData,firstName:event.target.value})}
      />

      <input 
      type="text" 
      placeholder='Last Name...'
      value={formData.lastName}
      onChange={(event) => setFormData({...formData,lastName:event.target.value})}
       />

      <input 
      type="text" 
      placeholder='Username...'
      value={formData.username}
      onChange={(event) => setFormData({...formData,username:event.target.value})}
       />
    </div>
  )
}

export default PersonalInfo
