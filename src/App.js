import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import TheNFT from "./components/TheNFT";
import Perks from "./components/Perks";
import Team from "./components/Team";
import TeamImage from "./components/TeamImage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <TheNFT />
      <Perks />
      <Team />
      <TeamImage />
      <Footer />
    </div>
  );
}

export default App;
