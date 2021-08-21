import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../avatar-3.png";

const TestimonialCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <>
            <img src={avatar1} alt="..."/>
            <div className="myCarousel">
            <h3>John Doe 1</h3>
            <p>Ipsum lorem blaj mwkmwal</p>
            </div>
            </>
            <>
            <img src={avatar1} alt="..."/>
            <div className="myCarousel">
            <h3>John Doe 1</h3>
            <p>Ipsum lorem blaj mwkmwal</p>
            </div>
            </>
            <>
            <img src={avatar1} alt="..."/>
            <div className="myCarousel">
            <h3>John Doe 1</h3>
            <p>Ipsum lorem blaj mwkmwal</p>
            </div>
            </>
            <>
            <img src={avatar1} alt="..."/>
            <div className="myCarousel">
            <h3>John Doe 1</h3>
            <p>Ipsum lorem blaj mwkmwal</p>
            </div>
            </>
        </Carousel>
    )
}

export default TestimonialCarousel
