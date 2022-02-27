import React from "react";
import "./Tours.css";
import { useNavigate } from "react-router-dom";

const TourItem = ({ item, inner }) => {
  const navigate = useNavigate();

  return (
    <div className="tour_item">
      <h5>{item.title}</h5>
      <div className="d-flex">
        <div
          className="img_box"
          onClick={() => navigate(`/postInner/${item.id}`)}
        >
          <img src={item.img} alt={item.title} />
          <div className="level">Level: {item.level}</div>
        </div>
        <div className="text">
          <p>{item.location}</p>
          <p>{item.location2}</p>
          <p>{item.description}</p>
          <p>Driving time {item.drivingTime}</p>
          <p>Hiking {item.hiking}</p>
          <p>Canyoning {item.canyoning}</p>
          {item.waterLevel && <p>{item.waterLevel}</p>}
        </div>
      </div>
    </div>
  );
};

export default TourItem;
