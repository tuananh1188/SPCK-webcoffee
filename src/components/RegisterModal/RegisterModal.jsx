// src/components/RegisterModal/RegisterModal.jsx
import React, { useState } from 'react';
import { Modal, Form, Input, Button, DatePicker, Select, message } from 'antd';

const BASE_URL = 'https://693e793f12c964ee6b6d7672.mockapi.io';

function RegisterModal({ open, onClose, onRegisterSuccess }) {
    const [loading, setLoading] = useState(false);

    const handleRegister = async values => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}/dataUsers`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });

            if (response.ok) {
                const newUser = await response.json();
                localStorage.setItem('user', JSON.stringify(newUser));
                message.success('Đăng ký thành công!');
                onRegisterSuccess(newUser); // báo cho Header biết user đã đăng ký
                onClose(); // đóng modal
            } else {
                message.error('Đăng ký thất bại, vui lòng thử lại');
            }
        } catch (error) {
            message.error('Có lỗi xảy ra, vui lòng thử lại');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title={null}
            open={open}
            onCancel={onClose}
            footer={null}
            centered
        >
            <div className='text-center mx-5 my-5'>
                <h1 className='text-[32px] font-semibold text-[#EE7442]'>
                    Đăng ký
                </h1>
                <p className='text-[14px] text-[#878787] mt-2'>
                    Đã có tài khoản?{' '}
                    <span className='text-[16px] text-black font-semibold'>
                        <a href='/login'>Đăng nhập</a>
                    </span>
                </p>
                <Form onFinish={handleRegister} layout='vertical'>
                    <Form.Item
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên đăng nhập'
                            }
                        ]}
                    >
                        <Input
                            placeholder='Tên đăng nhập'
                            className='h-11 rounded-md border-[#EE7442]'
                        />
                    </Form.Item>

                    <Form.Item
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu'
                            }
                        ]}
                    >
                        <Input.Password
                            placeholder='Mật khẩu'
                            className='h-11 rounded-md border-[#EE7442]'
                        />
                    </Form.Item>

                    <Form.Item
                        name='email'
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Vui lòng nhập email hợp lệ'
                            }
                        ]}
                    >
                        <Input
                            placeholder='Email'
                            className='h-11 rounded-md border-[#EE7442]'
                        />
                    </Form.Item>

                    <Form.Item
                        name='phone'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại'
                            }
                        ]}
                    >
                        <Input
                            placeholder='Số điện thoại'
                            className='h-11 rounded-md border-[#EE7442]'
                        />
                    </Form.Item>

                    <Form.Item
                        name='dob'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng chọn ngày sinh'
                            }
                        ]}
                    >
                        <DatePicker
                            placeholder='Ngày sinh'
                            className='w-full h-11 rounded-md border-[#EE7442]'
                            format='DD/MM/YYYY'
                        />
                    </Form.Item>

                    <Form.Item
                        name='gender'
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng chọn giới tính'
                            }
                        ]}
                    >
                        <Select
                            placeholder='Giới tính'
                            className='h-11 rounded-md border-[#EE7442]'
                        >
                            <Select.Option value='male'>Nam</Select.Option>
                            <Select.Option value='female'>Nữ</Select.Option>
                            <Select.Option value='other'>Khác</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            block
                            loading={loading}
                            style={{
                                backgroundColor: '#EE7442',
                                borderColor: '#EE7442',
                                height: '45px',
                                fontWeight: 'bold'
                            }}
                        >
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
}

export default RegisterModal;
