import { Link } from "react-router-dom";
function SubPage(){
    return(
    <div style={{backgroundColor:'#f1f7f8'}}>

<div class="course-header-area">
  <div class="container">
    <div class="row align-items-end">
      <div class="col-lg-9">
        <div class="course-header-wrap">
          <h1 class="title">Sales Skills Journey</h1>
        </div>
      </div>
      <div class="col-lg-3 col-sm-12"> 
            <Link to="/contact-us"><button class="btn " style={{marginLeft:'20px',color:'white',backgroundColor:'#ec5252',fontWeight:'400',fontSize:'15px'}} >Register Now</button></Link>
           <Link to="/corporate-training-solutions"><button class="btn " style={{color:'white',backgroundColor:'#ec5252',float:'right'}} onclick="javascript:window.history.back(-1);return false;">Go Back</button></Link>
      </div>
    </div>                           
  </div>
</div>

<div class="course-content-area ">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 order-last order-lg-first radius-10 mt-4 bg-white p-30-40 border-0 radius-10 shadow-lg">

        <div class="description-box view-more-parent ">
         
          <div class="description-title">Objective</div>
          <div class="description-content-wrap">
            <div class="description-content">
              This upskilling Sales program will enable participants to build on new age skills for acquiring new clients with conviction and assertiveness. They will learn to manage their existing client's expectations by understanding stated and unstated needs, through powerful probing techniques, amongst others.            </div>
          </div>
        </div>

        <h4 class="py-3">What will you/your team member learn</h4>
        <div class="what-you-get-box border-0 radius-10 shadow-lg">
          <ul class="what-you-get__items">
            <li>8Cs Of Effective Communication</li>
<li>AIDA Model</li>
<li>Sales Process ODPEC</li>
<li>Objection Handling</li>
<li>Negotiation And Bargaining Methods</li>
<li>Art Of Probing & Story Telling</li>
<li>Lead Management</li>          </ul>
        </div>
        <br/>
        <h4 class="py-3">Who should enrol</h4>
        <div class="what-you-get-box border-0 radius-10 shadow-lg">
          <ul class="what-you-get__items">
            <li>Sales Professionals Across Industries</li>
<li>Officers & Executives Graduates & Postgraduates Looking To Increase Their Sales Acumen</li>          </ul>
	</div>
                
    <br/>
      </div>
      

    
        {/* <div class="course-sidebar natural">
          <div class="course-sidebar-text-box">
            <div class="buy-btns">
                <a href="javascript:;" class="btn btn-buy-now">Will be back soon</a>
            </div>
          </div>
        </div> */}
   
   
    </div>
  
  </div>

</div>
<br/>
    </div>
    )
}
export default SubPage;