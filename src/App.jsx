import { useState } from "react";
import UseContextHook from "./UseContextHook/UseContextHook";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="App">This is App.js file.</h1>
      <UseContextHook />
    </>
  );
}

export default App;
