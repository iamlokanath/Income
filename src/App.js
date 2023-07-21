import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Main from './components/Main';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Retirement from "./components/Retirement";
import Income from "./components/Income";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="total-page">
          <div className="total-page-container">

            <div className="total-page-nav">
              <Navbar />
            </div>

            <div className="total-page-home">
              <Home />
              <Income />
              <Retirement />
            </div>

          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
