import React from 'react';

class footer extends React.Component {
    state = {  } 
    render() { 
        return (
            <footer style={{backgroundColor:"#302c2c", width:"1349px", height:"280px"}}>
            <div style={{height:"140px"}}>
                <img src='payment.png'/>
                <img style={{paddingTop:"10px", float:"right", paddingRight:"30px"}} src='keep in touch.png'/>

                <form class="form-inline" style={{display:"inline-flex", paddingLeft:"50px"}}>
  <label class="sr-only" for="inlineFormInputName2">Email Address</label>
  
  <input type="text" placeholder="Enter Your Email Address"></input>
  <button style={{backgroundColor:"#546c8c"}} type="submit" class="btn btn-primary">Submit</button>
</form>
<hr style={{color:"white"}}/>
            </div>
            <div>
    

            <ul class="nav justify-content-center">
<li className="nav-item"> <a class="nav-link text-white active" href="https://bookkaru.com/page/about">About Us</a> </li>
<li className="nav-item"> <a class="nav-link text-white active" href="https://bookkaru.com/page/terms-conditions">Terms &amp; Conditions Of Use</a> </li>
<li className="nav-item"> <a class="nav-link text-white active" href="https://bookkaru.com/page/faq">FAQs</a> </li>
<li className="nav-item"> <a class="nav-link text-white active" href="https://bookkaru.com/page/support">Support</a> </li>
</ul>


<p className="copyright-text" style={{color:"grey", paddingLeft:"495px"}}>Copyright © 2020 <a href="#">BOOKKARU</a>. All Rights Reserved.</p>

            </div> 
            </footer>


 

        );
    }
}
 
export default footer;