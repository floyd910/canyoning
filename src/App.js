import "./App.css";
import Header from "./components/Header/Header";
import HeroContent from "./components/HeroContent/HeroContent";
import Tours from "./components/Tours/Tours";
function App({ tours }) {
  return (
    <div className="App">
      <Header tours={tours} />
      <HeroContent />
      <Tours tours={tours} />
    </div>
  );
}

export default App;
