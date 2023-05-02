import React from "react";
import { Scatter } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "Scatter Dataset",
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 10 },
        { x: 20, y: 30 },
        { x: 25, y: 15 },
        { x: 30, y: 25 },
      ],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        type: "linear",
        position: "bottom",
      },
    ],
  },
};

const ScatterPlot = () => {
  return <Scatter data={data} options={options} />;
};

export default ScatterPlot;
