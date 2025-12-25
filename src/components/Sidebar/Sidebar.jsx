import React from 'react';

const categoriesByType = {
    'MUST TRY': ["TODAY'S SPECIAL"],
    'CÀ PHÊ': ["ESPRESSO", "AMERICANO","LATTE", "FRAPPE - FRAPPE", '"PHIN" VIỆT NAM', "COLD BREW"],
    'TRÀ': ['MATCHA TÂY BẮC', 'MATCHAKYOTO', 'TRÀ TRÁI CÂY', 'TRÀ SỮA', 'CHOCOLATE'],
    'ĐỒ ĂN': ['BÁNH NGỌT', 'BÁNH MẶN', 'PASTA','PIZZA','SALAD'],
    'KHÁC': ['Merchandise']
};

function Sidebar({ selectedCategory, onSelectCategoty, type }) {
    const categories = categoriesByType[type] || [];
    return (
        <div className='text-[20px] ml-20'>
            <h3 className='text-[#ED7452] font-bold mb-3'>CÀ PHÊ</h3>
            <ul className='space-y-2 font-semibold'>
                {categories.map((cat,index) => (
                    <li
                        key={index}
                        onClick={() => onSelectCategoty(cat)}
                        className={`px-3 py-2 cursor-pointer ${
                            selectedCategory === cat
                                ? 'underline'
                                : 'hover: underline'
                        }`}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
