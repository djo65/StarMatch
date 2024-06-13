import { useEffect, useState } from "react";

function Page2 ({name}) {
  const [starWarsCharacters, setStarWarsCharacters] = useState([]);

  useEffect(() => {
    fetch('https://miadil.github.io/starwars-api/api/all.json').then((result) => result.json()).then((result) => console.log(result) || setStarWarsCharacters(result));[]})
  
    return (
       
        <div className="container">
           {starWarsCharacters.map(character => {
          return <div>{character.name}</div>
        })}
        <img
          className="photoProfile"
          src="https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg"
          alt="#"
        />
        <div className="detailsProfils">
          <div className="detailProfil">
            <ul>
              <li>nom</li>
              <li>taille</li>
              <li>{name}</li>
            </ul>
          </div>
          <div className="detailProfil">
            <ul>
              <li>genre</li>
              <li>planete</li>
              <li>espece</li>
            </ul>
          </div>
        </div>

        <div className="likes">
          <div className="like">
            <img
              id="imgLike"
              src="../src/assets/ewok_icon-icons.com_76943.svg"
              alt=""
            />
            <p>Like</p>
          </div>
          <div className="like">
            <img
              id="imgDislike"
              src="../src/assets/jabba-the-hutt_icon-icons.com_76950.svg"
              alt=""
            />
            <p>dislike</p>
          </div>
        </div>
        <button>Envoyer message</button>
      </div>
    )
}


const citations = [];
export default Page2