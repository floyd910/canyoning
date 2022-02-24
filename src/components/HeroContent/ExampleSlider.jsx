import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function ExampleSlider(props) {
  var items = [
    {
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620476/DZNE4428-small_pxvpk3.jpg",
    },
    {
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4337small_xoq9qk.jpg",
    },
    {
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4401-small_qda4at.jpg",
    },
    {
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620476/DZNE4522-small_qedlof.jpg",
    },
    {
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620476/DZNE4522-small_qedlof.jpg",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <img src={item.img} alt="AJARA CANYONING" key={i} />
      ))}
    </Carousel>
  );
}
