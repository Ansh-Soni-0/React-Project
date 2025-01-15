import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button '
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function ContactForm() {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [text , setText] = useState("")



  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
  
    setEmail(event.target[1].value);

    setText(event.target[2].value);

  };


  return (
    <section className={styles.container}>
      

        <div className={styles.contactForm}>

            <div className={styles.top_btn}>

                <Button 
                    text="VIA SUPPORT CHAT" 
                    icon={<MdOutlineMessage fontSize='24px'/>}
                />

                <Button 

                    text="VIA CALL" 
                    icon={<IoCall fontSize='24px'/>}
                />

            </div>

            <Button 
                    isWhiteBtn={true}
                    text="VIA EMAIL FORM" 
                    icon={<MdEmail fontSize='24px'/>}
            />


            <form
                onSubmit={onSubmit}
            >

                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name'/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name='email'/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">TEXT</label>
                    <textarea name='text' rows="10"/>
                </div>


                <div
                    style={
                        {display:"flex" , justifyContent:"end"}
                    }
                    >
                    <Button 
                            text="SUBMIT BUTTON" 
                            />

                </div>

                <div>
                    {
                        name + "    " + email + "    " + text
                    }
                </div>

            </form>

        </div>


        <div className={styles.contactImage}>
            <img src="./image/hero.svg" alt="contact-imagel" />
        </div>
    

    </section>
  )
}

export default ContactForm
