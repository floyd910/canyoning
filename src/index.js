import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ToursPage from "./screens/ToursPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostInner from "./screens/PostInner";

let tours = [
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
    level: "Medium",
    img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4337small_xoq9qk.jpg",
    images: [
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620476/DZNE4428-small_pxvpk3.jpg",
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4337small_xoq9qk.jpg",
      // "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4401-small_qda4at.jpg",
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620476/DZNE4522-small_qedlof.jpg",
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645620475/DZNE4545-small_ojjzxp.jpg",
    ],
  },
];
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App tours={tours} />} />
        <Route path="/tours" element={<ToursPage tours={tours} />} />
        <Route path="/postInner/:id" element={<PostInner tours={tours} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
