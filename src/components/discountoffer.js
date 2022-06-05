import React from 'react';
import {Carousel} from 'react-bootstrap';
class discountoffer  extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="discountoffer.png"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="discountoffer2.png"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="discountoffer3.png"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</div>

        );
    }
}
 
export default discountoffer;