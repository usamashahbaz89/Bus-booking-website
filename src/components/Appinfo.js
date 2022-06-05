import React from 'react';
class appinfo extends React.Component {
    state = {  } 
    render() { 
        return (

            <div style={{width:"1349px", height:"530px", backgroundColor:"#dee2e6"}}>
                <div style={{width:"670px", height:"100%", float:"right"}}>
                <img src='mobiles.PNG'/>
                 </div>
                 

<div style={{width:"670px", height:"100%", float:"right"}}>
                 <h2 classname="my-4 text-9 font-weight-600" style={{paddingLeft:"100px" ,paddingTop:"80px", color:"#18375c", fontWeight: 'bold' }}>Download Our Bookkaru <br classname="d-none d-lg-inline-block" />
          Mobile App Now</h2>
        <p className="lead" style={{paddingLeft:"100px" ,paddingTop:"10px", color:"#6a7278"}}>Download our app for the fastest, most convenient way to Book Tickets Online.</p>
        <p style={{paddingLeft:"100px" ,paddingTop:"10px", color:"#6a7278"}}>Our app has all your booking needs covered: Secure payment channels, easy 4-step booking process, and sleek user designs. What more could you ask for?</p>
        <ul style={{paddingLeft:"130px", color:"#6a7278"}}>
          <li>Booking Online</li>
          <li>Recharge</li>
          <li>Secure payments</li>
          <li>and much more.....</li>
        </ul>
        <img style={{paddingLeft:"170px"}} src='playstore.PNG'/>
      </div>
      </div>
        );
    }
}
 
export default appinfo;
