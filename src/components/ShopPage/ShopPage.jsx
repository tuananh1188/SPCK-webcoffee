import React, { useEffect, useState } from 'react';
import { message, Select, Space, Spin } from 'antd';
import ShopItem from '@components/ShopItem/ShopItem';
import { BASE_URL } from '@components/SectionHomeCollection/SectionHomeCollection';

const handleChange = value => {
    console.log(`selected ${value}`);
};
function ShopPage() {
    const [shop, setShop] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/dataAddressShop`);
            const data = await res.json();

            if (Array.isArray(data)) {
                setShop(data);
            } else {
                message.error('có lỗi xảy ra');
            }
        } catch (error) {
            message.error('có lỗi xảy ra');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='text-center bg-amber-50 py-10 '>
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
            <div className=' flex flex-wrap justify-around items-center gap-5 mt-10'>
                {shop.map((item, index) => (
                    <ShopItem
                        key={index}
                        image={item.image}
                        name={item.name}
                        address={item.address}
                        open={item.open}
                    />
                ))}
                {shop.length === 0 && (
                    <p className='text-gray-400'>
                        Chưa có cửa hàng ở khu vực này
                    </p>
                )}
                {loading && <Spin size='large' percent='auto' fullscreen />}
            </div>
        </div>
    );
}

export default ShopPage;
