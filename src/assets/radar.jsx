import { useState } from "react";
import "./radar.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="radar">
        <div class="radar__dot"></div>
        <div class="radar__dot"></div>
        <div class="radar__dot"></div>
      </div>
    </>
  );
}

export default App;
