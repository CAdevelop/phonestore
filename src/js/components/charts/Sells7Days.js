import React from "react";
import { Line } from "react-chartjs-2";

const state = {
  labels: [
    "13/06/2021",
    "14/06/2021",
    "15/06/2021",
    "16/06/2021",
    "17/06/2021",
  ],
  datasets: [
    {
      label: "Ventas",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#6B46C1",
      borderColor: "#6B46C1",
      borderWidth: 2,
      data: [22345, 12452, 24343, 5775, 4567],
      
    },
  ],
};

const Sells7Days = () => {
  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default Sells7Days;
