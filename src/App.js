import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./components/Layout/Wrapper";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
