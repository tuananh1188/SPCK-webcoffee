import React, { useState, useEffect } from 'react';
import TextCurved from '@components/TextCurved/TextCurved';
import SlideCommon from '@components/SlideCommon/SlideCommon';
import SlideAbout from '@components/SlideAbout/SlideAbout';
import iconArrowBlack from '@assets/icons/arrow-right-black.svg';
import { Link } from 'react-router';
import { Spin } from 'antd';

const listTypes = [
    'CÀ PHÊ',
    'TRÀ',
    'LATTE & FRAPPE',
    'SIGNATURE FOOD',
    'PASTRY & MORE'
];

const BASE_URL = 'https://693e793f12c964ee6b6d7672.mockapi.io';

function SectionHomeCollection() {
    const [selectedType, setSelectedType] = useState('CÀ PHÊ');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/dataProducts`);
            const data = await res.json();

            if (Array.isArray(data)) {
                const filtered = data.filter(
                    p => p.type.toLowerCase() === selectedType.toLowerCase()
                );
                setProducts(filtered);
            } else {
                alert(data);
            }
        } catch {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [selectedType]);

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
            <div className='flex justify-center items-center gap-20 text-[#000000] font-bold mt-10'>
                {listTypes.map((type, index) => (
                    <button
                        key={index}
                        className={`cursor-pointer ${
                            selectedType === type
                                ? 'underline'
                                : 'hover:underline'
                        }`}
                        onClick={() => {
                            setSelectedType(type);
                        }}
                    >
                        <div className='text-[28px] font-bold'>{type}</div>
                    </button>
                ))}
            </div>

            <div className='w-3/5'>
                <SlideCommon data={products} isProductItem numberShow={4} />
            </div>
            <div className='flex justify-center items-center gap-1 '>
                <Link
                    to='/products'
                    className='text-[16px] font-bold underline  '
                >
                    XEM THÊM
                </Link>
                <img src={iconArrowBlack} alt='icon arrow' className='w-6.5' />
            </div>
            <SlideAbout />
            {loading && <Spin size='large' percent='auto' fullscreen />}
        </div>
    );
}

export default SectionHomeCollection;
