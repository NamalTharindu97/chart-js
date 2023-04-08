import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "./piechart.css";
import Chart from "chart.js/auto";

export default function PieChart() {
  const [data, setData] = useState({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="chart">
      <div className="piechart">
        <Pie data={data} />
      </div>
    </div>
  );
}
