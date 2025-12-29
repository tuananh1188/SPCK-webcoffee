import React, { useState } from 'react';
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
    const [selectedType, setSelectedType] = useState('MUST TRY');
    const [selectedCategory, setSelectedCategory] = useState("TODAY'S SPECIAL");

    return (
        <div className='bg-[#FCF9EB]'>
            {/* Banner */}
            <div>
                <img
                    src={imgBannerProduct}
                    alt='img banner product'
                    className='w-full object-cover'
                />
            </div>

            <div className='min-h-screen py-10 md:py-20 max-w-300 mx-auto'>
                {/* Header */}
                <header className='flex flex-col md:flex-row justify-center gap-6 md:gap-20 items-center bg-[#FCF9EB] sticky top-0 z-10 p-4'>
                    <div className='font-bold text-center md:text-left'>
                        <h3 className='text-sm md:text-base'>MỜI BẠN CHỌN</h3>
                        <h3 className='text-2xl md:text-4xl text-[#ED7542] mt-2'>
                            "NHÀ"
                            <br />
                            COLLECTION
                        </h3>
                    </div>
                    <nav className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-15'>
                        {nav_items.map((item, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full border border-[#ED7542] cursor-pointer transition-colors ${
                                    selectedType === item.label
                                        ? 'bg-[#ED7542] text-white'
                                        : 'bg-white text-[#ED7542]'
                                }`}
                                onClick={() => {
                                    setSelectedType(item.label);
                                    setSelectedCategory('');
                                }}
                            >
                                <div className='flex gap-2 items-center'>
                                    {item.icon && (
                                        <img
                                            src={item.icon}
                                            className='w-5 md:w-6'
                                            alt={item.label}
                                        />
                                    )}
                                    <span className='text-sm md:text-base font-bold'>
                                        {item.label}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </nav>
                </header>

                {/* Main content */}
                <main className='grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 md:gap-20 p-4 md:p-6 mt-10'>
                    <aside>
                        <Sidebar
                            selectedCategory={selectedCategory}
                            onSelectCategoty={setSelectedCategory}
                            type={selectedType}
                        />
                    </aside>
                    <section>
                        <h2 className='text-2xl md:text-3xl font-semibold text-black mb-6'>
                            {selectedCategory || selectedType}
                        </h2>
                        <ProductGrid
                            type={selectedType}
                            category={selectedCategory}
                        />
                    </section>
                </main>
            </div>
        </div>
    );
}

export default ProductPage;
