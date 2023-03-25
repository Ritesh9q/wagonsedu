
import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import CircularChart from "./circular-chart";


const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
      <br/>
      <div class="container">
  <div class="row">
    <div class="col-md-3">
      <div class="text-center border">
        <i class="bi bi-person fs-1"></i>
        <h3>10,000</h3>
        <p class="text-muted font-15 mb-0">Number of courses</p>
      </div>
    </div>
    <div class="col-md-3">
      <div class="text-center border">
        <i class="bi bi-briefcase fs-1"></i>
        <h3>5,000</h3>
        <p class="text-muted font-15 mb-0">Number of enrolment</p>
      </div>
    </div>
    <div class="col-md-3">
      <div class="text-center border">
        <i class="bi bi-globe fs-1"></i>
        <h3>₹50</h3>
        <p class="text-muted font-15 mb-0">Pending Balance</p>
      </div>
    </div>
    <div class="col-md-3">
      <div class="text-center border">
        <i class="bi bi-book fs-1"></i>
        <h3>₹1,000</h3>
        <p class="text-muted font-15 mb-0">Requested Withdrawal amaount</p>
      </div>
    </div>
  </div>
</div>
<br/>
<CircularChart/>
    </div>
    
  );
};

export default LineChart;