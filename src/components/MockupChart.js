import React, { useEffect } from 'react';
import { Chart } from 'react-chartjs-2';



const MockupChart = ({ chartData }) => {
  useEffect(() => {
    const data = {
        labels: [20, " ", 25, " ", 30, " ", 35, " ", 40, " ", 60, " ", 65],
        datasets: [
          {
            label: "Section 1",
            data: [60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
            backgroundColor: "rgba(8, 0, 163, 1)",
            borderColor: "rgba(8, 0, 163, 1)",
            borderWidth: 1,
          },
          {
            label: "Section 2",
            data: [60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
            backgroundColor: "rgba(73, 53, 255, 1)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Section 3",
            data: [60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
            backgroundColor: "rgba(133, 175, 255, 1)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        barPercentage: 0.6, // Adjust the bar width (0.6 = 60% of the available space)
        scales: {
          x: {
            type: "category", // Use 'category' scale for x-axis
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
            suggestedMax: 300, // Maximum value on the y-axis
            ticks: {
              callback: function (value, index, values) {
                return "$" + value;
              },
            },
          },
        },
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: "line",
                mode: "vertical",
                scaleID: "x",
                value: 2.5, // The index where you want to place the line (0-indexed)
                borderColor: "rgba(0, 0, 0, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5], // The array controls the pattern of dashes and gaps [dash, gap, dash, gap, ...]
                label: {
                  enabled: true,
                  content: "Dotted Line", // Label text for the line
                  position: "top",
                },
              },
            },
          },
        },
      };

    // Create the chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  return <canvas id="myChart" width="150" height="500"></canvas>;
};

export default MockupChart;
