import React from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import ProfileNav from './components/ProfileNav.jsx';
import logo from './assets/chewbacca.svg';
import logo1 from './assets/r2d2.svg';
import logo2 from './assets/ligthsaber.svg';
import logo3 from './assets/c3p0.svg';

import './App.css';

const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <Header />
                <ProfileNav className="Starjout">
                    {/* Votre contenu ici */}
                </ProfileNav>
            </header>
            <div className="app-body">
                <Body />
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



