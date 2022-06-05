import React from 'react';
import {BrowserRouter, Link, NavLink} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

class popularroutes extends React.Component {
    state = {  } 
    render() { 
        return (
            <div style={{width:"1345px", height:"300px"}}>
             <div className="container">
<h2 className="text-center text-9 font-weight-500">Popular Routes</h2>
<p className="mb-4 text-center lead">Search Hotels, Flights, Trains &amp; Bus</p>

<ul className="mb-5 nav nav-tabs style-2 bg-bookkaru nav-fill justify-content-center" id="myRoutes" role="tablist">
<li className="nav-item"> <a className="nav-link text-4 active" id="four-tab" data-toggle="tab" href="#four" role="tab" aria-controls="four" aria-selected="true" style={{backgroundColor:"#0874cc", color:"white" }}><b>BUS</b></a> 
</li>

 </ul>
<div style={{height:"250px", width:"500px", float:"left"}}>
 <table className="table">
 <tbody>
    <tr>
      
      <td>Lahore To Muzaffarabad</td>
      <td>
      
      </td>
      
       <td><button type="button" class="btn btn-outline-primary"><Link to ="/lhrtomuzaf">Book Now</Link></button></td>
      
    </tr>
    <tr>
      
      <td>Lahore To Multan</td>
      <td></td>
      <td><button type="button" class="btn btn-outline-primary"><Link to ="/lhrtomultan">Book Now</Link></button></td>
    </tr>
    <tr>
      
      <td>Bahawalpur To Lahore</td>
      <td></td>
      <td><button type="button" class="btn btn-outline-primary"><Link to ="/bahawtolhr">Book Now</Link></button></td>
    </tr>
    </tbody>
    </table>
    
    </div>
    <div style={{height:"250px", width:"500px",float:"right"}}>
 <table className="table">
 <tbody>
    <tr>
      
      <td>Lahore to Islamabad</td>
      <td></td>
      <td><button type="button" class="btn btn-outline-primary"><Link to ="/lhrtoisl">Book Now</Link></button></td>
      
    </tr>
    <tr>
      
      <td>Islamabad to Lahore</td>
      <td></td>
      <td><button type="button" class="btn btn-outline-primary"><Link to ="/isltolhr">Book Now</Link></button></td>
    </tr>
    <tr>
      
      <td>Lahore to Peshawar</td>
      <td></td>
      <td><button type="button" class="btn btn-outline-primary"><Link to ="/lhrtopeshawar">Book Now</Link></button></td>
    </tr>
    </tbody>
    </table>
    
    </div>

</div>
</div>
               
);
}
}

 
export default popularroutes;