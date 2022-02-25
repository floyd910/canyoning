import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Swipe = ({item}) => {
    const [swiper2, setSwiper2] = useState(window.matchMedia("(max-width: 900px)").matches);
    const [resized, setResized] = useState(false)
    
    useEffect(() => {
      setSwiper2(window.matchMedia("(max-width: 900px)").matches)
    }, [resized])

    window.addEventListener('resize', ()=> setResized(!resized))
    
  return (
    <>
    {!swiper2 && 
    <Swiper
      spaceBetween={0}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{width: "100%", display: "flex", alignItems: 'center', justifyContent: 'center', gap: "0px"}}
    >

    {item.images.map((elem, index)=>{return (
       
            <SwiperSlide key={index}><div className={`img_${index}`}><img className={`panorama_img`} style={{marginLeft: "0px"}} src={elem} alt="AJARA CANYONING"/></div></SwiperSlide>
        
    )})}
      
      
    </Swiper>}

{swiper2 && <Swiper
spaceBetween={0}
slidesPerView={1}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}
style={{width: "100%", alignItems: 'center', justifyContent: 'center', gap: "0px", display: "flex"}}
>

{item.images.map((elem, index)=>{return (
 
      <SwiperSlide key={index}><div className={`img_${index}`}><img className={`panorama_img`} style={{marginLeft: "0px"}} src={elem} alt="AJARA CANYONING"/></div></SwiperSlide>
  
)})}


</Swiper>
}
</>

  )
}

export default Swipe