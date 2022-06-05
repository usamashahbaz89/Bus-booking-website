import React from 'react';

import {Routes, Route} from 'react-router-dom';



class isltolhr extends React.Component {
    state = {  } 
    render() { 
        return (
           <>
           <div style={{height:"60px", width:"1349px", backgroundColor:"#023669", display:"flex", justifyContent:"space-around"}}>
          <h2 style={{paddingTop:"10px", color:"#d98038", fontFamily:"poppins,sans-serif", fontWeight:"400", fontSize:"25px"}}>Booking Times</h2>
          <p style={{color:"#d98038", fontFamily:"poppins,sans-serif", justifyContent:"space-around", alignItems:"centre", paddingTop:"10px" }}>Home > Bus > Booking Times</p>
           </div> 
         
         <div style={{height:"600px", width:"1349px", backgroundColor:"#dee2e6"}}>
             
             <div className="container" style={{height:"150px", backgroundColor:"white", position:"relative", top:"30px", borderRadius:"15px"}}>
              <h3 style={{ paddingTop:"10px"}}>Islamabad to Lahore</h3> 
              <nav aria-label="Page navigation example">
              <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Prev</a></li>
    <li class="page-item"><a class="page-link" href="#">2022-</a></li>
    <li class="page-item"><a class="page-link" href="#">04-</a></li>
    <li class="page-item"><a class="page-link" href="#">01</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>


<button type="button" class="btn btn-primary" style={{backgroundColor:"#0071cc"}}>Modify Search </button>



             </div>
             <div  className="container" style={{height:"260px", width:"200px", backgroundColor:"white", position:"relative", top:"40px", right:"470px", borderRadius:"15px"}}>
                 <h3>Filter</h3>
                 <div> 
                     <h5 style={{color:"#0071cc", fontFamily: "poppins,sans-serif", fontSize:"16px"}}>Bus Type</h5> 
                     <p style={{fontSize:"13px"}}>Executive Plus</p>
                     <hr style={{color:"grey"}}/>
                 </div>
                 <div> 
                     <h5 style={{color:"#0071cc", fontFamily: "poppins,sans-serif", fontSize:"16px"}}>Bus Operators</h5> 
                     <p style={{fontSize:"13px"}}>Faisal Movers</p>
                     <p style={{fontSize:"13px"}}>Sania Express</p>
                     
                 </div>
                 <div style={{position:"relative", bottom:"5px"}}>
                 <button type="button" class="btn btn-primary" style={{backgroundColor:"#0071cc"}}>Filter Results </button>
                 </div>
                 
                   </div>
             
           <div className="container" style={{height:"400px", width:"900px", backgroundColor:"white", position:"relative", bottom:"219px", left:"120px", borderRadius:"15px"}}>

               <div class="container">
                   <h3 style={{paddingLeft:"250px", paddingTop:"10px"}}>Islamabad to Lahore</h3>
               </div>
               <div style={{width:"100%", height:"50px", boxSizing:"border-box", backgroundColor:"#f5f5f5", borderBottomColor:"#0474cc", borderBottomStyle:"solid", borderTopColor:"#0474cc", borderTopStyle:"solid"}}>
                   <ul style={{ display:"flex", justifyContent:"space-around", paddingTop:"10px"}}>
                       <li style={{display:"inline", fontFamily:"poppins,sans-serif", color:"#535b61"}}>Operators</li>
                       <li style={{display:"inline", fontFamily:"poppins,sans-serif", color:"#535b61" }}>Service Type</li>
                       <li style={{display:"inline", fontFamily:"poppins,sans-serif", color:"#535b61"}}>Price</li>
                       <li style={{display:"inline", fontFamily:"poppins,sans-serif", color:"#535b61"}}>Amenities</li>
                   </ul>

               </div>
               <div className="container" style={{ position:"relative", backgroundColor:"#f8f9fa", width:"870px", height:"130px", borderRadius:"10px", marginTop:"10px", boxShadow:"5px 5px 5px #888888"}}>
               <img src='isltolhr faisal movers.png' style={{display:"inline"}}/>
               <img src='ltm departuretime.png' style={{display:"inline"}}/>
               <img src='ltm ex.png' style={{display:"inline"}}/>
               <button type="button" class="btn btn-primary" style={{backgroundColor:"#023669", borderColor:"#023669", marginLeft:"70px"}}>View Timing </button>
                   </div>
                   <div className="container" style={{ position:"relative", backgroundColor:"#f8f9fa", width:"870px", height:"130px", borderRadius:"10px", marginTop:"10px", boxShadow:"5px 5px 5px #888888"}}>
               <img src='isltolhr sania express.png' style={{display:"inline"}}/>
               <img src='ltm departuretime.png' style={{display:"inline"}}/>
               <img src='ltm ex.png' style={{display:"inline"}}/>
               <button type="button" class="btn btn-primary" style={{backgroundColor:"#023669", borderColor:"#023669", marginLeft:"70px"}}>View Timing </button>
                   </div>
               </div> 

         </div>
          
           </> );
    }
}
 
export default isltolhr ; 
