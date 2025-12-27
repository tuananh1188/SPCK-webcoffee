import React from 'react';

function ProductItem({ image, type, category, name, price, showCategory }) {
    return (
        <>
            <div className='flex flex-col justify-between gap-5 mt-20'>
                <div>
                    <img
                        src={image}
                        className='w-80.5 hover:scale-[1.1] cursor-pointer object-cover'
                    />
                </div>
                <div>
                    <p className='text-[14px] text-[#434343] font-bold '>
                        {type}
                    </p>
                </div>
                {showCategory && <div>{category}</div>}
                <div>
                    <p className='text-[20px] text-[#000000] font-bold'>
                        {name}
                    </p>
                </div>
                <div>
                    <p className='text-[20px] text-[#ED7542] font-bold '>
                        {price} đ
                    </p>
                </div>
            </div>
        </>
    );
}

export default ProductItem;
