import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item">
        <h3>Profil</h3>
        <img src="src\assets\chewbacca.svg" className="bottom-left-logo" alt="Logo" />
      </div>
      <div className="footer-item">
        <h3>Message</h3>
        <img src="src\assets\r2d2.svg" className="bottom-secund-logo" alt="Logo" />
      </div>
      <div className="footer-item">
        <h3>Match</h3>
        <img src="src\assets\ligthsaber.svg" className="bottom-third-logo" alt="Logo" />
      </div>
      <div className="footer-item">
        <h3>Parametre</h3>
        <img src="src\assets\c3p0.svg" className="bottom-fourth-logo" alt="Logo" /> 
            
            
            
        
      </div>
    </div>
  );
};

export default Footer;



