import React from 'react';
import {Carousel} from 'react-bootstrap'
import slide1 from '../../assets/images/carousel/slide1.webp'
import slide2 from '../../assets/images/carousel/slide2.webp'
import slide3 from '../../assets/images/carousel/slide3.webp'
import ScrollDown from '../scrollDown/scrollDown'
import './myCarousel.style.css'

const myCarousel = () => {
    return (
        <div id="home">
         <Carousel control={false} indicators interval={2500} pauseOnHover={false}>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={slide1}
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={slide2}
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={slide3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>   
            <ScrollDown />
        </div>
    )
}

export default myCarousel
