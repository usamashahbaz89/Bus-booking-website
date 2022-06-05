import React from 'react';
import {Carousel} from 'react-bootstrap';
class carousel extends React.Component {
    state = {  } 
    render()
       
     {
        return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{height:"250px",width:"1345px", backgroundColor:'#dee2e6'}}>
            <Carousel style={{paddingLeft:"500px", paddingTop:"25px"}}>
  <Carousel.Item>
    <img
      className="d-block w-10"
      src="c1.png"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
      src="c2.png"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
      src="c3.png"
      alt="third slide"
    />

    
  </Carousel.Item>
  </Carousel>

            </div>

        );
    }
       }
 
export default carousel;