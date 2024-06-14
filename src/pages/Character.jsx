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
    "Avant j'étais aventurier, et puis... j'ai pris un coup de blast dans le genoux.",
    "Ma passion c'est de joueur à des FPS avec les Stomtrooper !",
    "J'ai pas la force en moi, mais je sais courir vite si t'es parents sont pas chez toi ce soir !",
    "J'étais Hand Solo jusque là, mais peut être que nous pourrions Chewbaccer ensemble ?",
    "Je ne suis pas la personne la plus chaude de la galaxy, je n'en reste pas moins une sacrée chose !",
    "Ma passion première ? La cantina, j'aime boire du swebelub jusqu'à plus soif",
    "Je Buzz l'éclaire et je viens en paix..",
    "RHHRRRRRROOOAW",
    "Mon pote droide me demande si j'ai de l'huile pour le remplir, mais je suis pas sur que ce soit la même huile à laquel je pense, c'est normal d'après vous ?",
    "J'ai déjà vu la même de mon pote en string sur tatooine, maintenant j'ai un beau fils",
    "Si vous rejoigner mon club de lycée 'Le coté obscure', on vous offre des cookies",
    "Je cherche mon père sur cette application, un grand monsieur, un peu impulsif et des tendance de démence",
    "Je chasse le Veermok à mes heures perdu",
    "Une fois j'ai essayer de dresser un Rancor... il était bébé et il m'a cassé le bras",
    "Je cherche des gens proches de ma planète parce que j'ai pas le permis",
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
