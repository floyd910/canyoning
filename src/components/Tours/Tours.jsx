import React from "react";
import TourItem from "./TourItem";
import "./Tours.css";
const Tours = ({ tours }) => {
  return (
    <div className="tours_wrapper">
      {tours.map((item) => {
        return <TourItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Tours;
