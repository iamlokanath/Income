import React from "react";
import Graph from "../Image/Screenshot 2023-07-20 180048.png";
import "./css/Income.css";

// import MockupChart from './MockupChart';

const Income = () => {


  // const chartData = {
  //   labels: [20, " ", 25, " ", 30, " ", 35, " ", 40, " ", 60, " ", 65],
  //   datasets: [
  //     {
  //       label: 'Section 1',
  //       data: [60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
  //       backgroundColor: 'rgba(8, 0, 163, 1)',
  //       borderColor: 'rgba(8, 0, 163, 1)',
  //       borderWidth: 1,
  //     },
  //     {
  //       label: 'Section 2',
  //       data: [60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
  //       backgroundColor: 'rgba(73, 53, 255, 1)',
  //       borderColor: 'rgba(54, 162, 235, 1)',
  //       borderWidth: 1,
  //     },
  //     {
  //       label: 'Section 3',
  //       data: [60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
  //       backgroundColor: 'rgba(133, 175, 255, 1)',
  //       borderColor: 'rgba(75, 192, 192, 1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  

  return (
    <>
      <div className="income">
        <div className="income-container">
          {/* first row starts here */}
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
                </div>
                <div className="income-first-container-second-first">
                  <div className="money">59%</div>
                  <div className="goal">Goal Acheivied</div>
                </div>
                <div className="income-first-container-second-first">
                  <div className="money">$300</div>
                  <div className="goal">Est. money Income</div>
                </div>
              </div>
            </div>
          </div>

          {/* second coloumn starts here */}
          <div className="income-second">
              <div className="income-second-container">
                <div className="income-second-container-second">
                  <img src={Graph} alt="graph" />

                </div>
              </div>
            </div>
          {/* Add the MockupChart component */}
      {/* <div className="income-second">
        <div className="income-second-container">
          <div className="income-second-container-second">
            <MockupChart chartData={chartData} />
          </div>
        </div>
      </div> */}

          {/* third row starts here */}
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
      </div>
    </>
  );
};

export default Income;
