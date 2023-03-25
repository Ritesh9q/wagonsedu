
function PayoutSettings(){

    return(
      <div style={{backgroundColor:'#EAEDED'}}>
        <div class="container">
            <div class="card"> 
            <div class="card-body d-flex justify-content-between">
            <h5 class="card-title">Setup Payment Information</h5>
          
            </div>
            </div>
            <br/>
        </div>

        <div class="container">
  <div class="row">
    <div class="col-7">
      <div class="card">
        <div class="card-body">
        <p class="fw-bold">SETUP PAYPAL SETTINGS</p>
          <form>
            <div class="mb-3">
              <p>Client id (Production)</p>
               
              <input type="text" class="form-control" id="input1" />
            </div>
            <div class="mb-3">
              <p>Secret key (Production)</p>
              <input type="text" class="form-control" id="input2" />
            </div>
            <button type="submit" class="btn btn-primary">Update Paypal Keys</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<br/>
<div class="container">
  <div class="row">
    <div class="col-7">
      <div class="card">
        <div class="card-body">
        <p class="fw-bold">SETUP STRIPE SETTINGS</p>
          <form>
            <div class="mb-3">
              <p>Live secret key</p>
               
              <input type="text" class="form-control" id="input1" />
            </div>
            <div class="mb-3">
              <p>Live public key</p>
              <input type="text" class="form-control" id="input2" />
            </div>
            <button type="submit" class="btn btn-primary">Update Stripe Keys</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<br/>

      </div>
    );
}
export default PayoutSettings;