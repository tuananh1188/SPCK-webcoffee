import React from 'react';
import {
    FacebookOutlined,
    YoutubeOutlined,
    InstagramOutlined
} from '@ant-design/icons';
import imgSQR from '@assets/images/6b68dfb838acb5f2ecbd.jpg';
import imgLogo from '@assets/images/footer-logo.png';

function MyFooter() {
    return (
        <div className='bg-black'>
            <div className='text-white pb-5 w-2/3 m-auto'>
                <div className='flex justify-center py-10 text-[12px] font-semibol '>
                    <div className='w-1/6'>
                        <h1 className='text-[16px] text-[#EE7442] font-bold'>
                            GIỚI THIỆU
                        </h1>
                        <div className='mt-5'>
                            <a href=''>Về Chúng Tôi</a>
                        </div>
                        <div className='mt-2'>
                            <a href=''>Sản phẩm</a>
                        </div>
                        <div className='mt-2'>
                            <a href=''>Khuyến mãi</a>
                        </div>
                        <div className='mt-2'>
                            <a href=''>Chuyện cà phê</a>
                        </div>
                        <div className='mt-2'>
                            <a href=''>Cửa Hàng</a>
                        </div>
                        <div className='mt-2'>
                            <a href=''>Tuyển dụng</a>
                        </div>
                    </div>
                    <div className='w-1/6 mr-5'>
                        <h1 className='text-[16px] text-[#EE7442] font-bold'>
                            ĐIỀU KHOẢN
                        </h1>
                        <div className='mt-5'>
                            <a href=''>Điều khoản sử dụng</a>
                        </div>
                        <div className='mt-2'>
                            <a href=''>Chính sách bảo mật thông tin</a>
                        </div>
                        <div className='mt-2'>
                            <a href=''>Hướng dẫn xuất hoá đơn GTGT</a>
                        </div>
                    </div>
                    <div className='w-2/6 text-[16px]'>
                        <h1 className='text-[#EE7442] font-bold'>
                            2025 THE COFFEE HOUSE
                        </h1>
                        <p className='mt-5'>
                            <span className='text-[#EE7442] font-bold'>
                                VPGG:{' '}
                            </span>
                            Tầng 6, Toà nhà Toyota,Sô 315 Trường Chinh,P.Khương
                            Mai,Q.Thanh Xuân,TP Hà Nội,Việt Nam
                        </p>
                        <p className='mt-5'>
                            <span className='text-[#EE7442] font-bold'>
                                Đặt hàng:{' '}
                            </span>
                            1800 6936
                        </p>
                        <p>
                            <span className='text-[#EE7442] font-bold'>
                                Email:{' '}
                            </span>
                            support.hn@ggg.com.vn
                        </p>
                    </div>
                    <div className='w-2/6 text-[16px] ml-10 text-[#EE7442] font-bold'>
                        <img src={imgLogo} className='w-65' alt='' />
                        <h1 className='mt-5'>
                            DOWNLOAD APP
                            <br />
                            THE COFFEE HOUSE APP
                        </h1>
                        <img src={imgSQR} className='w-19.25 mt-5' alt='' />
                        <h1 className='mt-5'>FOLLOW US</h1>
                        <div className='mt-5 flex gap-2'>
                            <div>
                                <FacebookOutlined
                                    style={{ fontSize: '30px', color: 'white' }}
                                />
                            </div>
                            <div>
                                <YoutubeOutlined
                                    style={{ fontSize: '30px', color: 'white' }}
                                />
                            </div>
                            <div>
                                <InstagramOutlined
                                    style={{ fontSize: '30px', color: 'white' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-amber-50'></div>
                <div className=' text-[12px] my-10 '>
                    <p>Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN</p>
                    <p>
                        Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM
                        cấp ngày 23/07/2014. Người đại diện: NGÔ NGUYÊN KHA
                    </p>
                    <p>
                        Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí
                        Minh Điện thoại: (028) 7107 8079 Email:
                        hi@thecoffeehouse.vn
                    </p>
                    <p>
                        © 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà
                        Phê VN mọi quyền bảo lưu
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyFooter;
