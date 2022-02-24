import "./App.css";
import Header from "./components/Header/Header";
import HeroContent from "./components/HeroContent/HeroContent";
import Tours from "./components/Tours/Tours";
function App() {
  let tours = [
    {
      id: 1,
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
    },
  ];
  return (
    <div className="App">
      <Header tours={tours} />
      <HeroContent />
      <Tours tours={tours} />
    </div>
  );
}

export default App;
