import React from 'react';
import Ltm from './Ltm';
import Discountoffer from './discountoffer';
import Carousel from './carousel';
import Popularroutes from './popularroutes';
import Ourpartnerscarousel from './ourpartnerscarousel';
import Appinfo from './Appinfo'
import Websitefeatures from './websitefeatures';
import Footer from './Footer';

import {Routes, Route} from 'react-router-dom';


class home extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
            
            <Discountoffer/>
            <Carousel/>
            <Popularroutes/>

            <div style={{marginTop:"100px"}}>
            <Ourpartnerscarousel/>
            </div>

            <Appinfo/>
            <websitefeatures/>
            {/* <Footer/> */}
            
            


            
            
            </div> 
        );
    }
}
 
export default home;