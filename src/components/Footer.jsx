import React from 'react';
import './Footer.css';
import chewieSound from '../assets/chewie.mp3';
import r2d2Sound from '../assets/r2d2.mp3';
import saberSound from '../assets/saber.mp3';
import c3poSound from '../assets/c3po.mp3';

const Footer = () => {

  const playSound = (sound) => {
    new Audio(sound).play();
  };

  return (
    <div className="footer">
      <div className="footer-item" onClick={() => playSound(chewieSound)}>
        <h3>Profil</h3>
        <img src="src/assets/chewbacca.svg" className="bottom-left-logo" alt="Logo" />
      </div>
      <div className="footer-item" onClick={() => playSound(r2d2Sound)}>
        <h3>Message</h3>
        <img src="src/assets/r2d2.svg" className="bottom-secund-logo" alt="Logo" />
      </div>
      <div className="footer-item" onClick={() => playSound(saberSound)}>
        <h3>Match</h3>
        <img src="src/assets/ligthsaber.svg" className="bottom-third-logo" alt="Logo" />
      </div>
      <div className="footer-item" onClick={() => playSound(c3poSound)}>
        <h3>Parametres</h3>
        <img src="src/assets/c3p0.svg" className="bottom-fourth-logo" alt="Logo" />
      </div>
    </div>
  );
};

export default Footer;



