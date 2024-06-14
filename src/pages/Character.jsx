import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Character.css";
import Bouton from"../components/bouton";

function Character() {
  const [starWarsCharacters, setStarWarsCharacters] = useState({});
  const [randomCitation, setRandomCitation] = useState("");
  const { id } = useParams();

  const citations = [
    "La force est puissante dans ma famille.",
    "Que la force soit avec toi.",
    "Je suis ton père.",
    "C’est un piège!",
    "J'ai un mauvais pressentiment.",
  ];

  useEffect(() => {
    fetch(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        setStarWarsCharacters(result);
        selectRandomCitation();
      });
  }, [id]);

  const selectRandomCitation = () => {
    const randomIndex = Math.floor(Math.random() * citations.length);
    setRandomCitation(citations[randomIndex]);
  };

  return (
    <div className="container">
      <img
        className="photoProfile"
        src={starWarsCharacters.image}
        alt={starWarsCharacters.name}
      />
      <div className="detailsProfils">
        <img src="../assets/robot2.jpg" alt="" />
        <div className="detailProfil1">
          <ul>
            <li>{starWarsCharacters.name}</li>
            <li>Taille : {starWarsCharacters.height}m</li>
            <li>{starWarsCharacters.mass}kg</li>
            <li>{starWarsCharacters.species}</li>
            <li>{starWarsCharacters.homeworld}</li>
            <li>{starWarsCharacters.gender}</li>
          </ul>
        </div>
        <div className="detailProfil2">
          <p>{randomCitation}</p>
        </div>
      </div>

      <div className="likes">
        <div className="like1">
          <img
            id="imgLike"
            src="../src/assets/ewok_icon-icons.com_76943.svg"
            alt="Like"
          />
          <p className="p1">Like</p>
        </div>
        <Link to="/">
          <div className="like2">
            <img
              id="imgDislike"
              src="../src/assets/jabba-the-hutt_icon-icons.com_76950.svg"
              alt="Dislike"
            />
            <p className="p2">Dislike</p>
          </div>
        </Link>
      </div>
      <Bouton />
    </div>
  );
}

export default Character;
