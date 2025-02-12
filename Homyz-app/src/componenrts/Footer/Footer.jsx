import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <section className="f-wrapper">

            <div className="paddings innerWidth flexCenter f-container">
                {/* left side  */}

                <div className="flexColStart f-left">
                    <a href="#"><img src="./logo2.png" alt="logo" width={120} /></a>

                    <span>
                        Our vision is to make all people <br />
                        the best place to live for them
                    </span>
                </div>

                {/* right side  */}

                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>145 New Your, FL 4571 USA</span>

                    <div className="flexCenter f-menu">
                        <a href='#'>Property</a>
                        <a href='#'>Service</a>
                        <a href='#'>Product</a>
                        <a href='#'>About Us</a>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Footer