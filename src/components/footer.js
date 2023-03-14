
function Footer(){

    return(
    <div style={{backgroundColor:'#EAECEE'}}>
      <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <br/>
                <img src="https://wagonseducation.com/uploads/system/c3aba71d83a384212ca58138b5443677.png" width={200} />
                <br/><br/>
                <p style={{fontWeight:'500'}}>A – 7 & 8, 4th Floor, Srushti Apartments,Opp Union Bank Of INDIA, Baner Road, Pune – 411007 Maharashtra, India.</p>
               
                <i style={{fontSize:'30px',margin:'5px',color:'red'}} class="bi bi-facebook"></i>
                <i style={{fontSize:'30px',margin:'5px',color:'red'}} class="bi bi-twitter"></i>
                <i style={{fontSize:'30px',margin:'5px',color:'red'}} class="bi bi-linkedin"></i>
           </div>

            <div className="col-lg-2">
               <br/>
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li>Company Overview</li>
                    <li>Management Team</li>
                    <li>Advisory Board</li>
                    <li>Trainers</li>
                </ul>
            </div>
            <div className="col-lg-2">
            <br/>
                <h5>Products</h5>
                <ul className="list-unstyled text-small">
                    <li>Learning Management System</li>
                    <li>Learning Experience Platform</li>
                    <li>School ERP</li>
                    
                </ul>
            </div>
            <div className="col-lg-2">
            <br/>
                <h5>Industry Solution</h5>
                <ul className="list-unstyled text-small">
                    <li>Automotive</li>
                    <li>Banking and Financial</li>
                    <li>IT & ITES</li>
                    <li>Pharma & Healthcare</li>
                </ul>
             </div> 
             <div className="col-lg-2">
            <br/>
                <h5>Help</h5>
                <ul className="list-unstyled text-small">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
             </div> 
        </div>
       
      </div>
      <hr/>
       <div className="container"> &copy; 2022 Wagons. All rights reserved.</div>
       <br/>
    </div>
    )

}
export default Footer;