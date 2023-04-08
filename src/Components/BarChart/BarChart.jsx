import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };
  return (
    <div className="position-class-bar">
      <div className="class-bar">
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: "Sales by Month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  );
}
