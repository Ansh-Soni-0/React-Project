import React from 'react'
import styles from './SignUp.module.css'

function SignUpInfo({formData , setFormData}) {
  return (
    <div className={styles.signUpContainer}>
      
        <input
         type="text" 
         placeholder='Email...'  
         value={formData.email} 
         onChange={(event) => setFormData({...formData,email:event.target.value})}/>

        <input
         type="text"
         placeholder='Passsword...' 
         value={formData.password} 
         onChange={(event) => setFormData({...formData,password:event.target.value})}
         />

        <input 
         type="text" 
         placeholder='Confirm Password...'  
         value={formData.confirmPassword} 
         onChange={(event) => setFormData({...formData,confirmPassword:event.target.value})}
        />

    </div>
  )
}

export default SignUpInfo
