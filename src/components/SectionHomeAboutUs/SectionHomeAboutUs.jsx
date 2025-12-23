import React from 'react';
import imgMain from '@assets/images/banner-home-aboutus.png';
import imgSticker1 from '@assets/images/sticker-aboutus-rectangle_17.png';
import imgSticker2 from '@assets/images/sticker-aboutus-rectangle_15.png';
import imgSticker3 from '@assets/images/sticker-aboutus-rectangle_18.png';
import imgSticker4 from '@assets/images/sticker-aboutus-vuive.png';
import imgQuote1 from '@assets/images/sticker-aboutus-quote-1.png';
import imgQuote2 from '@assets/images/sticker-aboutus-quote-2.png';
import imgQuote3 from '@assets/images/sticker-aboutus-quote.png';
import TextCurved from '@components/TextCurved/TextCurved';

function SectionHomeAboutUs() {
    return (
        <div className='section-home-about-us'>
            <TextCurved
                text={'CHUYỆN "NHÀ"'}
                width={500}
                height={200}
                fontSize={48}
            />
            <div className='content-home w-2/5 m-auto flex flex-col justify-center items-center gap-10'>
                <div>
                    <p className=' text-[32px] text-center font-bold'>
                        The Coffee House tin rằng, nụ cười là hương vị ngọt ngào
                        nhất trong mỗi ngày mới. Từ những ly cà phê đậm đà,
                        những tách trà thanh mát, đến từng lời chào thân quen,
                        chúng tôi mong mỗi vị khách khi ghé Nhà đều mang theo
                        một niềm vui nhỏ – để rồi nụ cười ấy lại được lan toả
                        khắp nơi.
                    </p>
                </div>
                <div>
                    <button className='btn px-5 py-2 bg-[#000000] rounded-4xl text-[#FFFFFF] text-[24px] font-bold '>
                        TÌM HIỂU
                    </button>
                </div>
                <div className='relative h-250'>
                    <img src={imgMain} alt='image main' className='w-125' />
                    <img
                        src={imgSticker1}
                        alt='image sticker1'
                        className='w-42 absolute -top-10 -left-30'
                    />
                    <img
                        src={imgSticker2}
                        alt='image sticker2'
                        className='w-42 absolute bottom-100 -left-35 '
                    />
                    <img
                        src={imgSticker3}
                        alt='image sticker3'
                        className='w-42 absolute bottom-80 -right-30'
                    />
                    <img
                        src={imgSticker4}
                        alt='image sticker'
                        className='w-42 absolute bottom-80 -left-15'
                    />
                    <img
                        src={imgQuote1}
                        alt='image quote 1'
                        className='w-42 absolute top-20 -right-30'
                    />
                    <img
                        src={imgQuote2}
                        alt='image quote 2'
                        className='w-42 absolute top-33 -left-45'
                    />
                    <img
                        src={imgQuote3}
                        alt='image quote 3'
                        className='w-42 absolute top-110 -right-25'
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionHomeAboutUs;
