import React, { useState } from "react";
import Header from "../components/Header/Header";
import Searched from "../components/Searched/Searched";
import Tours from "../components/Tours/Tours";

const ToursPage = ({ tours }) => {
  const [searched, setSearched] = useState([]);
  const onEnter = (value) => {
    let searchedArray = tours
      .filter((elem) => elem.keywords.toLowerCase().includes(value))
      .map((item) => item);
    setSearched(searchedArray);
  };
  return (
    <div>
      <Header onEnter={onEnter} tours={tours} />
      {searched.length === 0 && <Tours tours={tours} />}
      {searched.length > 0 && <Searched tours={searched} />}
    </div>
  );
};

export default ToursPage;
