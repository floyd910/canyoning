import React from "react";
import Tours from "../Tours/Tours";
import "./Searched.css";
const Searched = ({ tours }) => {
  return (
    <>
      <Tours tours={tours} />
    </>
  );
};

export default Searched;
