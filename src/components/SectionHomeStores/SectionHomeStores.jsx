import React from 'react';
import imgSticker5 from '@assets/images/stickerset_stores-2.png';
import imgSticker6 from '@assets/images/stickerset-stores3.png';
import imgSticker7 from '@assets/images/stickerset-stores_1.png';
import { Select } from 'antd';
import iconArrow from '@assets/icons/arrow-right-icon.svg';
import { Link } from 'react-router';

const handleChange = value => {
    console.log(`selected ${value}`);
};

function SectionHomeStores() {
    return (
        <div className='relative py-20'>
            <div className='flex justify-center gap-20'>
                <div className='text-center'>
                    <h1 className='text-[56px] font-bold'>
                        Tìm nhà gần <br /> bạn
                    </h1>
                    <p className='text-[16px] font-semibold'>
                        Dù bạn ở đâu, “Nhà” cũng luôn ở gần.
                        <br />
                        Hãy tìm một góc Nhà để nhâm nhi tách cà phê, lắng nghe
                        <br /> bản nhạc quen và tận hưởng những khoảnh khắc nhỏ
                        vui vẻ <br /> trong ngày.
                    </p>
                </div>
                <div>
                    <div>
                        <Select
                            defaultValue='Chọn Thành Phố'
                            style={{ width: 370, height: 50 }}
                            onChange={handleChange}
                            options={[
                                { value: 'Hà Nội', label: 'Hà Nội' },
                                {
                                    value: 'Thành phố Hồ Chí Minh',
                                    label: 'Hồ Chí Minh'
                                },
                                { value: 'Hải Phòng', label: 'Hải Phòng' },
                                { value: 'Hưng Yên', label: 'Hưng Yên' }
                            ]}
                        />
                    </div>
                    <div>
                        <Select
                            defaultValue='Chọn Phường/Xã(Sau Sát Nhập)'
                            style={{ width: 370, height: 50 }}
                            onChange={handleChange}
                            options={[
                                { value: 'Cầu Giấy', label: 'Cầu Giấy' },
                                { value: 'Bạch Mai', label: 'Bạch Mai' },
                                { value: 'Đống Đa', label: 'Đống Đa' },
                                { value: 'Cửa Nam', label: 'Cửa Nam' }
                            ]}
                        />
                    </div>
                    <div className='mt-5 text-left p-2 flex justify-start items-center gap-1'>
                        <Link to='/shops'>XEM DANH SÁCH CỬA HÀNG</Link>
                        <img
                            src={iconArrow}
                            alt='icon arrow'
                            className='w-6.5 '
                        />
                    </div>
                </div>
            </div>
            <img src={imgSticker5} className='w-23 absolute top-0 left-20' />
            <img src={imgSticker6} className='w-25.5 absolute top-0 right-20' />
            <img
                src={imgSticker7}
                className='w-30 absolute -bottom-10 left-150'
            />
        </div>
    );
}

export default SectionHomeStores;
