import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";


export default function ExampleSlider({item}) {
  var items = item.images.map(item=> {return ({
    img: item
  })})
  

  return (
    
    <Carousel animation='slide' width="30%" timeout={{
    
      exit: 0
    }}>
      {items.map((item, i) => (
        <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: '50px'}}>
        <img style={{width: '30%', height: '300px', cursor: 'pointer'}} src={item.img} alt="AJARA CANYONING" key={i} />
        </div>
      ))}
      
    </Carousel>
  );
}
