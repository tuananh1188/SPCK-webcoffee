import React from 'react';
import imgBanner1 from '@assets/images/banner_app_xmas.jpg';
import imgBanner2 from '@assets/images/slide_3_img.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SlideCommon from '@components/SlideCommon/SlideCommon';

const slideBanner = [{id:1,image:imgBanner1},{id:2, image:imgBanner2}];

function Banner() {
    return (
        <div>
            <SlideCommon data={slideBanner} isProductItem = {false} numberShow={1}/>
        </div>
    );
}

export default Banner;
