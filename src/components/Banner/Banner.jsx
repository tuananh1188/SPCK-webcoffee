import React from 'react';
import imgBanner1 from '@assets/images/banner_app_xmas.jpg';
import imgBanner2 from '@assets/images/slide_3_img.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const slideBanner = [imgBanner1, imgBanner2];
let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
};

function Banner() {
    return (
        <div>
            <Slider {...settings}>
                {slideBanner.map((src, index) => {
                    return (
                        <div>
                            <img
                                src={src}
                                key={index}
                                alt='banner'
                                className=' w-full h-50 lg:h-200 md:h-95.75 object-cover'
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Banner;
