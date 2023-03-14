import { Link } from "react-router-dom";
function UpcomingPrograms(){

    return(
        <div style={{backgroundColor:'#f1f7f8'}}>

         <div class="course-header-area">
          <div class="container">
            <div class="row align-items-end">
              <div class="col-lg-9">
                <div class="course-header-wrap">
                  <h1 class="title">Home / Certifications</h1>
                </div>
              </div>
            </div>                          
          </div>
        </div> 

    <div class="category-course-list-area">
    <div class="container">
        <div class="row">
            <div class="col">
                <div id="upcoming" class="row">
              
              <div class="col-4">
                  <h4>Upcoming Certifications</h4>
              </div>
              

              <div class="col-8 d-flex justify-content-end">


            <Link to="/contact-us"><button class="btn " style={{marginLeft:'20px',color:'white',backgroundColor:'#ec5252',fontWeight:'400',fontSize:'15px'}} >Contact Us</button></Link> &nbsp;&nbsp;
           <Link to="/"><button class="btn " style={{color:'white',backgroundColor:'#ec5252',float:'right'}} onclick="javascript:window.history.back(-1);return false;">Go Back</button></Link>



              </div>

      </div>
              <div class="what-you-get-box border-0 radius-10 shadow-lg mt-1">
                <ul class="what-you-get__items">
                <li><a  style={{color:'blue'}}>A Treatise on Contemporary Credit Life Cycle</a></li>
                <li><a  style={{color:'blue'}}> A Comprehensive Course on New Age Insurance Management</a></li>
                <li>A comprehensive course on Capital Market and Wealth Management</li>
                <li><a style={{color:'blue'}}>A Treatise on BFSI Digital transformation with Financial technology</a></li>
                </ul>
              </div>            </div>
        </div>
    </div>
</div>
        </div>
    )


}
export default UpcomingPrograms;