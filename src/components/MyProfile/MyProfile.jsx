// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import { message } from 'antd';

function Profile() {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        dob: '',
        gender: ''
    });

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            const parsed = JSON.parse(savedUser);
            setUser(parsed);
            setFormData(parsed);
        }
    }, []);

    if (!user) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <h2 className='text-xl font-semibold text-gray-600'>
                    Bạn cần đăng nhập để xem trang này
                </h2>
            </div>
        );
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        localStorage.setItem('user', JSON.stringify(formData));
        setUser(formData);
        setIsEditing(false);
        message.success('Thông tin cá nhân đã được cập nhật!');
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white shadow-lg rounded-lg w-full max-w-md p-6'>
                <h1 className='text-2xl font-bold text-[#EE7442] mb-4 text-center'>
                    Thông tin cá nhân
                </h1>

                {!isEditing ? (
                    <div className='space-y-4'>
                        <div className='flex justify-between border-b pb-2'>
                            <span className='font-semibold text-gray-700'>
                                Tên đăng nhập:
                            </span>
                            <span className='text-gray-600'>
                                {user.username}
                            </span>
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
                        <div className='mt-6 text-center'>
                            <button
                                className='px-4 py-2 bg-[#EE7442] text-white font-semibold rounded-md hover:bg-orange-600 transition'
                                onClick={() => setIsEditing(true)}
                            >
                                Chỉnh sửa thông tin
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='space-y-4'>
                        <label className='flex flex-col'>
                            <span className='font-semibold'>Tên đăng nhập</span>
                            <input
                                type='text'
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                                className='border rounded px-3 py-2'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-semibold'>Email</span>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='border rounded px-3 py-2'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-semibold'>Số điện thoại</span>
                            <input
                                type='text'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                className='border rounded px-3 py-2'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-semibold'>Ngày sinh</span>
                            <input
                                type='date'
                                name='dob'
                                value={formData.dob}
                                onChange={handleChange}
                                className='border rounded px-3 py-2'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-semibold'>Giới tính</span>
                            <select
                                name='gender'
                                value={formData.gender}
                                onChange={handleChange}
                                className='border rounded px-3 py-2'
                            >
                                <option value=''>-- Chọn giới tính --</option>
                                <option value='male'>Nam</option>
                                <option value='female'>Nữ</option>
                                <option value='other'>Khác</option>
                            </select>
                        </label>
                        <div className='mt-6 flex justify-center gap-4'>
                            <button
                                className='px-4 py-2 bg-gray-400 text-white font-semibold rounded-md hover:bg-gray-500 transition'
                                onClick={() => setIsEditing(false)}
                            >
                                Hủy
                            </button>
                            <button
                                className='px-4 py-2 bg-[#EE7442] text-white font-semibold rounded-md hover:bg-orange-600 transition'
                                onClick={handleSave}
                            >
                                Lưu thay đổi
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
