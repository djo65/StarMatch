import React, { useState } from 'react';
import "./Pub.css"
const Pub = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleLightsaber = () => {
        setIsOn(prevIsOn => !prevIsOn);
    };

    const lightsaberStyle = {
        transform: isOn ? 'scale(1, 1)' : 'scale(0, 1)'
    };

    return (
        <div>
            <div className="lightsaber-example">
                <div className="cartoon-text">Agrandir la taille de ton sabre laser n'a jamais été aussi simple !!</div>
                <div className="lightsaber">
                    <div className="hilt" onClick={toggleLightsaber}>
                        <div className="switch"></div>
                    </div>
                    <div className="plasma vader" style={lightsaberStyle}></div>
                </div>
                <button className="lightsaber-button">Cliquer ici Salope !</button>
            </div>
        </div>
    );
};

export default Pub;
