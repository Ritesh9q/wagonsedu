
function Whishlists(){

    return(
        <div>
            <br/>
            <div className="row">
                <div className="col-lg-9">

                </div>
                <div className="col-lg-3">
                <form class="d-flex">
                    <input class="form-control" type="search" placeholder="Search my courses" aria-label="Search"/>
                    <button class="btn btn-outline-danger" type="submit">
                        <i class="bi bi-search"></i>
                    </button>
                </form>

                </div>
            </div>

            <div className="row">
                <div className="col-lg-3">

                  <div class="card mt-1 border-0 radius-10 shadow-lg">
                    <div class="card-body">
                    <img src="https://wagonseducation.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_102.jpg" class="card-img-top" alt="..."/>
                    <br/><br/>

                   <b>First Time Program Manager</b> <br/>
                   John Doe <br/>
                       
                    <span style={{float:'right'}}><strike>₹15999</strike> &nbsp;<b>₹7400</b></span>
                       

                       <br/><br/> 
                        

                        
                    </div>
                  </div>

                </div>
                <div className="col-lg-3"></div>
<div className="col-lg-3">


</div>
<div className="col-lg-3">

</div>

            </div>

            <br/> <br/>


        </div>
    )
}
export default Whishlists;