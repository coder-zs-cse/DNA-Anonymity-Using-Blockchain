// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import imgbg from "./Assets/genedx-bioinformatics-web.jpg";
function App() {
  return (
    <>
      <div className="App">
        <div className="App__Aside">
          <img src={imgbg} alt="" className="imgcontainer" />
        </div>
        <div className="App__Form">
          <div className="centre">
            <h1>User Portal</h1>
          </div>
          <div className="container">
            <Link to="/transaction">
            <button className="FormField__Button">Add New transaction</button>
            </Link>
          </div>
          <div className="container margin-bottom:50px ">
            <button className="FormField__Button ">Update Transaction</button>
          </div>
          <div className="container margin-bottom:50px">
            <button className="FormField__Button ">Display Blockchain</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
