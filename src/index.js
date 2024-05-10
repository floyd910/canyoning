import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ToursPage from "./screens/ToursPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostInner from "./screens/PostInner";
import Contact from "./screens/Contact/Contact";

let toursStarter = [
  {
    id: "uchkho_canyon_tour",
    title: "UCHKHO CANYON TOUR",
    location: "Ajara region, Georgia,",
    location2: "Village Uchkho, 85 km from Batumi",
    description:
      "Canyoning in Uchkho village will give you the most extreme outdoor experience in Georgia.",
    drivingTime: "2.5 h.",
    hiking: "15 minutes",
    canyoning: "4-5 hours",
    level: "Easy",
    img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4337small_xoq9qk.jpg",
    images: [
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620476/DZNE4428-small_pxvpk3.jpg",
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4337small_xoq9qk.jpg",
      // "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4401-small_qda4at.jpg",
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620476/DZNE4522-small_qedlof.jpg",
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4545-small_ojjzxp.jpg",
    ],
    keywords:
      "UCHKO CANYON TOUR Ajara region, Georgia, Village Uchkho, 85 km from Batumi Canyoning in Uchkho village will give you the most extreme outdoor experience in Georgia. Driving time 2.5 h. Hiking 15 minutes Canyoning 4-5 hours Level: Medium Canyon Tour 2-days Day 1 Driving from Batumi to the highlands of Ajara in the afternoon. It is one of the most beautiful road trips in Georgia. After 1.5 hours of driving, we will get to beautiful Uchko village where locals will host us and we will have the real Georgian homemade dinner. After dinner, you will have free time to walk around the village and enjoy the peaceful atmosphere of Georgian highlands Day 2 After breakfast, we will drive by 4X4 vehicle through the high mountainous part of the village. This journey itself is one of the most unforgettable experiences of the trip. After an hour of driving and 15 minutes of hiking, we will reach the starting point of the Uchko canyon. And here starts the adventure. 4-5 hours of navigating down the mountain river, abseiling 10 waterfalls will give you much more adrenaline than you can imagine. At the end of extreme canyoneering, we will board on a vehicle and head back to Batumi in the evening. Service includes Transportation from and to Batumi Overnight in the village house Meals: dinner and breakfast in the village 4X4 vehicle to the starting point Full equipment, 5mm suit, helmet, harness Certified guides service You will get an energy bar and snacks during the canyoning Canyon Tour 1-day This tour is for travellers who have less time, but still want to have the adventure of a lifetime. We will drive from Batumi early in the morning, at 7:00. After 1.5 hours we will reach the beautiful Uchkho village in the highlands of the Ajara region. Soon after we will drive the gravel road by 4X4 vehicle to the starting point of Uchko canyon. And here starts the adventure. Unlike the 2-day tour, this descent will be a bit shorter, but still very exciting. At the end of extreme canyoneering, we will board on a vehicle and head back to Batumi in the evening. Service includes Transportation from and to Batumi 4X4 vehicle to the starting point Full equipment, 5mm suit, helmet, harness Certified guides service You will get an energy bar and snacks during the canyoning",
  },

  {
    id: "tkhopra_canyon_tour",
    title: "TKHOPRA CANYON TOUR",
    location: "Samegrelo region, Tkhopra River valley,",
    location2:
      "Village Salkhino, 70 km from Kutaisi, Start point 730 aslm – end point 630 aslm",
    description:
      "Length off valley - 650 m, 8 waterfalls, 8 rappelling point – Highest – 55 m",
    drivingTime: "1.30 h. Driving from Kutaisi",
    hiking: "30 minutes",
    canyoning: "4-5 hours",
    level: "Medium",
    waterLevel: "Water level - Low",
    img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645855847/IMG_20211015_010749_530_vqmxrq.jpg",
    images: [
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645855844/IMG_20211015_010746_008_q2gjna.jpg",
      // "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4401-small_qda4at.jpg",
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645855841/IMG_20220225_014753_128_etka3k.jpg",
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645855847/IMG_20211015_010749_530_vqmxrq.jpg",
      // "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4545-small_ojjzxp.jpg",
    ],
    keywords:
      "TKHOPRA CANYON TOUR Samegrelo region,  Tkhopra River valley Village Salkhino, 70 km from Kutaisi, Start point 730 aslm – end point 630 aslm Length off valley – 650 m, 8 waterfalls, 8 rappelling point – Highest – 55 m 1.30 Driving from Kutaisi 30 min hiking 4 – 5 hours in the canyon Level – Medium Water level - Low Service includes: 5mm wetsuits, helmet, harness, full technical equipment,  2  certified guides, transfer from Kutaisi and back, energetic food in the canyon, barbeque after canyoning",
  },

  {
    id: "dzmuisi_canyon_tour",
    title: "DZMUISI CANYON TOUR",
    location: "Village Dzmuii 55 km from Kutaisi",
    location2: "Start point - 1050 aslm 	endpoint - 650 aslm ",
    description:
      "Length of the valley  – 1.5 km, Number of waterfalls  12, Rappelling point – 8, 2sliding, 2 jumping - The highest waterfall  20 m",
    drivingTime: "2 hours driving from Kutaisi",
    hiking: "1 Hour forest hiking",
    canyoning: "4:30 – 5 hours in the canyon",
    level: "Hard",
    waterLevel: "Water level - High",
    img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645858455/dzmusi_kt5n6b.jpg",
    images: [
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645858455/68_stusa5.jpg",
      // "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4401-small_qda4at.jpg",
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645858455/6a_ppyks3.jpg",
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645858455/dzmusi_kt5n6b.jpg",
      // "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4545-small_ojjzxp.jpg",
    ],
    keywords:
      "Village Dzmuii 55 km from Kutaisi Start point – 1050 aslm 	endpoint - 650 aslm Length of the valley – 1.5 km, Number of waterfalls  12, Rappelling point – 8, 2sliding, 2 jumping - The highest waterfall  20 m 2  hours driving from Kutaisi 1  Hour  forest hiking 4:30 – 5 hours in the canyon Level – Hard water level - High Price includes 5mm wetsuits, helmet, harness, full technical equipment,  2  certified guides, transfer from Kutaisi and back, energetic food in the canyon, barbeque and Georgian wine after canyoning.",
  },

  {
    id: "batumi_canyoning",
    title: "BATUMI CANYONING",
    location: "Kapnistavi - 30 km from Batumi",
    location2: "Start point - 650 aslm 	endpoint - 430 aslm ",
    description:
      "Length of the valley  – 750 m, Number of waterfalls  7, Rappelling point – 8, The highest waterfall  40 m",
    drivingTime: "30 minutes from Batumi",
    hiking: "20 minutes forest hiking",
    canyoning: "3:30 – 4 hours in the canyon",
    level: "Moderate",
    waterLevel: "Water level - Medium",
    img: "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714739363/DZNE4494_tdouec.jpg",
    images: [
      "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714739363/DZNE4676_s2qjh0.jpg",
      // "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4401-small_qda4at.jpg",
      "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714739363/DZNE4494_tdouec.jpg",
      "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714739413/photo_5460778779602432719_y1_qiqqqp.jpg",
      "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714739364/photo_5251278774643834257_y_tau8fc.jpg",
    ],
    keywords:
      "Village Dzmuii 55 km from Kutaisi Start point – 1050 aslm 	endpoint - 650 aslm Length of the valley – 1.5 km, Number of waterfalls  12, Rappelling point – 8, 2sliding, 2 jumping - The highest waterfall  20 m 2  hours driving from Kutaisi 1  Hour  forest hiking 4:30 – 5 hours in the canyon Level – Hard water level - High Price includes 5mm wetsuits, helmet, harness, full technical equipment,  2  certified guides, transfer from Kutaisi and back, energetic food in the canyon, barbeque and Georgian wine after canyoning.",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App tours={toursStarter} />} />
        <Route path="/tours" element={<ToursPage tours={toursStarter} />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/postInner/:id"
          element={<PostInner tours={toursStarter} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
