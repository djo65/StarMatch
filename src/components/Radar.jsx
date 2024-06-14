import React, { useState } from "react";
import "./Radar.css";

function Radar() {
  const [clickedDot, setClickedDot] = useState(null);

  const handleClick = (id) => {
    alert(`Div with id ${id} clicked!`);
    setClickedDot(id);
  };

  return (
    <>
      <div className="radar">
        <div className="img-falcon-box">
          <img
            src="assets\MilleniumFalconSG.png"
            alt="MileniumF"
            className="radar__overlay"
          />
        </div>

        <div
          id="dot1"
          className="radar__dot"
          onClick={() => handleClick("dot1")}
        ></div>
        <div
          id="dot2"
          className="radar__dot"
          onClick={() => handleClick("dot2")}
        ></div>
        <div
          id="dot3"
          className="radar__dot"
          onClick={() => handleClick("dot3")}
        ></div>
      </div>
    </>
  );
}

export default Radar;
