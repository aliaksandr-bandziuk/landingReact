import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './swiper.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';

import slide1 from './slider_1.jpg';
import slide2 from './slider_2.jpg';
import slide3 from './slider_3.jpg';
import slide4 from './slider_4.jpg';
import slide5 from './slider_5.jpg';
import slide6 from './slider_6.jpg';
import slide7 from './slider_7.jpg';
import slide8 from './slider_8.jpg';
import slide9 from './slider_9.jpg';
import slide10 from './slider_10.jpg';
import slide11 from './slider_11.jpg';
import slide12 from './slider_12.jpg';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      navigation
      loop={true}
      grabCursor={true}
      autoplay={{delay: 2000}}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide1} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide2} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide3} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide4} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide5} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide6} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide7} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide8} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide9} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide10} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide11} alt=""/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="custom-slide">
          <img src={slide12} alt=""/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};