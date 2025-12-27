// src/components/LoginModal/LoginModal.jsx
import React, { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '@components/ProductGrid/ProductGrid';


function LoginModal({ open, onClose, onLoginSuccess, onOpenRegister }) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async values => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}/dataUsers`);
            const users = await response.json();
            const foundUser = users.find(
                u =>
                    u.username === values.username &&
                    u.password === values.password
            );
            if (foundUser) {
                localStorage.setItem('user', JSON.stringify(foundUser));
                message.success('Đăng nhập thành công!');
                onLoginSuccess(foundUser);
                onClose();
                navigate('/home'); // ✅ chuyển hướng sang Home
            } else {
                message.error('Sai tên đăng nhập hoặc mật khẩu');
            }
        } catch {
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
                    Đăng nhập
                </h1>
                <Form onFinish={handleLogin} layout='vertical'>
                    <Form.Item
                        name='username'
                        rules={[
                            { required: true, message: 'Nhập tên đăng nhập' }
                        ]}
                    >
                        <Input
                            placeholder='Tên đăng nhập'
                            className='h-11 rounded-md border-[#EE7442]'
                        />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: 'Nhập mật khẩu' }]}
                    >
                        <Input.Password
                            placeholder='Mật khẩu'
                            className='h-11 rounded-md border-[#EE7442]'
                        />
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
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>

                {/* Chữ Đăng ký */}
                <p className='mt-4 text-gray-600'>
                    Bạn chưa có tài khoản?{' '}
                    <span
                        className='cursor-pointer text-[#EE7442] font-semibold'
                        onClick={() => {
                            onClose(); // đóng login modal
                            onOpenRegister(); // mở register modal
                        }}
                    >
                        Đăng ký
                    </span>
                </p>
            </div>
        </Modal>
    );
}

export default LoginModal;
