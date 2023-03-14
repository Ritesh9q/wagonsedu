function ContactUs(){

    return(
        <div style={{backgroundColor:'#f1f7f8'}}>

        <div class="course-header-area">
          <div class="container">
            <div class="row align-items-end">
              <div class="col-lg-9">
                <div class="course-header-wrap">
                  <h1 class="title">Home / Contact Us</h1>
                </div>
              </div>
            </div>                          
          </div>
        </div>

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
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1"  /> 
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" /> 
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Phone</label>
                <input type="number" class="form-control" id="exampleInputEmail1"  /> 
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Message</label>
                <textarea class="form-control"></textarea>
            </div>
            <div class="d-grid gap-2">
            <button type="submit" class="btn  btn-danger">Contact Us</button>
            </div>
            </form> 
            <br/>   
          

                </div>
            </div>
            
            </div>
        </div>
        <br/><br/>

        <div class="row">
            <div class="col" style={{padding: '35px'}}>
                <p><b>Mobile:</b> 8149006055<br/><b>Email:</b>
                 certification@wagonseducation.com<br/>
                 <b>India</b><br/>A – 7 & 8, 4th Floor, Srushti Apartments,Opp Union Bank Of INDIA, Baner Road, Pune – 411007 Maharashtra, India.<br/>
                 <b>Canada</b><br/>2560 Matheson Blvd. East, Suites 217, 218 & 219, Mississauga. Canada<br/><b>Dubai</b>
                 <br/>604, 6th Floor, Bay Square, Building No. 13, Business Bay, Dubai, UAE
                 </p>      
        </div>
        </div>
    </div>





        </div>
    )
}
export default ContactUs;