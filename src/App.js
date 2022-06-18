import React from "react";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import "./App.css";
import styled from "styled-components";

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Home />
    </div>
  );
}

export default App;
