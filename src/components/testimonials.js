
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

function Testimonials(){
    return(
        <div>
             <div class='container ' > 
        <br/> 
        <h3>Testimonials</h3>

        <OwlCarousel  items={1}  
         className="border-0 radius-10 shadow-lg radius-10"
         style={{backgroundColor:'#F5EEF8'}}
          
          loop  
          nav ={false}
          center={true}
        //  navText ={ ["<i style='font-size:30px' class='bi bi-arrow-left-circle'></i>","<i  style='font-size:30px' class='bi bi-arrow-right-circle'></i>"]}
          margin={8} >  
         
             <div> 
                <div style={{backgroundColor:'#F5EEF8'}} class="card border-0">      
                <center> 
                <div class="card-body">
                  <h5 class="card-title">Ankur Pandey</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Marketing Manager-TATA MOTORS Limited - Mumbai</h6>
                  <p class="card-text">“As a Marketing Manger at Tata Motors I conducted and attended several training programs, I found Wagons one of such Training Company where Trainers were good in conducting behavioural and skill development training. I choose them due to their ability to understand training needs of our company and develop an efficient training module. Training not only re-energized the team, but also equipped them to function in much better way.”</p>
                </div>
                </center>
              </div>
            </div>  
            <div>
                <div style={{backgroundColor:'#F5EEF8'}} class="card border-0">
                <center>
                <div class="card-body">
                  <h5 class="card-title">Kamlesh Shahdadpuri</h5>
                  <h6 class="card-subtitle mb-2 text-muted">PBA- Kandla 2312</h6>
                  <p class="card-text">“Its been almost a month we met for a session of Communication for Impact in Ahmedabad. Today I am writing this mail as this is the right time when I can correlate my leanings at the 2 day program and its implementation at my work life. The 2 days program I attended had been a learning for me which I can implement in my professional as well as my personal life. Before I attended the program I was not sure about will it be of use or how will I implement the same at my work. Same was very smoothly managed by you.” </p>
                </div>
                </center>
              </div>
            </div>  
            <div>
                <div style={{backgroundColor:'#F5EEF8'}} class="card border-0">
                <center>
                <div class="card-body">
                  <h5 class="card-title">Stephen Pedagarla</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Branch Manager-Raj Bhavan Road, HDFC Bank Limited</h6>
                  <p class="card-text">"I was one of the participants of the Leadership Excellence Training Program that was held in Bangalore 16th and 17th February. I was indeed very good interactive and participative training and I have enjoyed every bit of 2 days training program. All participative programs were indeed very simple and easy ones but have great indepth meaning and have shown good results in our thought process."</p>
                </div>
                </center>
              </div>
            </div>  
         
          
      </OwlCarousel>
      <br/>  

      
      </div>  
        </div>
    )
}
export default Testimonials;