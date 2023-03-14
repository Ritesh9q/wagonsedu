import Categories from "./categories";
import LatestCourse from "./latestcourse";
import AllCourse from "./allcourse";
import Testimonials from "./testimonials";


function Home(){

    return(
      <div style={{backgroundColor:'#f1f7f8'}}>
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div class="carousel-item active" data-bs-interval="5000">
                
                    <picture>
                        <source 
                          media="(min-width: 650px)"
                          srcset="https://wagonseducation.com/uploads/system/6ab40c824b0a33f7e0b0851819fff0a9.jpg" />
                        <source 
                          media="(min-width: 465px)"
                          srcset="https://wagonseducation.com/uploads/system/fd6ffc421d665cc56fb3bf21056021a6.jpg"/>
                        <img src="https://wagonseducation.com/uploads/system/fd6ffc421d665cc56fb3bf21056021a6.jpg" class="img-fluid d-block w-100" alt="..."/>
                    </picture>
               
            </div>
    <div className="carousel-item">
              <picture>
                        <source 
                          media="(min-width: 650px)"
                          srcset="https://wagonseducation.com/uploads/system/31aa9651503a33c7f28f2a6e4d46b6e0.jpg"/>
                        <source 
                          media="(min-width: 465px)"
                          srcset="https://wagonseducation.com/uploads/system/567e98ff27e67b99ca683e7cdf92e63e.jpg"/>
                        <img src="https://wagonseducation.com/uploads/system/567e98ff27e67b99ca683e7cdf92e63e.jpg" class="img-fluid d-block w-100" alt="..."/>
                    </picture>
    </div>
    <div className="carousel-item">
      
                     <picture>
                        <source 
                          media="(min-width: 650px)"
                          srcset="https://wagonseducation.com/uploads/system/3bbc8b8ac2f0e75cafa24ec9b9530352.jpg"/>
                        <source 
                          media="(min-width: 465px)"
                          srcset="https://wagonseducation.com/uploads/system/116650d7df20a72399fbf9c588a9bb97.jpg" />
                        <img src="https://wagonseducation.com/uploads/system/116650d7df20a72399fbf9c588a9bb97.jpg" class="img-fluid d-block w-100" alt="..."/>
                    </picture>
    </div> 
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    {/* <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
                <a href="https://wagonseducation.com/home/courses?category=nov-2022">
                    <picture>
                        <source 
                          media="(min-width: 650px)"
                          srcset="https://wagonseducation.com/uploads/system/6ab40c824b0a33f7e0b0851819fff0a9.jpg" >
                        <source 
                          media="(min-width: 465px)"
                          srcset="https://wagonseducation.com/uploads/system/fd6ffc421d665cc56fb3bf21056021a6.jpg">
                        <img src="https://wagonseducation.com/uploads/system/fd6ffc421d665cc56fb3bf21056021a6.jpg" class="img-fluid d-block w-100" alt="..."/>
                    </picture>
                </a>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <a href="https://wagonseducation.com/home/courses?category=nov-2022">
                    <picture>
                        <source 
                          media="(min-width: 650px)"
                          srcset="https://wagonseducation.com/uploads/system/31aa9651503a33c7f28f2a6e4d46b6e0.jpg">
                        <source 
                          media="(min-width: 465px)"
                          srcset="https://wagonseducation.com/uploads/system/567e98ff27e67b99ca683e7cdf92e63e.jpg">
                        <img src="https://wagonseducation.com/uploads/system/567e98ff27e67b99ca683e7cdf92e63e.jpg" class="img-fluid d-block w-100" alt="..."/>
                    </picture>
                </a>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <a href="https://wagonseducation.com/home/courses?category=nov-2022">
                    <picture>
                        <source 
                          media="(min-width: 650px)"
                          srcset="https://wagonseducation.com/uploads/system/3bbc8b8ac2f0e75cafa24ec9b9530352.jpg">
                        <source 
                          media="(min-width: 465px)"
                          srcset="https://wagonseducation.com/uploads/system/116650d7df20a72399fbf9c588a9bb97.jpg">
                        <img src="https://wagonseducation.com/uploads/system/116650d7df20a72399fbf9c588a9bb97.jpg" class="img-fluid d-block w-100" alt="..."/>
                    </picture>
                </a>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <a href="https://wagonseducation.com/home/courses?category=nov-2022">
                    <picture>
                        <source 
                          media="(min-width: 650px)"
                          srcset="https://wagonseducation.com/uploads/system/db7153cd33dfe7c9d20694adabfd339c.jpg">
                        <source 
                          media="(min-width: 465px)"
                          srcset="https://wagonseducation.com/uploads/system/a38e77213c6ac717528dbd5ab1df581f.jpg">
                        <img src="https://wagonseducation.com/uploads/system/a38e77213c6ac717528dbd5ab1df581f.jpg" class="img-fluid d-block w-100" alt="..."/>
                    </picture>
                </a>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
         
          <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
    </div>
    </div> */}



<br/>

<Categories/>
<LatestCourse/>
<AllCourse/>
<Testimonials/>
<br/>

</div>
    )

}
export default Home;