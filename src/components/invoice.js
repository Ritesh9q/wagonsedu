

function printInvoice(){
    var print_div = document.getElementById("print");
var print_area = window.open();
print_area.document.write(print_div.innerHTML);
print_area.document.close();
print_area.focus();
print_area.print();
print_area.close();

  }



function Invoice(){
    return(
        <div>
            <br/>
           <section id="print" class="purchase-history-list-area">
    <div class="container">
        <div class="row">
            <div class="col">
                <div style={{marginLeft:'auto', marginRight:'auto'}}>
                   
                    <div style={{background: '#eceff4', padding: '1.5rem'}}>
                        <table class="w-100">
                            <tr>
                                <td>
                                    <img src="https://wagonseducation.com/uploads/system/c3aba71d83a384212ca58138b5443677.png" height={40} style={{display:'inline-block'}}/>
                                </td>
                                <td style={{fontSize: '22px'}} class="text-right strong">INVOICE</td>
                            </tr>
                        </table>
                        <table class="w-100">
                            <tr>
                                <td style={{fontSize: '1.2rem'}} class="strong">Wagons</td>
                                <td class="text-right"></td>
                            </tr>
                            <tr>
                                <td class="gry-color small">certification@wagonseducation.com</td>
                                <td class="text-right"></td>
                            </tr>
                            <tr>
                                <td class="gry-color small">A – 7 &amp; 8, 4th Floor, Srushti Apartments
,Opp Union Bank Of INDIA, Baner Road,
Pune – 411007 Maharashtra, India.</td>
                                <td class="text-right small"><span class="gry-color small">Payment method:</span> <span class="strong">Razorpay</span></td>
                            </tr>
                            <tr>
                                <td class="gry-color small">Phone: +91 7844885544</td>
                                <td class="text-right small"><span class="gry-color small">Purchase date:</span> <span class=" strong">Fri, 27-Jan-2023</span></td>
                            </tr>
                        </table>

                    </div>

                    <div style={{borderBottom:'1px solid #eceff4',margin:'0 1.5rem'}}></div> 
                    <div style={{padding: '1.5rem'}}>
                        <table>
                            <tr><td class="strong small gry-color">Bill to:</td></tr>
                            <tr><td class="strong">Ritesh Kurve</td></tr>
                            <tr><td class="gry-color small">Email: riteshkurve9q@gmail.com</td></tr>
                        </table>
                    </div>
                    <div >
                        <table class="padding text-left small border-bottom w-100">
                            <thead>
                                <tr class="gry-color" style={{background: '#eceff4'}}>
                                    <th width="50%">Course name</th>
                                    <th width="15%" style={{paddingLeft : '10px'}}>Category</th>
                                    <th width="15%">Instructor</th>
                                    <th width="20%" class="text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody class="strong">
                                <tr class="">
                                    <td>Finance For Non-Finance Elementary</td>
                                    <td class="gry-color" style={{paddingLeft : '10px'}}>Oct 2022</td>
                                    <td class="gry-color">Wagons  Education</td>
                                    <td class="text-right">₹5999</td>
                                </tr>
                                <tr class="">
                                    <td></td>
                                    <td class="gry-color"></td>
                                    <td class="gry-color"> <strong>Sub total:</strong> </td>
                                    <td class="text-right"><strong>₹5999</strong></td>
                                </tr>
                                <tr class="">
                                    <td></td>
                                    <td class="gry-color"></td>
                                    <td class="gry-color strong"><strong>Grand total</strong>:</td>
                                    <td class="text-right"><strong>₹5999</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-print-none mb-2">
            <a onClick={printInvoice} class="btn btn-receipt float-end mt-2">Print</a>
        </div>
    </div>
</section>
        </div>
    )
}
export default Invoice;