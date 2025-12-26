import Logo from '@assets/images/logo.png';
import Menu from './Menu/Menu';
import { dataMenu } from './constants';
import userIcon from '@assets/icons/user-icon.svg';
import { Button, Modal, Tooltip, Input, Form } from 'antd';
import { Link } from 'react-router';
import { useState } from 'react';
import Password from 'antd/es/input/Password';
import imgVN from '@assets/images/vn.png';

function MyHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const text = <span>Đăng nhập</span>;
    return (
        <div className='container bg-[#FFFFFF] w-full flex justify-center items-center m-auto '>
            <div className='containerHeader flex justify-center items-center gap-20 h-21 w-full '>
                <div>
                    <img src={Logo} alt='Logo' className='w-95' />
                </div>
                <div className='containerMenu flex justify-center item-center gap-5 text-[16px] font-bold'>
                    {dataMenu.map(item => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>

                <div>
                    <Tooltip placement='bottom' title={text}>
                        <div
                            className=' cursor-pointer'
                            style={{ fontSize: '30px' }}
                        >
                            <img
                                src={userIcon}
                                alt='userIcon'
                                className='w-10'
                                onClick={showModal}
                            />
                        </div>
                        <div>
                            <Modal
                                title={null}
                                footer={
                                    <Button
                                        style={{
                                            width: '100%',
                                            height: '50px',
                                            fontSize: '12px',
                                            background: '#EE7442',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        ĐĂNG NHẬP
                                    </Button>
                                }
                                open={isModalOpen}
                                onCancel={() => setIsModalOpen(false)}
                            >
                                <div className='text-center mx-5 my-5'>
                                    <h1 className='text-[32px] font-semibold'>
                                        Đăng nhập
                                    </h1>
                                    <p className='text-[14px] text-[#878787] mt-2'>
                                        Bạn chưa có tài khoản?{' '}
                                        <span className='text-[16px] text-black font-semibold'>
                                            {' '}
                                            <Link to='/register'>Đăng ký</Link>
                                        </span>{' '}
                                        miễn phí
                                    </p>
                                    <Form>
                                        <Form.Item
                                            name='username'
                                            rules={[
                                                {
                                                    type: 'text',
                                                    required: true,
                                                    message:
                                                        'Vui lòng nhập tài khoản của bạn'
                                                }
                                            ]}
                                        >
                                            <div className='flex justify-center items-center  h-12.5 border-2 border-[#878787] rounded-[5px] mt-10 pl-2 '>
                                                <img
                                                    src={imgVN}
                                                    className='w-6 ml-3'
                                                    alt='logo VN'
                                                />
                                                <Input
                                                    placeholder='Tên đăng nhập'
                                                    style={{ border: 'none' }}
                                                />
                                            </div>
                                        </Form.Item>
                                        <Form.Item
                                            name='password'
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        'Vui lòng nhập mật khẩu của bạn'
                                                }
                                            ]}
                                        >
                                            <Input.Password
                                                placeholder='Mật khẩu'
                                                type={Password}
                                                style={{
                                                    border: 'solid 2px #878787 ',
                                                    height: '50px',
                                                    paddingLeft: '20px'
                                                }}
                                            />
                                        </Form.Item>
                                    </Form>
                                    <div className='text-right mt-5'>
                                        <a
                                            href=''
                                            alt=''
                                            className='text-black'
                                        >
                                            Bạn quên mật khẩu?
                                        </a>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
