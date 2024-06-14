import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProfileNav from './components/ProfileNav.jsx';
import logo from './assets/chewbacca.svg';
import logo1 from './assets/r2d2.svg';
import logo2 from './assets/ligthsaber.svg';
import logo3 from './assets/c3p0.svg';
import Radar from "./componenents/Radar";
import { useEffect ,useState  } from "react";
import Pub from './components/Pub.jsx';

import './App.css';

const App = () => {
  const [starWarsCharacters, setStarWarsCharacters] = useState([]);
  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((result) => result.json())
      .then((result) => setStarWarsCharacters(result));
  }, []);

  const specificIds = [66, 8, 78];
    const filteredCharacters = starWarsCharacters.filter(character => specificIds.includes(character.id));

    return (
        <div className="app">
            
                <Header />
                <div className='profiles-images'> 
                    
                {filteredCharacters.map((character) => {
                    return (
                        <ProfileNav
                            image={character.image}
                            id={character.id}
                            name={character.name} />
                    );
                })}  
                </div>
                <Pub />
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
