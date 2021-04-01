import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderSection extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <div className="container mx-auto my-4">
                        <img className="rounded-lg" src="/assets/banner.jpg" />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
