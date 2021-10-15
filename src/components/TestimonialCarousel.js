import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../Images/avatar-3.png";

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
            <h3>Save A Warrior</h3>
            <h5>2021-Present</h5>
            <p>Save A Warrior helps veterans and first responders get on the other side of PTS and suicidal ideations.</p>
            </div>
            </>
            <>
            <img src={avatar1} alt="..."/>
            <div className="myCarousel">
            <h3>Save A Warrior</h3>
            <h5>2018-2020</h5>
            <p>Save A Warrior helps veterans and first responders get on the other side of PTS and suicidal ideations.</p>
            </div>
            </>
        </Carousel>
    )
}

export default TestimonialCarousel
