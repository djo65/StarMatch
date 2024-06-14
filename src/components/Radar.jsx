import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Radar.css";

function Radar() {
  const [clickedDot, setClickedDot] = useState(null);

  const handleClick = (id) => {
    setClickedDot(id);
  };

  return (
    <div className="radar">
      <div className="img-falcon-box">
        <img
          src="assets/MilleniumFalconSG.png"
          alt="MileniumF"
          className="radar__overlay"
        />
      </div>

      <Link
        to="/character/4"
        id="dot1"
        className="radar__dot"
        onClick={() => handleClick("dot1")}
      ></Link>
      <Link
        to="/character/22"
        id="dot2"
        className="radar__dot"
        onClick={() => handleClick("dot2")}
      ></Link>
      <Link
        to="/character/13"
        id="dot3"
        className="radar__dot"
        onClick={() => handleClick("dot3")}
      ></Link>
    </div>
  );
}

export default Radar;
