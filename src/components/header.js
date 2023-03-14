import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from 'react-router-dom';
import $ from 'jquery';

function Header() {
  $(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
}); 

document.addEventListener("DOMContentLoaded", function(){
        

  /////// Prevent closing from click inside dropdown
document.querySelectorAll('.dropdown-menu').forEach(function(element){
  element.addEventListener('click', function (e) {
    e.stopPropagation();
  });
})



// make it as accordion for smaller screens
if (window.innerWidth < 992) {

  // close all inner dropdowns when parent is closed
  document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
    everydropdown.addEventListener('hidden.bs.dropdown', function () {
      // after dropdown is hidden, then find all submenus
        this.querySelectorAll('.submenu').forEach(function(everysubmenu){
          // hide every submenu as well
          everysubmenu.style.display = 'none';
        });
    })
  });
  
  document.querySelectorAll('.dropdown-menu a').forEach(function(element){
    element.addEventListener('click', function (e) {

        let nextEl = this.nextElementSibling;
        if(nextEl && nextEl.classList.contains('submenu')) {	
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          console.log(nextEl);
          if(nextEl.style.display == 'block'){
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }

        }
    });
  })
}
// end if innerWidth

}); 
// DOMContentLoaded  end

$('body').on("click", ".dropdown-menu", function (e) {
  $(this).parent().is(".show") && e.stopPropagation();
}); 

let loggedin=true;

