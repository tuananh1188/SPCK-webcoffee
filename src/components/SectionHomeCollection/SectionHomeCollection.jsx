import { listCategories } from '@components/SectionHomeCollection/constants';
import React from 'react';
import Menu from '@components/Header/Menu/Menu';
import TextCurved from '@components/TextCurved/TextCurved';
import SlideCommon from '@components/SlideCommon/SlideCommon';
import SlideAbout from '@components/SlideAbout/SlideAbout';
import iconArrow from '@assets/icons/arrow-right-icon.svg';
import { Link } from 'react-router';

const dataProducts = [
    {
        image: 'https://i.postimg.cc/x1Zj7Fmg/a-me-mo-12544504de6947ae9090b070228d4613-grande.png',
        category: 'Cà Phê',
        name: 'A-Mê Đào',
        price: 49000,
        id: 1
    },
    {
        image: 'https://i.postimg.cc/x1Zj7Fmg/a-me-mo-12544504de6947ae9090b070228d4613-grande.png',
        category: 'Cà Phê',
        name: 'Ethiopia Americano Đá',
        price: 34500,
        id: 2
    },
    {
        image: 'https://i.postimg.cc/x1Zj7Fmg/a-me-mo-12544504de6947ae9090b070228d4613-grande.png',
        category: 'Cà Phê',
        name: 'Ethiopia Americano Nóng',
        price: 49000,
        id: 3
    },
    {
        image: 'https://i.postimg.cc/x1Zj7Fmg/a-me-mo-12544504de6947ae9090b070228d4613-grande.png',
        category: 'Pizza',
        name: 'Pizza 5 Cheese',
        price: 39000,
        id: 4
    },
    {
        image: 'https://i.postimg.cc/x1Zj7Fmg/a-me-mo-12544504de6947ae9090b070228d4613-grande.png',
        category: 'Cà Phê',
        name: 'Espresso Nóng',
        price: 45000,
        id: 5
    }
];

function SectionHomeCollection() {
    return (
        <div className='section-home-collection h-full bg-[#FCF9EB] flex flex-col justify-start items-center'>
            <div>
                <TextCurved
                    text={'FEATURED PRODUCT'}
                    width={500}
                    height={200}
                    fontSize={28}
                />
            </div>
            <div>
                <h1 className='text-[56px] text-[#EE7442] font-bold'>
                    “NHÀ” COLLECTION
                </h1>
            </div>
            <div className='flex justify-center items-center gap-20 text-[28px] text-[#000000] font-bold mt-10'>
                {listCategories.map(item => {
                    return <Menu content={item.content} href={item.href} />;
                })}
            </div>
            <div className='w-3/5'>
                <SlideCommon data={dataProducts} isProductItem numberShow={4} />
            </div>
            <div className='flex justify-center items-center gap-1 '>
                <Link to='/products' className='text-[16px] font-bold underline  '>
                    XEM THÊM
                </Link>
                <img src={iconArrow} alt='icon arrow' className='w-6.5' />
            </div>
            <SlideAbout />
        </div>
    );
}

export default SectionHomeCollection;
