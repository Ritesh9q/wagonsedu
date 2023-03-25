import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";


function ShoppingCart(){
  const courses = useSelector(state=>state.cart)
  const dispatch = useDispatch();



  const handleRemove = (productId)=>{
    dispatch(remove(productId))
}

const totalPrice = courses.reduce((acc, course) => {
  return acc + parseInt(course.discountedprice);
}, 0);

const discountPrice = courses.reduce((acc, course) => {
  return acc + parseInt(course.price);
}, 0);

    return(
      <div style={{backgroundColor:'#f1f7f8'}}>

        <div class="course-header-area">
          <div class="container">
            <div class="row align-items-end">
              <div class="col-lg-9"> 
                <div class="course-header-wrap">
                  <h1 class="title">Home / Shopping Cart</h1>
                </div>
              </div>
            </div>                          
          </div>
        </div>
<br/>
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <h4>{courses.length} Courses in Cart</h4> 

                    {courses.map((course)=>(

                      <div class="card mt-1 border-0 radius-10 shadow-lg">
                      <div class="card-body">
                      <img style={{marginRight:'20px'}} src={course.image}  class="img-fluid rounded program-img float-start" alt="..." />
                          <div >
                          <h5  class="card-title">{course.title}<span onClick={()=>handleRemove(course.id)} style={{fontSize:'16px',marginLeft:'40px'}}><i class="bi bi-x-circle"></i> Remove </span>   <span style={{fontSize:'20px',float:'right'}}>₹{course.discountedprice}</span></h5>
                          <p class="card-text">Updated Wed, 02-Nov-2022 <span style={{fontSize:'15px',float:'right'}}><strike>₹{course.price}</strike></span></p>
                          </div>
                          </div>
                      </div>

                    ))
                    }



               
                


                    {/* <div class="card mt-1 border-0 radius-10 shadow-lg">
                    <div class="card-body">
                    <img style={{marginRight:'20px'}} src="https://wagonseducation.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_103.jpg"  class="img-fluid rounded program-img float-start" alt="..." />
                        <div >
                        <h5  class="card-title">Finance For Non Finance Elementary <span style={{fontSize:'16px',marginLeft:'40px'}}><i class="bi bi-x-circle"></i> Remove </span>   <span style={{fontSize:'20px',float:'right'}}> ₹7400</span></h5>
                        <p class="card-text">Updated Wed, 02-Nov-2022 <span style={{fontSize:'15px',float:'right'}}><strike>₹15999</strike></span></p>
                        </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-lg-3">
                <h4>Total:</h4> 
                <div class="card mt-1 border-0 radius-10 shadow-lg">
                    <div class="card-body">
                        <div style={{color:'#ec5252',fontWeight:700,fontSize:'30px'}}>₹{totalPrice}</div>
                        <div><strike>₹{discountPrice}</strike></div>
                     
                        <br/>

                        <div class="input-group marge-input-box mb-3">
                            <input type="text" class="form-control shadow-none" placeholder="Apply coupon code" id="coupon-code" />
                            <div class="input-group-append">
                                <button class="btn" type="button">  
                                    Apply               
                                 </button>
                            </div>
                        </div>

                        <div class="d-grid gap-2">
                           <button style={{backgroundColor:'#ec5252',color:'white'}} class="btn" type="button">Checkout</button>

                        </div>
                    </div>
                  </div>


                </div>
            </div>
        </div>

<br/>

    </div> 
    )
}
export default ShoppingCart;