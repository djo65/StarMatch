import { useEffect ,useState  } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Character from "./pages/Character";


function App() {
  const [starWarsCharacters, setStarWarsCharacters] = useState([]);
  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((result) => result.json())
      .then((result) => setStarWarsCharacters(result));
  }, []);

  return (
    <>
    <div>
      {starWarsCharacters.length > 0 ? (
        <>
          <p>{starWarsCharacters[4].height}</p>
          <Link to="/Character">ceci est lien</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
}

export default App;
