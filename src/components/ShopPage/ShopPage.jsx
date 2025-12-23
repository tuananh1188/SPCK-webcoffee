import React from 'react';
import { Select, Space } from 'antd';
import CardAddressShop from '@components/CardAddressShop/CardAddressShop';
import imgAS1 from '@assets/images/ha-dong.jpg';
import imgAS2 from '@assets/images/private-investments-reach-new-peak.jpg';
import imgAS3 from '@assets/images/wfWBRGDb.jpg';
import imgAS4 from '@assets/images/tch-bui_thi_xuan_222d5d8f0d6e470f8429dabb244f494f_1024x1024.jpg';
import imgAS5 from '@assets/images/ha-dong.jpg';
import imgAS6 from '@assets/images/tch-bui_thi_xuan_222d5d8f0d6e470f8429dabb244f494f_1024x1024.jpg';

const dataCardAddressShop = [
    {
        id: 1,
        img: imgAS1,
        name: 'The Coffee House Go Thăng Long',
        address:
            'GO! Thăng Long, 222 Đ. Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội',
        open: '08:00-22:00'
    },
    {
        id: 2,
        img: imgAS2,
        name: 'HN Lê Thanh Nghị',
        address: '92 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội',
        open: '07:30-21:00'
    },
    {
        id: 3,
        img: imgAS3,
        name: 'HN Vincom Mega Mall Smart City',
        address:
            'L1-16A - Tầng L1 TTTM Vincom Mega Mall Smart City- Đường Đại Lộ Thăng Long, Phường Tây Mỗ, Quận Nam Từ Liêm',
        open: '07:30 - 22:30'
    },
    {
        id: 4,
        img: imgAS4,
        name: 'HN Vũ Phạm Hàm ',
        address: '60 Vũ Phạm Hàm, Yên Hoà, Cầu Giấy, Hà Nội',
        open: '07:30 - 22:30'
    },
    {
        id: 5,
        img: imgAS5,
        name: 'HN The Park Home  ',
        address: 'Lô D12 KĐT, Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội',
        open: '07:30 - 22:30'
    },
    {
        id: 6,
        img: imgAS6,
        name: 'HN Trần Kim Xuyến  ',
        address:
            'Ô số 01A1, Tầng 1, Chung cư E2-Chelsea Residences Trần Kim Xuyến, Khu ĐTM Yên Hòa, Cầu Giấy, Hà Nội, Việt Nam',
        open: '07:30 - 22:30'
    }
];

const handleChange = value => {
    console.log(`selected ${value}`);
};
function ShopPage() {
    return (
        <div className='text-center bg-amber-50 py-10'>
            <h1 className='text-[28px] font-bold'>
                Khám phá 24 cửa hàng của chúng tôi ở Hà Nội
            </h1>
            <div className='mt-5'>
                <Space wrap>
                    <Select
                        defaultValue='Chọn Thành Phố'
                        style={{ width: 370 }}
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
                    <Select
                        defaultValue='Chọn Phường/Xã(Sau Sát Nhập)'
                        style={{ width: 370 }}
                        onChange={handleChange}
                        options={[
                            { value: 'Cầu Giấy', label: 'Cầu Giấy' },
                            { value: 'Bạch Mai', label: 'Bạch Mai' },
                            { value: 'Đống Đa', label: 'Đống Đa' },
                            { value: 'Cửa Nam', label: 'Cửa Nam' }
                        ]}
                    />
                </Space>
            </div>
            <CardAddressShop data={dataCardAddressShop} />
        </div>
    );
}

export default ShopPage;
