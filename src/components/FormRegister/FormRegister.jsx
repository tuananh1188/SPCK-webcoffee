import { message, Form, Input, Select, DatePicker, Button } from 'antd'
import React from 'react'


function FormRegister() {
    
  return (
    <div className='bg-amber-50 w-full m-auto my-10 rounded-2xl '>
       <h1 className='text-[45px] text-center pt-10 text-amber-600'>Tạo Tài Khoản Mới</h1>
       <div className='flex justify-center gap-20'>
            <div className='w-1/3 py-10'>
                <h1 className='text-[24px]'>Thông tin cá nhân</h1>
                
                <Form.Item 
                    layout='vertical'
                    name="ten"
                    label="Tên"
                    rules={[
                        {
                            required: true, message:'Đây là trường bắt buộc', whitespace: true
                        }
                    ]}
                    style={{marginTop:'40px'}}
                >
                    <Input style={{height:'40px'}} />

                </Form.Item>
                <Form.Item 
                    layout='vertical'
                    name="ho"
                    label="Họ"
                    rules={[
                        {
                            required: true, message:'Đây là trường bắt buộc', whitespace: true
                        }
                    ]}
                 >
                    <Input style={{height:'40px'}} />
                </Form.Item>
                <Form.Item
                    layout='vertical'
                    name="ngaySinh" 
                    label="Ngày Sinh" 
                    rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn ngày tháng năm sinh!',
                    },
                    ]}
                >
                    <DatePicker
                    placeholder="DD/MM/YYYY"
                    format="DD/MM/YYYY" 
                    style={{ width: '100%',height:'40px' }}
                    />
                </Form.Item>
                <Form.Item
                    layout='vertical'
                    name="gioiTinh"
                    label="Giới tính"
                    rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
                >
                    <Select
                    placeholder="select your gender"
                    defaultValue={''}
                    options={[
                        { label: 'Nam', value: 'male' },
                        { label: 'Nữ', value: 'female' },
                        { label: 'Khác', value: 'other' },
                    ]}
                    style={{height:'40px'}}
                    />
                </Form.Item>
                   
            </div>
            <div className='w-1/3 py-10'>
                <h1 className='text-[24px]'>Thông tin đăng nhập</h1>
                <Form.Item 
                    layout='vertical'
                    name="phone"
                    label="Số điện thoại"
                    rules={[
                        {
                            required: true, message:'Đây là trường bắt buộc', whitespace: true
                        }
                    ]}
                    style={{marginTop:'40px'}}
                >
                    <Input style={{height:'40px'}} />

                </Form.Item>
                 <Form.Item
                    layout='vertical'
                    name="email"
                    label="E-mail"
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ]}
                >
                    <Input style={{height:'40px'}} />
                </Form.Item>
                <Form.Item
                    layout='vertical'
                    name="password"
                    label="Password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password style={{height:'40px'}} />
                </Form.Item>

                <Form.Item
                    layout='vertical'
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password style={{height:'40px'}}/>
                </Form.Item>

                <Button style={{height:'40px',width:'full',marginTop:'20px'}}>TẠO TÀI KHOẢN</Button>
            </div>
       </div>
    </div>
  )
}

export default FormRegister;