import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProfileNav from './components/ProfileNav.jsx';
import Radar from "./components/Radar";
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

  const getRandomElements = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const filteredCharacters = getRandomElements(starWarsCharacters, 3);

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
           
        </div>
    );
};
export default App;
