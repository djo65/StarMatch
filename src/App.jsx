import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProfileNav from "./components/ProfileNav.jsx";
import logo from "./assets/chewbacca.svg";
import logo1 from "./assets/r2d2.svg";
import logo2 from "./assets/ligthsaber.svg";
import logo3 from "./assets/c3p0.svg";
import Radar from "./components/Radar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Character from "./pages/Character";
import "./App.css";

const App = () => {
  const [starWarsCharacters, setStarWarsCharacters] = useState([]);
  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((result) => result.json())
      .then((result) => setStarWarsCharacters(result));
  }, []);
  return (
    <div className="app">
      <header className="app-header">
        <Header />
        <ProfileNav className="Starjout">{/* Votre contenu ici */}</ProfileNav>
      </header>
      <div className="app-body">
        <Radar />
        <Footer />
      </div>
      <img src={logo} className="bottom-left-logo" alt="Logo" />
      <img src={logo1} className="bottom-secund-logo" alt="Logo" />
      <img src={logo2} className="bottom-third-logo" alt="Logo" />
      <img src={logo3} className="bottom-fourth-logo" alt="Logo" />
    </div>
  );
};
export default App;
