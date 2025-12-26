// src/pages/Profile.jsx
import React from 'react';

function Profile() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <h2 className='text-xl font-semibold text-gray-600'>
                    Bạn cần đăng nhập để xem trang này
                </h2>
            </div>
        );
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white shadow-lg rounded-lg w-full max-w-md p-6'>
                <h1 className='text-2xl font-bold text-[#EE7442] mb-4 text-center'>
                    Thông tin cá nhân
                </h1>
                <div className='space-y-4'>
                    <div className='flex justify-between border-b pb-2'>
                        <span className='font-semibold text-gray-700'>
                            Tên đăng nhập:
                        </span>
                        <span className='text-gray-600'>{user.username}</span>
                    </div>
                    <div className='flex justify-between border-b pb-2'>
                        <span className='font-semibold text-gray-700'>
                            Email:
                        </span>
                        <span className='text-gray-600'>
                            {user.email || 'Chưa cập nhật'}
                        </span>
                    </div>
                    <div className='flex justify-between border-b pb-2'>
                        <span className='font-semibold text-gray-700'>
                            Số điện thoại:
                        </span>
                        <span className='text-gray-600'>
                            {user.phone || 'Chưa cập nhật'}
                        </span>
                    </div>
                    <div className='flex justify-between border-b pb-2'>
                        <span className='font-semibold text-gray-700'>
                            Ngày sinh:
                        </span>
                        <span className='text-gray-600'>
                            {user.dob || 'Chưa cập nhật'}
                        </span>
                    </div>
                    <div className='flex justify-between border-b pb-2'>
                        <span className='font-semibold text-gray-700'>
                            Giới tính:
                        </span>
                        <span className='text-gray-600'>
                            {user.gender || 'Chưa cập nhật'}
                        </span>
                    </div>
                </div>
                <div className='mt-6 text-center'>
                    <button className='px-4 py-2 bg-[#EE7442] text-white font-semibold rounded-md hover:bg-orange-600 transition'>
                        Chỉnh sửa thông tin
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
