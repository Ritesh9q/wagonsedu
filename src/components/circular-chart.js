import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

function CircularChart() {
  const [data, setData] = useState({
    labels: ['Active Courses', 'Pending Courses'],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  });

  const options = {
    cutout: '90%',
  };

  return (
    <div style={{width:'40%',float:'center'}}>
      <h4>COURSE OVERVIEW</h4>
     <center><Doughnut data={data} options={options} /></center>
    </div>
  );
}

export default CircularChart;
