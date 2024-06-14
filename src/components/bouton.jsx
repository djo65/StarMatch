import React from "react";
import "../components/bouton.css"

function Bouton() {
    return (
        <button class="btn" type="button">
  <strong>Envoi un Message</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
        </button>
 )
}

export default Bouton
