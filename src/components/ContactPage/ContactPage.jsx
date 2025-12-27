import React from 'react';
import logoCT from '@assets/images/banner-contact.png';
import logoCFH from '@assets/images/logo-contact-tch.png';

function ContactPage() {
    return (
        <div className='flex justify-center gap-10 px-20 my-20'>
            <div className='w-1/2'>
                <img src={logoCFH} />
                <p className='mt-10'>
                    <span>VPGG:</span> Tầng 6, Toà nhà Toyota, Số 315 Trường
                    Chinh, P.Khương Mai, Q.Thanh Xuân, TP Hà Nội, Việt Nam
                </p>
                <p className='mt-5'>
                    <span>Đặt hàng:</span>1800 6936
                </p>
                <p>Email: support.hn@ggg.com.vn</p>
                <img src={logoCT} className='mt-10' />
            </div>
            <div className='w-1/2 flex flex-col gap-3 mt-8'>
                <input
                    type='text'
                    placeholder='Tên của bạn'
                    className='border-2 border-[#615f5f] px-5 py-5 rounded-4xl'
                />
                <input
                    type='email'
                    placeholder='Email của bạn'
                    className='border-2 border-[#615f5f] px-5 py-5 rounded-4xl'
                />
                <input
                    type='number'
                    placeholder='Số điện thoại của bạn'
                    className='border-2 border-[#615f5f] px-5 py-5 rounded-4xl'
                />
                <input
                    type='text'
                    placeholder='Nội dung'
                    className='border-2 border-[#615f5f] px-5 py-20 rounded-4xl'
                />
                <button className='text-center text-[24px] mt-5 text-white bg-amber-600 w-20 h-10 rounded-3xl '>
                    GỬI
                </button>
            </div>
        </div>
    );
}

export default ContactPage;
