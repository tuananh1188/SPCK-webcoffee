import React from 'react';
import imgInsta1 from '@assets/images/instagram1.png';
import imgInsta2 from '@assets/images/instagram2.png';
import imgInsta3 from '@assets/images/instagram3.png';
import imgInsta4 from '@assets/images/instagram4.png';
import imgInsta5 from '@assets/images/instagram5.png';
import imgInsta6 from '@assets/images/instagram6.png';
import imgNew from '@assets/images/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_1024x1024.jpg';
import iconArrowBlack from '@assets/icons/arrow-right-black.svg';
import { Link } from 'react-router';

function SectionHomeInformation() {
    return (
        <div className='flex justify-center py-20 gap-20 '>
            <div className='w-2/5 font-bold'>
                <h1 className='text-[16px]'>KẾT NỐI VỚI NHÀ</h1>
                <div className='flex justify-between items-center'>
                    <p className='text-[36px] text-[#ED7542] py-5'>INSTAGRAM</p>
                    <Link to='' className='text-[16px] underline mr-5 '>
                        FOLLOW NGAY
                    </Link>
                </div>
                <div className='flex flex-wrap gap-5 mt-5 '>
                    <img
                        src={imgInsta1}
                        className='w-45 hover:scale-[1.1] transition'
                    />
                    <img
                        src={imgInsta2}
                        className='w-45 hover:scale-[1.1] transition'
                    />
                    <img
                        src={imgInsta3}
                        className='w-45 hover:scale-[1.1] transition'
                    />
                    <img
                        src={imgInsta4}
                        className='w-45 hover:scale-[1.1] transition'
                    />
                    <img
                        src={imgInsta5}
                        className='w-45 hover:scale-[1.1] transition'
                    />
                    <img
                        src={imgInsta6}
                        className='w-45 hover:scale-[1.1] transition'
                    />
                </div>
            </div>
            <div className='w-2/5 py-10  '>
                <div className='flex justify-between font-bold items-center'>
                    <h1 className='text-[36px] text-[#ED7542]'>NEWS</h1>
                    <div className='mt-5 text-left p-2 flex justify-start items-center gap-1'>
                        <Link to='' className='text-[16px] underline'>
                            XEM THÊM
                        </Link>
                        <img
                            src={iconArrowBlack}
                            alt='icon arrow'
                            className='w-6.5'
                        />
                    </div>
                </div>
                <div className='mt-10 overflow-hidden'>
                    <img
                        src={imgNew}
                        className='w-150 rounded-2xl hover:scale-[1.1] transition'
                    />
                    <div className='bg-amber-50 w-150'>
                        <h1>Coffeeholic</h1>
                        <p>
                            Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn
                            có thể tìm lại những dấu ấn thăng trầm của một Sài
                            Gòn xưa cũ. Trên những góc phố, trong các bức ảnh,
                            trong vô số tác phẩm văn chương... và dĩ nhiên trong
                            cả thiên đường ẩ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionHomeInformation;
