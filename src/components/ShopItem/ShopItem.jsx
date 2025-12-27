import React from 'react';

function ShopItem({ image, name, address, open }) {
    return (
        <div className='w-1/4 h-130 px-5 py-10 bg-amber-100 flex flex-col justify-around items-center rounded-2xl cursor-pointer'>
            <div>
                <img src={image} className='w-65 h-50 rounded-2xl ' />
            </div>
            <div className='text-left'>
                <p className='text-[24px] font-bold mt-5 '>{name}</p>
                <p className='text-[16px] w-50 mt-5'>{address}</p>
                <p className='mt-5'>{open}</p>
            </div>
        </div>
    );
}

export default ShopItem;
