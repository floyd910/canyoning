import "./App.css";
import Header from "./components/Header/Header";
import HeroContent from "./components/HeroContent/HeroContent";
import Searched from "./components/Searched/Searched";
import Tours from "./components/Tours/Tours";
import { useState } from "react";
function App({ tours }) {
  const [searched, setSearched] = useState([]);
  const onEnter = (value) => {
    let searchedArray = tours
      .filter((elem) => elem.keywords.toLowerCase().includes(value))
      .map((item) => item);
    setSearched(searchedArray);
  };

  console.log(searched);
  return (
    <div className="App">
      <Header tours={tours} onEnter={onEnter} />
      {searched.length === 0 && <HeroContent />}
      {searched.length === 0 && <Tours tours={tours} />}
      {searched.length > 0 && <Searched tours={searched} />}
    </div>
  );
}

export default App;
