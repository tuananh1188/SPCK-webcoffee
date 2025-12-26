import { message, Form, Input, Button } from 'antd';
import React from 'react';

const BASE_URL = 'https://693e793f12c964ee6b6d7672.mockapi.io';
function FormLogin() {
    const onLogin = async values => {
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

                alert('Đăng nhập thành công!');
                window.location.href = '/home';
            } else {
                alert('Sai tên đăng nhập hoặc mật khẩu');
            }
        } catch (error) {
            alert('Có lỗi xảy ra, vui lòng thử lại');
            console.error(error);
        }
    };
    return (
        <div className='login-container'>
            <h1>Đăng nhập</h1>
            <Form onFinish={onLogin}>
                <Form.Item
                    name='username'
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên đăng nhập'
                        }
                    ]}
                >
                    <Input placeholder='Tên đăng nhập' />
                </Form.Item>
                <Form.Item name='password' rules={[{}]}>
                    <Input.Password placeholder='Mật khẩu' />
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormLogin;
