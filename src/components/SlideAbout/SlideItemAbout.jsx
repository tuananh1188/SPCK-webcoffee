import React from 'react';
import { Link } from 'react-router';
import iconArrow from '@assets/icons/arrow-right-icon.svg';

function SlideItemAbout({ data }) {
    return (
        <div className='flex justify-center w-full'>
            <div className='w-1/2'>
                <img src={data.img} />
            </div>
            <div className='w-1/2 px-5 bg-[#ED7542] text-white '>
                <div className='flex flex-col justify-center gap-10 text-left h-140 '>
                    <h1 className='text-[56px] font-bold'>{data.title}</h1>
                    <p className='text-[20px] font-semibold'>
                        {data.decription}
                    </p>
                    <div className='flex justify-center items-center gap-1 '>
                        <Link to={data.routeText}>XEM THÊM</Link>
                        <img
                            src={iconArrow}
                            alt='icon arrow'
                            className='w-6.5 '
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideItemAbout;
