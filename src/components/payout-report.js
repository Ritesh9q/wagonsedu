import React, { useState } from "react";





function PayoutReport(){
    const [showModal, setShowModal] = useState(false);
    const [inputValue, setInputValue] = useState("");
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleButtonClick = () => {
      setShowModal(true);
    //   document.body.style.backgroundColor = 'gray';
    };
  
    const handleModalClose = () => {
      setShowModal(false);
    //   document.body.style.backgroundColor = 'white'; 
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log(`Input value is ${inputValue}`);
      handleModalClose();
    };
    return(
        <div>
           <div class="container">
        <div class="card mt-2">
        <div class="card-body d-flex justify-content-between">
        <h5 class="card-title">Payout Report</h5>
        <button class="btn btn-primary" onClick={handleButtonClick}>
        <i class="bi bi-plus-circle"></i>&nbsp;
           Request a new Withdrawal
        </button>
        </div>
        </div>
        <br/>

        <div class="row">
  <div class="col">
    <div class="card bg-danger text-white">
      <div class="card-body">
      Pending amount
      <h3> ₹2800</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card bg-success text-white">
      <div class="card-body">
      Total payout amount
      <h3> ₹84000</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card bg-info text-white">
      <div class="card-body">
      Requested withdrawal amount
      <h3> ₹4800</h3>
      </div>
    </div>
  </div>
</div>

{showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form onSubmit={handleFormSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Request a new withdrawal</h5>
                  <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="inputField" className="form-label">
                    Withdrawal amount
                    </label>
                    <input
                      type="text"
                      placeholder="Withdrawal amount"
                      className="form-control"
                      id="inputField"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Request
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}



<br/><br/>       
<div class="container">
<div class="row">
  <div class="col">
    <div class="input-group mb-3">
      <span class="input-group-text">Show</span>
      <select class="form-select-sm">
        <option selected>10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span class="input-group-text">entries</span>
    </div>
  </div>
  <div class="col">
    <div class="input-group mb-3">
      <span class="input-group-text">Search:</span>
      <input type="text" class="form-control" placeholder="Search..."/>
    </div>
  </div>
</div>
<div class="table-responsive">
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Payment Amount </th>
        <th>Payment Type</th>
        <th>Date Process</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>₹2800</td>
        <td>Razorpay</td>
        <td>7-Dec-2023</td>
      </tr> 
      <tr>
       <td>2</td>
        <td>₹2800</td>
        <td>Razorpay</td>
        <td>7-Dec-2023</td>
      </tr>
      <tr>
        <td>3</td>
        <td>₹2000</td>
        <td>Razorpay</td>
        <td>7-Dec-2023</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

         </div>


    </div>
    )
}

export default PayoutReport;