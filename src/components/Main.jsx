import React from "react";
import "./css/Main.css";
import "./css/Navbar.css";
import "./css/Home.css";
import "./css/Retirement.css";
import "./css/Income.css";
import Logo from "../Image/ms-dhoni.webp";
import Graph from "../Image/Screenshot 2023-07-20 180048.png";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-container">
          <div className="sidebar">
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
                    <i className="fa-solid fa-bell"></i>
                  </div>
                  <div className="logout">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* first coloumn starts */}
          <div className="second-container">
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
                  <div className="home-second-second-second">
                    Account balance
                  </div>
                </div>
                <div className="home-second-third">
                  <div className="home-second-third-first">4000</div>
                  <div className="home-second-second-second">
                    Year-to-date-contribution
                  </div>
                </div>
                <div className="home-second-fourth">
                  <div className="home-second-fourth-first">1,892</div>
                  <div className="home-second-second-second">
                    Total-interest
                  </div>
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
                  <hr />
                </div>
                <div className="home-third-third">
                  <div className="home-third-second-first">20-08-07</div>
                  <div className="home-third-second-second">
                    Withdrawl transfer to Bank-XXX11
                  </div>
                  <hr />
                </div>
                <div className="home-third-fourth">
                  <div className="home-third-second-first">20-08-07</div>
                  <div className="home-third-second-second">
                    Withdrawl transfer to Bank-XXX11
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          
          {/* second container starts here */}
          <div className="income">
            <div className="income-first">
              <div className="income-first-container">
                <div className="income-first-container-first">
                  <div className="retirement-income">Retirement Income</div>
                  <div className="starting-year">Starting Year 2056</div>
                </div>

                <div className="income-first-container-second">
                  <div className="income-first-container-second-first">
                    <div className="money">$300,000</div>
                    <div className="goal">My Goal</div>
                    <div className="line">
                      <hr />
                    </div>
                  </div>
                  <div className="income-first-container-second-second">
                    <div className="money">59%</div>
                    <div className="goal">Goal Acheivied</div>
                    <div className="line">
                      <hr />
                    </div>
                  </div>
                  <div className="income-first-container-second-third">
                    <div className="money">$300</div>
                    <div className="goal">Est. money Income</div>
                    <div className="line">
                      <hr />
                    </div>
                    {/* <hr /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="income-second">
              <div className="income-second-container">
                <div className="income-second-container-second">
                  <img src={Graph} alt="graph" />

                </div>
              </div>
            </div>

            <div className="income-third">
              <div className="income-third-container">
                <div className="income-third-container-first">
                  <div className="income-third-container-first-heading">
                    How do I compare my peers?
                  </div>
                  <div className="income-third-container-first-para">
                    These numbrs represent current goal acheiviement
                  </div>
                </div>

                <div className="income-third-container-second">
                  <div className="income-third-container-second-left">
                    <div className="income-third-container-second-left-first">
                      <div className="age-limit">Age</div>
                      <div className="limit-desc">Under 30 </div>
                    </div>
                    <div className="income-third-container-second-left-first middle">
                      <div className="age-limit">Age</div>
                      <div className="limit-desc">Under 30 </div>
                    </div>

                    <div className="income-third-container-second-left-first">
                      <div className="age-limit">Age</div>
                      <div className="limit-desc">Under 30 </div>
                    </div>
                  </div>
                  <div className="income-third-container-second-right">
                    <div className="avg">
                      <div className="avg-perc">78%</div>
                      <div className="avg-text">Average</div>
                    </div>
                    <div className="avg">
                      <div className="avg-perc">95%</div>
                      <div className="avg-text">Top</div>
                    </div>
                    <div className="avg">
                      <div className="avg-perc">59%</div>
                      <div className="avg-text">Me</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* third column start */}
          <div className="third">
            <div className="third-container">
              <div className="third-first">
                <div className="third-first-container">
                  <div className="third-first-first">
                    <div className="third-first-first-first">
                      Retirement Strategy
                    </div>
                    <div className="third-first-first-second">
                      <div className="contribution">
                        <div className="employement-first">
                          Employee Contribution
                        </div>
                        <div className="employemenet-second">
                          <div>
                            <input type="range" />
                          </div>
                          <div className="percentage">12%</div>
                        </div>
                      </div>
                      <div className="contribution">
                        <div className="employement-first">Retirement Age</div>
                        <div className="employemenet-second">
                          <div>
                            <input type="range" />
                          </div>
                          <div className="percentage">65</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="third-first-second">
                    <div className="employe">
                      <div className="employer-contribution">
                        Employer Contribution
                      </div>
                      <div className="employer-percentage">8.4%</div>
                    </div>
                    <div className="employe">
                      <div className="employer-contribution">Interest Rate</div>
                      <div className="employer-percentage">5%</div>
                    </div>
                  </div>
                  <div className="third-first-third">
                    <button>Update</button>
                  </div>
                  <div className="third-first-fourth">view help docs</div>
                </div>
              </div>
              <div className="third-second">
                <div className="third-second-first">
                  Are you considering a <br /> <b> House Advance </b>?
                </div>

                <div className="third-second-second">
                  Limited time reduced interset
                </div>
                <div className="third-second-third">Learn more</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Main;
