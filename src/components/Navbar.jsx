import React from "react";
import "./css/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <div className="nav-top">
            <div className="logo">
              <i className="fa-solid fa-dove"></i>
            </div>
            <div className="searc">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="mid-nav">
            <div className="home">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="check">
              <i className="fa-solid fa-money-check"></i>
            </div>
            <div className="list">
              <i className="fa-solid fa-list"></i>
            </div>
            <div className="user">
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
          <div className="bottom-nav">
            <div className="notification">
              <i className="fa-regular fa-bell"></i>
            </div>
            <div className="logout">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Navbar;
