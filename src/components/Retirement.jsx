import React from 'react'
import "./css/Retirement.css";

const Retirement = () => {
  return (
    <>
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
    </>
  )
}

export default Retirement
