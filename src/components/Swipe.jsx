import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Swipe = ({ item }) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0px",
        }}
        className="swiper1"
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
