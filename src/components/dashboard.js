import React, { useState } from 'react';
import CourseManager from './course-manager';
import LinearChart from './linear-chart';
import SalesReport from './sales-report';
import PayoutReport from './payout-report';
import PayoutSettings from './payout-settings';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{backgroundColor:'#f1f7f8'}}>
        <br/>
    <div className="card border-0 radius-10 shadow-lg">
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-light p-4">
        <img className="rounded mb-2" src="https://wagonseducation.com/uploads/user_image/placeholder.png" width={100}/>
           <h5 style={{marginLeft:'10px'}}>Joh Doe</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} href="#" onClick={() => handleTabClick('dashboard')}>Dashboard</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'users' ? 'active' : ''}`} href="#" onClick={() => handleTabClick('users')}>Course Manager</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'sales-report' ? 'active' : ''}`} href="#" onClick={() => handleTabClick('sales-report')}>Sales Report</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'payout-report' ? 'active' : ''}`} href="#" onClick={() => handleTabClick('payout-report')}>Payout Report</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'payout-settings' ? 'active' : ''}`} href="#" onClick={() => handleTabClick('payout-settings')}>Payout Settings</a>
            </li>
          </ul>
        </div>
        <div className="col-10">
          {activeTab === 'dashboard' && (
            <>
            <h4>INSTRUCTOR REVENUE</h4>
              <LinearChart/>
            </>
          )}
          {activeTab === 'users' && (
            <>
             <CourseManager/>
            </>
          )}
          {activeTab === 'sales-report' && (
            <>
             <SalesReport/>
            </>
          )}
           {activeTab === 'payout-report' && (
            <>
             <PayoutReport/>
            </>
          )}
          {activeTab === 'payout-settings' && (
            <>
             <PayoutSettings/>
            </>
          )}
        </div>
      </div>
    </div>
    </div>

   

    <br/><br/>
    </div>
  );
}

export default Dashboard;
