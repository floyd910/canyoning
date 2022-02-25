import React from 'react'
import Header from '../components/Header/Header'
import { useParams } from "react-router-dom";
import Swipe from '../components/Swipe';
import "./PostInner.css";
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
const PostInner = ({tours}) => {
    let { id } = useParams();
  return (
    <>
    <Header/>
    {tours.filter(e => e.id === id).map(item=>{return (
        <div className="tour_inner"> 
        <h5>{item.title}</h5>
        <div className="images_box">     
            <Swipe item={item} />
            <SwipeLeftIcon style={{color: "#d76a03", position: "absolute", right: '10px', top: '30%', zIndex: '2', fontSize: '48px'}}/>
         </div>   
        </div>
    )})}
    </>
  )
}

export default PostInner