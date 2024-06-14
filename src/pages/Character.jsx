import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Character.css";

function Character ({}) {
  const [starWarsCharacters, setStarWarsCharacters] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
      .then((result) => result.json())
      .then((result) => console.log(result) || setStarWarsCharacters(result));
    }, [])
  
    return (
        
        <div className="container">
        <img
          className="photoProfile"
          src={starWarsCharacters.image}
          alt="#"
        />
        <div className="detailsProfils">
          <div className="detailProfil">
            <ul>
              <li>{starWarsCharacters.name}</li>
              <li>Taille :{starWarsCharacters.height}m</li>
              <li>{starWarsCharacters.mass}kg</li>
            </ul>
          </div>
          <div className="detailProfil">
            <ul>
              <li>{starWarsCharacters.gender}</li>
              <li>{starWarsCharacters.homeworld}</li>
              <li>{starWarsCharacters.species}</li>
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
            <p className="p1">Like</p>
          </div>
          <Link to= "/">
          <div className="like">
            <img
              id="imgDislike"
              src="../src/assets/jabba-the-hutt_icon-icons.com_76950.svg"
              alt=""
            />
            <p className="p2">dislike</p>
          </div>
          </Link>
        </div>
        <button>Envoyer message</button>
      </div>
    )
}


const citations = [];
export default Character