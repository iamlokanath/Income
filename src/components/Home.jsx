import React from "react";
import "./css/Home.css";
import Logo from "../Image/ms-dhoni.webp";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-container">

          <div className="home-first">
            <div className="photo">
              <img src={Logo} alt="theLogo" />
            </div>
            <div className="photodes">
              <div className="hi">Hi Mike,</div>
              <div className="para">welcome back.</div>
            </div>
          </div>

          <div className="home-second">
            <div className="home-second-first">Today</div>
            <div className="home-second-second">
              <div className="home-second-second-first">19,892</div>
              <div className="home-second-second-second">Account balance</div>
            </div>
            <div className="home-second-third">
              <div className="home-second-third-first">4000</div>
              <div className="home-second-second-second">
                Year-to-date-contribution
              </div>
            </div>
            <div className="home-second-fourth">
              <div className="home-second-fourth-first">1,892</div>
              <div className="home-second-second-second">Total-interest</div>
            </div>
            <div className="home-second-fifth">
              <button>I want to</button>
            </div>
          </div>
          
          <div className="home-third">
            <div className="home-third-first">Recent Transation</div>
            <div className="home-third-second">
              <div className="home-third-second-first">20-08-07</div>
              <div className="home-third-second-second">
                Withdrawl transfer to Bank-XXX11
              </div>
            </div>
            <div className="home-third-third">
              <div className="home-third-second-first">20-08-07</div>
              <div className="home-third-second-second">
                Withdrawl transfer to Bank-XXX11
              </div>
            </div>
            <div className="home-third-fourth">
              <div className="home-third-second-first">20-08-07</div>
              <div className="home-third-second-second">
                Withdrawl transfer to Bank-XXX11
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
