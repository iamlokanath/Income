import React from "react";
import "./css/Navbar.css";
const Navbar = () => {
  return (
    <>
      {/* navigation starts here */}
          <div className="sidebar">
            <div className="nav">
              <div className="nav-container">
                <div className="nav-top">
                  <div className="logo">
                    <i className="fa-solid fa-dove"></i>
                  </div>
                  <div className="nav-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <div className="mid-nav">
                  <div className="nav-home">
                    <i className="fa-solid fa-house"></i>
                  </div>
                  <div className="nav-icon">
                    <i className="fa-solid fa-money-check"></i>
                  </div>
                  <div className="nav-icon">
                    <i className="fa-solid fa-list"></i>
                  </div>
                  <div className="nav-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
                <div className="bottom-nav">
                  <div className="nav-icon">
                    <i className="fa-solid fa-bell"></i>
                  </div>
                  <div className="nav-icon">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default Navbar;
