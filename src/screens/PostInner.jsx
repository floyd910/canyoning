import React from "react";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import Swipe from "../components/Swipe";
import "./PostInner.css";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
const PostInner = ({ tours }) => {
  let { id } = useParams();
  return (
    <>
      <Header />
      {tours
        .filter((e) => e.id === id)
        .map((item) => {
          return (
            <div className="tour_inner" key={item.id}>
              <div className="main_image">
              <h5>{item.title}</h5>

                <img src={item.img} alt={item.title}/>
              </div>
             
              {item.id === "uchkho_canyon_tour" ? (
                <>
                <div className="inner_text">
                  <h6>Canyon Tour 2-days</h6>
                  <p>Day 1</p>
                  <p>
                    Driving from Batumi to the highlands of Ajara in the
                    afternoon. It is one of the most beautiful road trips in
                    Georgia. After 1.5 hours of driving, we will get to
                    beautiful Uchko village where locals will host us and we
                    will have the real Georgian homemade dinner. After dinner,
                    you will have free time to walk around the village and enjoy
                    the peaceful atmosphere of Georgian highlands.
                  </p>
                  <p>Day 2 </p>
                  <p>
                    After breakfast, we will drive by 4X4 vehicle through the
                    high mountainous part of the village. This journey itself is
                    one of the most unforgettable experiences of the trip. After
                    an hour of driving and 15 minutes of hiking, we will reach
                    the starting point of the Uchko canyon. And here starts the
                    adventure. 4-5 hours of navigating down the mountain river,
                    abseiling 10 waterfalls will give you much more adrenaline
                    than you can imagine. At the end of extreme canyoneering, we
                    will board on a vehicle and head back to Batumi in the
                    evening.
                  </p>
                  <ul>
                    <p>Service includes</p>

                    <li>Transportation from and to Batumi</li>
                    <li>Overnight in the village house</li>
                    <li>Meals: dinner and breakfast in the village</li>
                    <li>4X4 vehicle to the starting point</li>
                    <li>Full equipment, 5mm suit, helmet, harness</li>
                    <li>Certified guides service</li>
                    <li>
                      You will get an energy bar and snacks during the canyoning
                    </li>
                  </ul>
                  <h6>Canyon Tour 1-day</h6>

                  <p>
                    This tour is for travellers who have less time, but still
                    want to have the adventure of a lifetime. We will drive from
                    Batumi early in the morning, at 7:00. After 1.5 hours we
                    will reach the beautiful Uchkho village in the highlands of
                    the Ajara region. Soon after we will drive the gravel road
                    by 4X4 vehicle to the starting point of Uchko canyon. And
                    here starts the adventure. Unlike the 2-day tour, this
                    descent will be a bit shorter, but still very exciting. At
                    the end of extreme canyoneering, we will board on a vehicle
                    and head back to Batumi in the evening.
                  </p>

                  <ul>
                    <p>Service includes</p>

                    <li>Transportation from and to Batumi</li>
                    <li>4X4 vehicle to the starting point</li>
                    <li>Full equipment, 5mm suit, helmet, harness</li>
                    <li>Certified guides service</li>
                    <li>
                      You will get an energy bar and snacks during the canyoning
                    </li>
                  </ul>
                 
                </div>
                 <div className="images_box">
              
                 <div className="gallery_text_wrapper">  <p>Gallery</p></div>
                 <Swipe item={item} />
                
               </div>
               </>
              ) : item.id === "tkhopra_canyon_tour" ? (
                <>
                <div className="inner_text">
                  <ul>
                    <p>Service includes</p>

                    <li>
                      5mm wetsuits, helmet, harness, full technical equipment
                    </li>
                    <li>2 certified guides</li>
                    <li>transfer from Kutaisi and back</li>
                    <li>energetic food in the canyon</li>
                    
                  </ul>
                </div>
                <div className="images_box">
              
                 <div className="gallery_text_wrapper">  <p>Gallery</p></div>
                 <Swipe item={item} />
                
               </div>
                </>
              ) : (
                item.id === "dzmuisi_canyon_tour" ? (
                  <>
                    <div className="inner_text">
                      <h6>
                        <strong>Tour provided by Georgian Canyoning</strong>
                      </h6>

                      <ul>
                        <p>Service includes</p>

                        <li>
                          5mm wetsuits, helmet, harness, full technical
                          equipment
                        </li>
                        <li>2 certified guides</li>
                        <li>transfer from Kutaisi and back</li>
                        <li>energetic food in the canyon</li>
                        <li>barbeque nd Georgian wine after canyoning</li>
                      </ul>
                    </div>
                    <div className="images_box">
              
                 <div className="gallery_text_wrapper"><p>Gallery</p></div>
                 <Swipe item={item} />
                
               </div>
                  </>
                ) : item.id === "batumi_canyoning" && (
                  <>
                  <div className="inner_text">
                    <h6>
                      <strong>Tour provided by Georgian Canyoning</strong>
                    </h6>

                    <ul>
                      <p>Service includes</p>

                      <li>
                      Transportation from and to Batumi

                      </li>
                      <li>2 certified guides</li>
                      <li>Certified instructors service</li>
                      <li>Full equipment, 5mm wetsuit, helmet, harness</li>
                      <li>You will get an energy bar and snacks during the canyoning</li>
                    </ul>
                  </div>
                  <div className="images_box">
            
               <div className="gallery_text_wrapper"><p>Gallery</p></div>
               <Swipe item={item} />
              
             </div>
                </>
                )
              )}
            </div>
          );
        })}
    </>
  );
};

export default PostInner;
