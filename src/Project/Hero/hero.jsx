import { Container, Button,  Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import FirstSlider from './img/background-2.jpg'
import SecondSlider from './img/background-6.jpg'
import ThirdSlider from './img/background-1.jpg'
import './hero.css'

function Hero() {
    return (
      <>
      <Container>
        
        <br/>
        <Carousel data-bs-theme="dark">
      <Carousel.Item >
        <img
          className="d-block w-100 carousel-parent"
          src={FirstSlider}
          alt="First slide"
          
        />
        <Carousel.Caption className='carousel-child'>
          <h1 className='hero-caption' >The Best Bookstore</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 second-slider"
          src={SecondSlider }
          alt="Second slide"
        />
        <Carousel.Caption >
        <h1 className='hero-caption'>The Best Bookstore</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ThirdSlider}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='hero-caption'>The Best Bookstore</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
        </>
        );
    }

export default Hero;