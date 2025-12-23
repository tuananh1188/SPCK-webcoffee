import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductItem from '@components/ProductItem/ProductItem';

function SlideCommon({ data, isProductItem = false, numberShow }) {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: numberShow,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrow: true
    };
    return (
        <Slider {...settings}>
            {data.map((item, index) => {
                return (
                    <>
                        {isProductItem ? (
                            <ProductItem
                                image={item.image}
                                category={item.category}
                                name={item.name}
                                price={item.price}
                            />
                        ) : (
                            <img
                                image={item}
                                key={index}
                                alt='image'
                                className='h-383 w-full'
                            />
                        )}
                    </>
                );
            })}
        </Slider>
    );
}

export default SlideCommon;
