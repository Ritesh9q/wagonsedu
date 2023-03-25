import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removew } from "../store/whishlistSlice";

function Whishlists(){
    const courses = useSelector(state=>state.whishlist)
   const dispatch = useDispatch();

    const handleRemove = (productId)=>{
        dispatch(removew(productId))
    }

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
                
                    {courses.map((course)=>(

<div className="col-lg-3">

                        <div class="card mt-1 border-0 radius-10 shadow-lg">
                        <div class="card-body">
                        <img src={course.image} class="card-img-top" alt="..."/>
                        <br/><br/>

                        <b>{course.title}</b> <br/>
                        John Doe <br/>
                        
                        <button onClick={()=>handleRemove(course.id)} style={{fontSize:'16px',marginTop:'10px',border:'none',background:'white'}}><i class="bi bi-x-circle"></i> Remove </button>
                        <span style={{float:'right'}}><strike>₹15999</strike> &nbsp;<b>₹7400</b></span>
                        <br/><br/>  
                        </div>
                        </div>
                        </div>

                    ))

                    }



              
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