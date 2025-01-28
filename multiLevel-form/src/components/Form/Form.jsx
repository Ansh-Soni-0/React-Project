import React, { useState } from 'react'
import SignUpInfo from '../SignUp/SignUpInfo';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import OtherInfo from '../OtherInfo/OtherInfo';
import styles from "./Form.module.css"

function Form() {


    const [page , setPage] = useState(0);
    const [formData , setFormData] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        firstName:"",
        lastName:"",
        username:"",
        nationality:"",
        other:"",
    });

    const FormTitles = ["Sign Up" , "Personal Info" , "Other"];

    const PageDisplay = () => {
        if(page === 0){
            return <SignUpInfo formData={formData} setFormData={setFormData}/>
        } else if(page === 1){
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData}/>
        }
    }


  return (
    <div className={styles.form}>

        <div className={styles.progressBar}>
            <div 
            style={{width: page === 0 ? "33.3% " : page === 1 ? "66.6%" : "100%"}}
            ></div>
        </div>

        <div className={styles.formContainer}>

            <div className={styles.header}>
                <h1>{FormTitles[page]}</h1>
            </div>

            <div className={styles.bodyContainer}>
                <div className={styles.body}>{PageDisplay()}</div>
            </div>

            <div className={styles.footer}>

                <button
                disabled={page == 0}
                onClick={() => {
                    setPage((currPage) => currPage - 1)
                }}
                >
                    prev
                </button>

                <button
                disabled={page == FormTitles.length - 1}
                onClick={() => {
                    setPage((currPage) => currPage + 1)
                }}
                >
                    next
                </button>

            </div>

        </div>
      
    </div>
  )
}

export default Form
