import React from "react";
import AboutMe from "./components/AboutMe";
import MyButton from "./components/MyButton";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container profile">
        <AboutMe />
        <MyButton />
      </div>
    </div>
  );
}

export default App;
