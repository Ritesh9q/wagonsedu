import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateFilter() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    setStartDate(yesterday);
    setEndDate(yesterday);
  };

  const handleLast7Days = () => {
    const last7DaysEnd = new Date();
    const last7DaysStart = new Date();
    last7DaysStart.setDate(last7DaysStart.getDate() - 6);
    setStartDate(last7DaysStart);
    setEndDate(last7DaysEnd);
  };

  const handleLast30Days = () => {
    const last30DaysEnd = new Date();
    const last30DaysStart = new Date();
    last30DaysStart.setDate(last30DaysStart.getDate() - 29);
    setStartDate(last30DaysStart);
    setEndDate(last30DaysEnd);
  };

  const handleThisMonth = () => {
    const thisMonthEnd = new Date();
    const thisMonthStart = new Date(thisMonthEnd.getFullYear(), thisMonthEnd.getMonth(), 1);
    setStartDate(thisMonthStart);
    setEndDate(thisMonthEnd);
  };

  const handleLastMonth = () => {
    const lastMonthEnd = new Date();
    lastMonthEnd.setMonth(lastMonthEnd.getMonth() - 1);
    const lastMonthStart = new Date(lastMonthEnd.getFullYear(), lastMonthEnd.getMonth(), 1);
    setStartDate(lastMonthStart);
    setEndDate(lastMonthEnd);
  };

  const handleCustomRange = () => {
    // Implement your custom range logic here
  };

  const handleFilter = () => {
    // Implement your filter logic here, using the startDate and endDate states
    // In this example, we just set some dummy data
    setTableData([
      { date: '2022-03-01', value: 10 },
      { date: '2022-03-02', value: 20 },
      { date: '2022-03-03', value: 15 },
      { date: '2022-03-04', value: 25 },
      { date: '2022-03-05', value: 30 },
      { date: '2022-03-06', value: 10 },
      { date: '2022-03-07', value: 20 },
      { date: '2022-03-08', value: 15 },
      { date: '2022-03-09', value: 25 },
      { date: '2022-03-10', value: 30 },
      { date: '2022-03-11', value: 10 },
      { date: '2022-03-12', value: 20 },
      { date: '2022-03-13', value: 15 },
      { date: '2022-03-14', value: 25 },
      { date: '2022-03-15', value: 30 },
      { date: '2022-03-16', value: 10 },
      { date: '2022-03-17', value: 20 },
      { date: '2022-03-18', value: 15 },
      { date: '2022-03-19', value: 25 },
    ]);
  };

  return (
    <div className='container'>
    <div className='row'>
      <div className='col'>
    
    <div className="date-filter">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dateFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Select Date Range
        </button>
        <ul className="dropdown-menu" aria-labelledby="dateFilterDropdown">
          <li><button className="dropdown-item" onClick={handleYesterday}>Yesterday</button></li>
          <li><button className="dropdown-item" onClick={handleLast7Days}>Last 7 Days</button></li>
          <li><button className="dropdown-item" onClick={handleLast30Days}>Last 30 Days</button></li>
          <li><button className="dropdown-item" onClick={handleThisMonth}>This Month</button></li>
          <li><button className="dropdown-item" onClick={handleLastMonth}>Last Month</button></li>
          <li><button className="dropdown-item" onClick={handleCustomRange}>Custom Range</button></li>
        </ul>
      </div>
      
      <div className="date-picker">
        
        <DatePicker selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
            />
            <DatePicker selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="End Date"
            />
          </div>
       

          </div>
          </div>
    
      <div className='col'>
      <button className="btn btn-primary filter-btn" onClick={handleFilter}>Filter</button>
      </div>
          {/* <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
        </div>
);
}

export default DateFilter;        
