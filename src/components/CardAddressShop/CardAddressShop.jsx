import React from 'react';

function CardAddressShop(props) {
    const dataCardAddressShop = props.data;
    return (
        <div className=' text-center'>
            <div className='flex flex-wrap justify-center gap-20 mt-10 m-auto'>
                {dataCardAddressShop.map(item => (
                    <div
                        key={item.id}
                        className='w-1/4 px-5 py-5 bg-amber-100 flex flex-col items-center rounded-2xl cursor-pointer'
                    >
                        <img src={item.img} className='w-65 ' />
                        <div className='text-left'>
                            <p className='text-[24px] font-bold mt-5 '>
                                {item.name}
                            </p>
                            <p className='text-[16px] w-50 mt-5'>
                                {item.address}
                            </p>
                            <p className='mt-5'>{item.open}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardAddressShop;
