import React from 'react'
import './Residencies.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
  return (
    <section className="r-wrapper">

        
        <div className="paddings innerWidth r-container">
            
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
                
            </div>

            <Swiper {...sliderSettings}>

                <SliderButtons />

                {
                    data.map((card , idx) => {
                        return (
                            
                            <SwiperSlide key={idx}>
                                <div className="flexColStart r-card swiper-horizontal">

                                    <img src={card.image} alt="image" />

                                    <span className="secondaryText r-price">
                                        <span style={{color:"orange"}}>$</span> <span>{card.price}</span>
                                    </span>

                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>

                                </div>
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
        </div>


    </section>
  )
}

export default Residencies

const SliderButtons = () => {

    const swiper = useSwiper();

    return(
        <div className="flexCenter r-buttons">
            {/* lt -> less then */}
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            {/* gt -> greater then */}
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};