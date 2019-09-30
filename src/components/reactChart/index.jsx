import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./ReactChart.module.css";

class ReactChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["M0", "M50", "M100"],
        datasets: [
          {
            label: "Principle",
            data: [86, 67, 91],
            fill: false,
            borderColor: "#98B9AB",
          },
          {
            label: "Interest",
            data: [86, 67, 91],
            fill: false,
            borderColor: "#98B9AB",
          },
          {
            label: "Principle Balance",
            data: [1000, 67, 91],
            fill: false,
            borderColor: "#98B9AB",
          },
        ]
      },
      options: {
        //Customize chart options
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

export default ReactChart;