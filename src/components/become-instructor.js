import { Link } from "react-router-dom";

function BecomeInstructor(){
 
    return(
        <div style={{backgroundColor:'#f1f7f8'}}>
          <div className="container"><br/>
          <div className="card border-0 radius-10 shadow-lg">
          <form className="p-5">

            <h5>INSTRUCTOR APPLICATION FORM</h5> <Link to="/instructor-dashboard">Dashboard</Link>

            <div class="alert alert-info mt-3" role="alert">
              <h5 className="alert-heading">Heads Up!</h5>
            Fill all the fields carefully and share if you want to share any document with us it will help us to evaluate you as an instructor.
            </div>

            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" />
    <div id="emailHelp" class="form-text">Your name is required.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Your email address is required.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <textarea  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
    <div id="emailHelp" class="form-text">Your Address is required.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Your phone number is required.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Any Message</label>
    <textarea  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
    <div id="emailHelp" class="form-text">If any message you want to share.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Document</label>
    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">If any document you want to share ( .doc, .docs, .pdf, .txt, .png, .jpg, jpeg ) Are accepted</div>
  </div>
   <br/>
  <center><button style={{backgroundColor:'#ec5252',color:'white'}} type="submit" class="btn">Apply</button></center>

</form>
</div>
</div>
<br/>
</div>
    )

}
export default BecomeInstructor;