import headerimg from "../assets/images/header.jpg";
import {Link} from 'react-router-dom';

function OpenProgram(){
    return(
        <div style={{backgroundColor:'#f1f7f8'}}>
            <div class="header-container">
              <img style={{width:'100%'}} src={headerimg}/>
              <div class="centered-text">All courses / All category</div>
            </div>
            <br/>
            <div className="container">
             <div className="row">
               <div className="col-lg-3">
                  <div class="card  border-0 radius-10 shadow-lg">
                    <div  class="card-body">
                    <h5 class="card-title">Categories</h5>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="categories" id="flexRadioDefault1" checked/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            All Category 
                        </label>
                        <span style={{float:'right',fontWeight:'700'}} className="text-right">(107)</span>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="categories" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Open Programs
                        </label>
                        <span style={{float:'right',fontWeight:'700'}} className="text-right">(104)</span>
                        </div>
                        <ul style={{marginLeft:'15px'}} className="list-unstyled text-small">
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="categories" id="flexRadioDefault2" />
                                Feb 2023
                                <span style={{float:'right',fontWeight:'400'}} className="text-right">(17)</span>
                            </div>
                            </li>
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="categories" id="flexRadioDefault2" />
                                Jan 2023
                                <span style={{float:'right',fontWeight:'400'}} className="text-right">(15)</span>
                            </div>
                            </li>
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="categories" id="flexRadioDefault2" />
                                Dec 2022
                                <span style={{float:'right',fontWeight:'400'}} className="text-right">(15)</span>
                            </div>
                            </li>
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="categories" id="flexRadioDefault2" />
                                Nov 2022
                                <span style={{float:'right',fontWeight:'400'}} className="text-right">(15)</span>
                            </div>
                            </li>
                            
                          </ul>
                    </div>
                    </div>
                    
                    <div class="card mt-1  border-0 radius-10 shadow-lg">
                  
                    <div class="card-body">
                    <h5 class="card-title">Price</h5>
                    <ul  className="list-unstyled text-small">
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="price" id="flexRadioDefault2" checked/>
                                All
                            </div>
                            </li>
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="price" id="flexRadioDefault2" />
                                Free
                            </div>
                            </li>
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="price" id="flexRadioDefault2" />
                                Paid
                            </div>
                            </li>
                          </ul>
   
                    </div>
                    </div>

                    <div class="card mt-1  border-0 radius-10 shadow-lg">
                    <div class="card-body">
                    <h5 class="card-title">Level</h5>
                    <ul  className="list-unstyled text-small">
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="level" id="flexRadioDefault2" checked/>
                                All
                            </div>
                            </li>
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="level" id="flexRadioDefault2" />
                                Beginner
                            </div>
                            </li>
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="level" id="flexRadioDefault2" />
                                Intermediate
                            </div>
                            </li>
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="level" id="flexRadioDefault2" />
                                Advanced
                            </div>
                            </li>
                          </ul>
   
                    </div>
                    </div>

                    <div class="card mt-1  border-0 radius-10 shadow-lg">
                    <div class="card-body">
                    <h5 class="card-title">Language</h5>
                    <ul  className="list-unstyled text-small">
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="language" id="flexRadioDefault2" checked/>
                                All
                            </div>
                            </li>
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="language" id="flexRadioDefault2" />
                                English
                            </div>
                            </li>
                          </ul>
                    </div>
                    </div>

                    <div class="card mt-1 border-0 radius-10 shadow-lg">
                    <div class="card-body">
                    <h5 class="card-title">Ratings</h5>
                    <ul  className="list-unstyled text-small">
                            <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="rating" id="flexRadioDefault2" checked/>
                                All
                            </div>
                            </li>
                         <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="rating" id="flexRadioDefault2" />
                                <span style={{fontSize:'19px'}} class="ratings">
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star"></i>&nbsp;
                                </span>
                            </div>
                          </li>
                          <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="rating" id="flexRadioDefault2" />
                                <span style={{fontSize:'19px'}} class="ratings">
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star"></i>&nbsp;
                                </span>
                            </div>
                          </li>
                          <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="rating" id="flexRadioDefault2" />
                                <span style={{fontSize:'19px'}} class="ratings">
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star"></i>&nbsp;
                                </span>
                            </div>
                          </li>
                          <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="rating" id="flexRadioDefault2" />
                                <span style={{fontSize:'19px'}} class="ratings">
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star"></i>&nbsp;
                                </span>
                            </div>
                          </li>
                          <li>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="rating" id="flexRadioDefault2" />
                                <span style={{fontSize:'19px'}} class="ratings">
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                                </span>
                            </div>
                          </li>
                       </ul>
                    </div>
                    </div>

               </div>
               <div className="col-lg-8">
               <Link style={{textDecoration:'none',color:'black'}} to="/course-details">
               <div class="card  border-0 radius-10 shadow-lg"> 
                  
                  <div class="card-body">
                   <img style={{marginRight:'20px'}}  src="https://wagonseducation.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_102.jpg"  class="program-img rounded float-start img-fluid" alt="..." />
                     <div >
                      <h5  class="card-title">Credit Collection and Recovery Skills  </h5>
                      <p class="card-text">Credit Collection and Recovery Skills (6 hours)<br/>
                       Intermediate <br/><br/>
                       <img  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" width={40}/>

                        <span style={{fontSize:'15px',float:'right'}}><span style={{fontSize:'20px',fontWeight:'600'}}>₹7400</span>&nbsp;&nbsp;&nbsp;<strike>₹15999</strike>
                        <br/>
                        <div class="ratings">
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            5
                            {/* <i style={{color:'yellow'}} class="bi bi-star"></i> */}
                            
                        </div>
                        <div style={{fontSize:'14px',textAlign:'right',marginTop:'-17px'}}><br/>94 Ratings</div> 
                        </span>
                        
                        </p>
                     </div>
                    </div>
                  </div>
                  </Link>
                  <br/>
                  <div class="card  border-0 radius-10 shadow-lg">
                  <div class="card-body">
                   <img style={{marginRight:'20px'}} src="https://wagonseducation.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_103.jpg"  class="program-img rounded float-start img-fluid" alt="..." />
                     <div >
                      <h5  class="card-title">Finance For Non Finance Elementary </h5>
                      <p class="card-text">Finance For Non Finance Elementary (4 hours) <br/>
                       Beginner <br/><br/>
                       <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" width={40}/>
                        
                       <span style={{fontSize:'15px',float:'right'}}><span style={{fontSize:'20px',fontWeight:'600'}}>₹7400</span>&nbsp;&nbsp;&nbsp;<strike>₹15999</strike>
                        <br/>
                        <div class="ratings">
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            5
                            {/* <i style={{color:'yellow'}} class="bi bi-star"></i> */}
                            
                        </div>
                        <div style={{fontSize:'14px',textAlign:'right',marginTop:'-17px'}}><br/>94 Ratings</div> 
                        </span>
                        
                        </p>
                     </div>
                    </div>
                  </div>
                  <br/>
                  <div class="card  border-0 radius-10 shadow-lg">
                  <div class="card-body">
                   <img style={{marginRight:'20px'}} src="https://wagonseducation.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_103.jpg" class="program-img rounded float-start img-fluid" alt="..." />
                     <div >
                      <h5  class="card-title">Finance For Non Finance Elementary </h5>
                      <p class="card-text">Finance For Non Finance Elementary (4 hours) <br/>
                       Beginner <br/><br/>
                       <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" width={40}/>
                       <span style={{fontSize:'15px',float:'right'}}><span style={{fontSize:'20px',fontWeight:'600'}}>₹7400</span>&nbsp;&nbsp;&nbsp;<strike>₹15999</strike>
                        <br/>
                        <div class="ratings">
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            <i style={{color:'yellow'}} class="bi bi-star-fill"></i>&nbsp;
                            5
                            {/* <i style={{color:'yellow'}} class="bi bi-star"></i> */}
                            
                        </div>
                        <div style={{fontSize:'14px',textAlign:'right',marginTop:'-17px'}}><br/>94 Ratings</div> 
                        </span>
                        </p>
                     </div>
                    </div>
                  </div>
               </div>
              </div>
            </div>
            <br/><br/>
        </div>
    )
}

export default OpenProgram;