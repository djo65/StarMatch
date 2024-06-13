import React from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import ProfileNav from './components/ProfileNav.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
        <ProfileNav />
      </header>
      <div className="app-body">
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;





