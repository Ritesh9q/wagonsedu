
import Invoice from './invoice';
import React, { useState } from "react";

function PurchaseHistory(){

    const [showInvoice, setShowInvoice] = useState(true);



    if(showInvoice){
    return(
        <div>
            <div className="container">
            <br/>

            <div class="row">
                            <div class="col-sm-6"><h4 class="purchase-history-list-title"> Purchase history </h4></div>
                            <div class="col-sm-6 hidden-xxs hidden-xs">
                                <div class="row">
                                    <div class="col-sm-3"> Date </div>
                                    <div class="col-sm-3"> Total price </div>
                                    <div class="col-sm-4"> Payment type </div>
                                    <div class="col-sm-2"> Actions </div>
                                </div>
                            </div>
            </div>

            <div class="card mt-1  border-0 radius-10 shadow-lg p-2">
              

            <div class="row">
        
                            <div class="col-sm-6">
                            <img style={{marginRight:'20px',width:'100px'}}  src="https://wagonseducation.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_103.jpg"  class="img-fluid program-img rounded float-start" alt="..." />
                            <h5  class="card-title">Finance For Non Finance Elementary   </h5>
                            </div>
                            <div class="col-sm-6 hidden-xxs hidden-xs">
                                <div class="row">
                                    <div class="col-sm-3"> Fri, 27-Jan-2023  </div>
                                    <div class="col-sm-3"> ₹5999  </div>
                                    <div class="col-sm-4"> Razorpay  </div>
                                    <div class="col-sm-2"> <button onClick={() => setShowInvoice(!showInvoice)} className="btn btn-sm btn-outline-success">Invoice</button> </div>
                                </div>
                            </div>
                    
                </div>
            </div>
              
            </div>
            <br/> <br/>
        </div>
    )
    }
    else{
        return(
            <Invoice/>
        )
    }
}
export default PurchaseHistory;