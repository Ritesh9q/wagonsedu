import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function SignUp(){
return(
    <div style={{backgroundColor:'#f1f7f8'}}>
    <div className="container">
        <center> 
            <br/>
            <h1>Sign Up</h1>
            <p>Sign up and start learning</p>  
        </center>  
       <br/>
         <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
                <img style={{marginLeft:'100px'}} src='https://wagonseducation.com/uploads/system/sign_up.png' width={400} />
            </div>
            <div className="col-lg-6 col-sm-12">
            <div class="card p-4 border-0 radius-10 shadow-lg">
                <div class="card-body">
                <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">First Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1"  /> 
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" /> 
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="text" class="form-control" id="exampleInputEmail1"  /> 
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control"  />
            </div>
            <div class="d-grid gap-2">
            <button type="submit" class="btn  btn-danger">Sign Up</button>
            </div>
            </form> 
            <br/>   
            <center>
            <p> Already have an accout? <b>Login</b></p>
            </center>

                </div>
            </div>
            
            </div>
        </div>
        <br/><br/>
    </div>
    </div>
)

}
export default SignUp;