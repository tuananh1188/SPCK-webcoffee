import React, { useState, useRef } from 'react';
import imgBannerProduct from '@assets/images/banner-collection.jpg';
import iconCoffee from '@assets/icons/coffee-icon.svg';
import iconHotCoffee from '@assets/icons/coffee-hot-icon.svg';
import iconPizza from '@assets/icons/pizza-icon.svg';
import iconTea from '@assets/icons/tea-icon.svg';
import Sidebar from '@components/Sidebar/Sidebar';
import ProductGrid from '@components/ProductGrid/ProductGrid';

const nav_items = [
    { label: 'MUST TRY', icon: iconHotCoffee },
    { label: 'CÀ PHÊ', icon: iconCoffee },
    { label: 'TRÀ', icon: iconTea },
    { label: 'ĐỒ ĂN', icon: iconPizza },
    { label: 'KHÁC' }
];

function ProductPage() {
    const [selectedType, setSelectedType] = useState('MUST TRY')
    const [selectedCategory, setSelectedCategory] = useState('ESPRESS');
    const productRef = useRef(null);

    const handleSelectType = (type) => {
        setSelectedType(type);
        setSelectedCategory('');
        productRef.current?.scrollIntoView({ behavior: 'smooth' ,block: 'start'});
    };

    return (
        <div>
            <div>
                <img
                    src={imgBannerProduct}
                    alt='img banner product'
                    className='w-full'
                />
            </div>
            <div className='min-h-screen py-10 '>
                <header className='flex justify-around items-center sticky top-0 z-10 '>
                    <div className='font-bold'>
                        <h3>MỜI BẠN CHỌN</h3>
                        <h3 className='text-[36px] text-[#ED7542] mt-2'>
                            "NHÀ"
                            <br />
                            COLLECTION
                        </h3>
                    </div>
                    <nav className='flex gap-20'>
                        {nav_items.map((item, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full border border-[#ED7542] cursor-pointer ${
                                    selectedType === item.label
                                        ? 'bg-[#ED7542] text-[#FFFFFF]'
                                        : 'bg-[#FFFFFF] text-[#ED7542]'
                                }`}
                                onClick={() => {
                                 setSelectedType(item.label);
                                 setSelectedCategory('');
                                 handleSelectType(item.label);
                                }}
                            >
                                <div className='flex gap-2 items-center'>
                                    {item.icon && (<div>
                                        <img src={item.icon} className='w-6' alt={item.label} />
                                    </div>)}
                                    <div>{item.label}</div>
                                </div>
                            </button>
                        ))}
                         
                    </nav>
                </header>

                <main className='grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 p-6 '>
                    <aside className=''>
                        <Sidebar
                            selectedCategory={selectedCategory}
                            onSelectCategoty={setSelectedCategory}
                            type={selectedType}
                        />
                    </aside>
                    <section className='' ref={productRef}>
                      <div className=''>
                        <h2 className=''>{selectedCategory || selectedType}</h2>
                      </div>
                      <ProductGrid type={selectedType} category={selectedCategory}/>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default ProductPage;