if(loggedin){

  return (

    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary d-lg-none d-xl-none ">
<div className="container-fluid"> 
  <a className="navbar-brand" href="#">
  <Link to="/"> 
  <img style={{width:'150px'}} src="https://wagonseducation.com/uploads/system/c3aba71d83a384212ca58138b5443677.png"  />
  </Link>
  
  </a> 
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li  className="nav-item dropdown">
        <a style={{color:'black'}} className="nav-link dropdown-toggle" href="#" role="button"  data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="bi bi-box-fill"></i>&nbsp;  
          Categories
        </a>  
        <ul className="dropdown-menu"> 
          <li class="dropend"><a class="dropdown-item" href="#" data-bs-toggle="dropdown" data-bs-dismiss="dropdown" ><i class="fa-solid fa-chess"></i> Open Programs &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><Link className="dropdown-item" style={{color:'black'}} to="/open-program" data-bs-auto-close="false"><span data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Feb 2023</span></Link></li> 
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Jan 2023</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Dec 2023 </a></li>
            </ul>
          </li>
          <li class="dropend"><a class="dropdown-item" href="#" data-bs-toggle="dropdown"  > Corporate Training Solutions &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Functional Skills</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">BFSI Domain Skills</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Soft Skills</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Behavioural Transformation</a></li>
            </ul>
          </li>
          <li class="dropend"><a class="dropdown-item" href="#" data-bs-toggle="dropdown"> Certifications &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Upcoming Programs</a></li>
            </ul>
          </li>
          <li class="dropend"><a class="dropdown-item" href="#" data-bs-toggle="dropdown"> Blogs &raquo; </a> 
            <ul class="submenu dropdown-menu">
              <li><Link className="dropdown-item" style={{color:'black'}} to="/blogs" ><span data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Feb 2023</span></Link></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Jan 2023</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Dec 2023</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Nov 2023</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <form className="d-flex " role="search">
      <input className="form-control " type="search" placeholder="Search for courses" aria-label="Search" />
      <button className="btn btn-outline-danger" type="submit"><i class="bi bi-search"></i></button>
    </form>
    </ul>
   
    <i style={{fontSize:'30px'}} class="bi bi-cart"></i>
    <span class=" top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
     &nbsp;&nbsp;
    <Link style={{border:'1px solid black'}} className="btn btn-default mx-1" to="/login" >Login</Link> 
    <Link className="btn btn-danger" to="/signup">Sign Up</Link>
  </div>
</div> 
</nav>



<nav className="navbar navbar-expand-lg bg-body-tertiary  b-gradient bg-opacity-10 d-none d-lg-block d-xl-block " >
<div className="container-fluid">
  <a className="navbar-brand" href="#">
  <Link to="/"> 
  <img style={{width:'150px'}} src="https://wagonseducation.com/uploads/system/c3aba71d83a384212ca58138b5443677.png"  />
  </Link>
  
  </a> 
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li  className="nav-item dropdown">
        <a style={{color:'black'}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="bi bi-box-fill"></i>&nbsp;  
          Categories
        </a>  
        <ul className="dropdown-menu">
          <li><a class="dropdown-item" href="#"><i class="fa-solid fa-chess"></i> Open Programs &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><Link className="dropdown-item" style={{color:'black'}} to="/open-program" >Feb 2023</Link></li> 
              <li><a class="dropdown-item" href="#">Jan 2023</a></li>
              <li><a class="dropdown-item" href="#">Dec 2023 </a></li>
            </ul>
          </li>
          <li><a class="dropdown-item" href="#"> Corporate Training Solutions &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><Link className="dropdown-item" style={{color:'black'}} to="/corporate-training-solutions#functional" >Functional Skills</Link></li>
              <li><Link className="dropdown-item" style={{color:'black'}} to="/corporate-training-solutions#domain" >BFSI Domain Skills</Link></li>
              <li><Link className="dropdown-item" style={{color:'black'}} to="/corporate-training-solutions#soft" >Soft Skills</Link></li>  
              <li><Link className="dropdown-item" style={{color:'black'}} to="/corporate-training-solutions#behavioural" >Behavioural Transformation</Link></li>
            </ul>
          </li>
          <li><a class="dropdown-item" href="#"> Certifications &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><Link to="/upcoming-programs" class="dropdown-item">Upcoming Programs</Link></li> 
            </ul>
          </li>
          <li><a class="dropdown-item" href="#"> Blogs &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><Link className="dropdown-item" style={{color:'black'}} to="/blogs" >Feb 2023</Link></li>
              <li><a class="dropdown-item" href="#">Jan 2023</a></li>
              <li><a class="dropdown-item" href="#">Dec 2023</a></li>
              <li><a class="dropdown-item" href="#">Nov 2023</a></li>
            </ul>
          </li>
      
          {/* <li><hr className="dropdown-divider"/>sdfsf</li>
          <li><a className="dropdown-item" href="#">Something else here</a></li> */}
        </ul>
      </li>
      <form className="d-flex " role="search">
      <input className="form-control " type="search" placeholder="Search for courses" aria-label="Search" />
      <button className="btn btn-outline-danger" type="submit"><i class="bi bi-search"></i></button>
    </form>
    </ul>

    <Link className="btn shadow-none"  to="#">Instructor</Link>
    <Link className="btn shadow-none"  to="/my-courses">My Courses</Link> &nbsp;

    <Link style={{color:'black'}} to="shopping-cart"><i style={{fontSize:'30px'}} class="bi bi-heart"></i></Link> 
    <span class=" top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
     &nbsp;&nbsp;
   
    <Link style={{color:'black'}} to="shopping-cart"><i style={{fontSize:'30px'}} class="bi bi-cart"></i></Link> 
    <span class=" top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
     &nbsp;&nbsp;
    {/* <Link style={{border:'1px solid black'}} className="btn btn-default mx-1" to="/login" >Login</Link> 
    <Link className="btn btn-danger" to="/signup">Sign Up</Link> */}

<img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" width={40}/>

  </div>
</div> 
</nav>

    </div>

  );

}


// Not Logged In Start


if(!loggedin){

  return (

    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary d-lg-none d-xl-none ">
<div className="container-fluid"> 
  <a className="navbar-brand" href="#">
  <Link to="/"> 
  <img style={{width:'150px'}} src="https://wagonseducation.com/uploads/system/c3aba71d83a384212ca58138b5443677.png"  />
  </Link>
  
  </a> 
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li  className="nav-item dropdown">
        <a style={{color:'black'}} className="nav-link dropdown-toggle" href="#" role="button"  data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="bi bi-box-fill"></i>&nbsp;  
          Categories
        </a>  
        <ul className="dropdown-menu"> 
          <li class="dropend"><a class="dropdown-item" href="#" data-bs-toggle="dropdown" data-bs-dismiss="dropdown" ><i class="fa-solid fa-chess"></i> Open Programs &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><Link className="dropdown-item" style={{color:'black'}} to="/open-program" data-bs-auto-close="false"><span data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Feb 2023</span></Link></li> 
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Jan 2023</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Dec 2023 </a></li>
            </ul>
          </li>
          <li class="dropend"><a class="dropdown-item" href="#" data-bs-toggle="dropdown"  > Corporate Training Solutions &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Functional Skills</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">BFSI Domain Skills</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Soft Skills</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Behavioural Transformation</a></li>
            </ul>
          </li>
          <li class="dropend"><a class="dropdown-item" href="#" data-bs-toggle="dropdown"> Certifications &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Upcoming Programs</a></li>
            </ul>
          </li>
          <li class="dropend"><a class="dropdown-item" href="#" data-bs-toggle="dropdown"> Blogs &raquo; </a> 
            <ul class="submenu dropdown-menu">
              <li><Link className="dropdown-item" style={{color:'black'}} to="/blogs" ><span data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Feb 2023</span></Link></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Jan 2023</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Dec 2023</a></li>
              <li><a class="dropdown-item" href="#" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent">Nov 2023</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <form className="d-flex " role="search">
      <input className="form-control " type="search" placeholder="Search for courses" aria-label="Search" />
      <button className="btn btn-outline-danger" type="submit"><i class="bi bi-search"></i></button>
    </form>
    </ul>
   
    <i style={{fontSize:'30px'}} class="bi bi-cart"></i>
    <span class=" top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
     &nbsp;&nbsp;
    <Link style={{border:'1px solid black'}} className="btn btn-default mx-1" to="/login" >Login</Link> 
    <Link className="btn btn-danger" to="/signup">Sign Up</Link>
  </div>
</div> 
</nav>



<nav className="navbar navbar-expand-lg bg-body-tertiary  b-gradient bg-opacity-10 d-none d-lg-block d-xl-block " >
<div className="container-fluid">
  <a className="navbar-brand" href="#">
  <Link to="/"> 
  <img style={{width:'150px'}} src="https://wagonseducation.com/uploads/system/c3aba71d83a384212ca58138b5443677.png"  />
  </Link>
  
  </a> 
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li  className="nav-item dropdown">
        <a style={{color:'black'}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="bi bi-box-fill"></i>&nbsp;  
          Categories
        </a>  
        <ul className="dropdown-menu">
          <li><a class="dropdown-item" href="#"><i class="fa-solid fa-chess"></i> Open Programs &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><Link className="dropdown-item" style={{color:'black'}} to="/open-program" >Feb 2023</Link></li> 
              <li><a class="dropdown-item" href="#">Jan 2023</a></li>
              <li><a class="dropdown-item" href="#">Dec 2023 </a></li>
            </ul>
          </li>
          <li><a class="dropdown-item" href="#"> Corporate Training Solutions &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><Link className="dropdown-item" style={{color:'black'}} to="/corporate-training-solutions#functional" >Functional Skills</Link></li>
              <li><Link className="dropdown-item" style={{color:'black'}} to="/corporate-training-solutions#domain" >BFSI Domain Skills</Link></li>
              <li><Link className="dropdown-item" style={{color:'black'}} to="/corporate-training-solutions#soft" >Soft Skills</Link></li>  
              <li><Link className="dropdown-item" style={{color:'black'}} to="/corporate-training-solutions#behavioural" >Behavioural Transformation</Link></li>
            </ul>
          </li>
          <li><a class="dropdown-item" href="#"> Certifications &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><Link to="/upcoming-programs" class="dropdown-item">Upcoming Programs</Link></li> 
            </ul>
          </li>
          <li><a class="dropdown-item" href="#"> Blogs &raquo; </a>
            <ul class="submenu dropdown-menu">
              <li><Link className="dropdown-item" style={{color:'black'}} to="/blogs" >Feb 2023</Link></li>
              <li><a class="dropdown-item" href="#">Jan 2023</a></li>
              <li><a class="dropdown-item" href="#">Dec 2023</a></li>
              <li><a class="dropdown-item" href="#">Nov 2023</a></li>
            </ul>
          </li>
      
          {/* <li><hr className="dropdown-divider"/>sdfsf</li>
          <li><a className="dropdown-item" href="#">Something else here</a></li> */}
        </ul>
      </li>
      <form className="d-flex " role="search">
      <input className="form-control " type="search" placeholder="Search for courses" aria-label="Search" />
      <button className="btn btn-outline-danger" type="submit"><i class="bi bi-search"></i></button>
    </form>
    </ul>


   
    <Link style={{color:'black'}} to="shopping-cart"><i style={{fontSize:'30px'}} class="bi bi-cart"></i></Link> 
    <span class=" top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
     &nbsp;&nbsp;
    <Link style={{border:'1px solid black'}} className="btn btn-default mx-1" to="/login" >Login</Link> 
    <Link className="btn btn-danger" to="/signup">Sign Up</Link>
  </div>
</div> 
</nav>

    </div>

  );

}

// Not Logged In End


    
  }
  
  export default Header;