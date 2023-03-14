import {Link} from 'react-router-dom';

function LatestCourse(){
    return(
    <div className="container">
        <br/>
        <h3>Latest Courses</h3>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
        <Link style={{ textDecoration: 'none', color:'black' }} to="/course-details">
        <div class="card border-0 radius-10 shadow-lg">
            <img src="https://wagonseducation.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_102.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">Credit Collection and Recovery Skills</p>
            <div class="ratings">
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                (5)
                {/* <i style={{color:'yellow'}} class="bi bi-star"></i> */}
                &nbsp;<span style={{fontSize:'13px'}}>(94 Reviews)</span>
            </div>
            
            </div>
            <div class="card-footer"> 
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" width={40}/>
            <span style={{float:'right'}}><strike>₹15999</strike> &nbsp;<b>₹7400</b></span>
            </div>
        </div>
         </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">

        <div class="card border-0 radius-10 shadow-lg">
            <img src="https://wagonseducation.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_103.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">Finance For Non Finance Elementary</p>
            <div class="ratings">
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                (5)
                {/* <i style={{color:'yellow'}} class="bi bi-star"></i> */}
                &nbsp;<span style={{fontSize:'13px'}}>(94 Reviews)</span>
            </div>
            
            </div>
            <div class="card-footer"> 
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" width={40}/>
            <span style={{float:'right'}}><strike>₹15999</strike> &nbsp;<b>₹7400</b></span>
            </div>
        </div>
            
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
  
        <div class="card border-0 radius-10 shadow-lg">
            <img src="https://wagonseducation.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_104.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">Fintech Payment Focus</p>
            <div class="ratings">
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                (5)
                {/* <i style={{color:'yellow'}} class="bi bi-star"></i> */}
                &nbsp;<span style={{fontSize:'13px'}}>(94 Reviews)</span>
            </div>
            
            </div>
            <div class="card-footer"> 
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" width={40}/>
            <span style={{float:'right'}}><strike>₹15999</strike> &nbsp;<b>₹7400</b></span>
            </div>
        </div>
            
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">

        <div class="card border-0 radius-10 shadow-lg">
            <img src="https://wagonseducation.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_105.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">Foreign Exchange Risk Management</p>
            <div class="ratings">
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                (5)
                {/* <i style={{color:'yellow'}} class="bi bi-star"></i> */}
                &nbsp;<span style={{fontSize:'13px'}}>(94 Reviews)</span>
            </div>
            
            </div>
            <div class="card-footer"> 
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" width={40}/>
            <span style={{float:'right'}}><strike>₹15999</strike> &nbsp;<b>₹7400</b></span>
            </div>
        </div>
            
        </div>
      </div>
    </div>

    )

}
export default LatestCourse;