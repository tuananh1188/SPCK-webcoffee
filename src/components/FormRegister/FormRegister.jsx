import { Form, Input, Select, DatePicker, Button } from 'antd';
import React from 'react';

const BASE_URL = 'https://693e793f12c964ee6b6d7672.mockapi.io';

function FormRegister() {
    const onRegister = async values => {
        if (values.password !== values.confirmPassword) {
            alert('Mật khẩu xác nhận không khớp');
            return;
        }
        try {
            const response = await fetch(`${BASE_URL}/dataUsers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: values.username,
                    email: values.email,
                    phone: values.phone,
                    password: values.password,
                    dateOfBirth: values.dateOfBirth.format('DD-MM-YYYY'),
                    gender: values.gender
                })
            });

            const newUser = await response.json();
            alert('Đăng ký thành công!');
            console.log('User registered:', newUser);

            window.location.href = '/login';
        } catch (error) {
            alert('Đăng ký thất bại!');
            console.error(error);
        }
    };

    return (
        <div className='register-container'>
            <h1>Đăng ký</h1>
            <Form onFinish={onRegister}>
                <Form.Item
                    name='username'
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên đăng nhập'
                        }
                    ]}
                >
                    <Input placeholder='Tên dăng nhập' />
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
                    <Input placeholder='Email' />
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
                    <Input placeholder='Số điện thoại' />
                </Form.Item>

                <Form.Item
                    name='dateOfBirth'
                    rules={[
                        { required: true, message: 'Vui lòng chọn ngày sinh' }
                    ]}
                >
                    <DatePicker
                        placeholder='Ngày sinh'
                        style={{ width: '100%' }}
                    />
                </Form.Item>

                <Form.Item
                    name='gender'
                    rules={[
                        { required: true, message: 'Vui lòng chọn giới tính' }
                    ]}
                >
                    <Select placeholder='Giới tính'>
                        <Select.Option value='male'>Nam</Select.Option>
                        <Select.Option value='female'>Nữ</Select.Option>
                        <Select.Option value='other'>Khác</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[
                        { required: true, message: 'Vui lòng nhập mật khẩu' }
                    ]}
                >
                    <Input.Password placeholder='Mật Khẩu' />
                </Form.Item>

                <Form.Item
                    name='confirmPassword'
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập lại mật khẩu'
                        }
                    ]}
                >
                    <Input.Password placeholder='Xác nhận mật khẩu' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormRegister;
