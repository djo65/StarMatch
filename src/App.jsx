import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Page2 from "./pages/Page2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Page2 />

    </>
  );
}

export default App;
