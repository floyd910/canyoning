import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";

const Swipe = ({ item }) => {
  return (
    <>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          width: "100%",
         
        }}
        className="swiper1"
      >
        {item.images.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="swiped_div">
              <div className="arrow">
    <div className="arrow-head"></div>
    <div className="arrow-body"></div>
  </div> 
                <img
                  className={`panorama_img`}
                  style={{ marginLeft: "0px" }}
                  src={elem}
                  alt="AJARA CANYONING"
                />
               <div className="arrow">
    <div className="arrow-body"></div>
    <div className="down-arrow-head">    </div>
  </div>  
 

  

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        className="swiper2"
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "0px",
          display: "none",
        }}
      >
        {item.images.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={`img_${index}`}>
                <img
                  className={`panorama_img`}
                  style={{ marginLeft: "0px" }}
                  src={elem}
                  alt="AJARA CANYONING"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Swipe;
