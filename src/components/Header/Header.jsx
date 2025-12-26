import Logo from '@assets/images/logo.png';
import Menu from './Menu/Menu';
import { dataMenu } from './constants';
import userIcon from '@assets/icons/user-icon.svg';
import { Tooltip, message } from 'antd';
import { useState, useEffect } from 'react';
import LoginModal from '@components/LoginModal/LoginModal';
import RegisterModal from '@components/RegisterModal/RegisterModal';
import { Link } from 'react-router';

function MyHeader() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        message.info('Bạn đã đăng xuất');
    };

    return (
        <div className='container bg-[#FFFFFF] w-full flex justify-center items-center m-auto'>
            <div className='containerHeader flex justify-center items-center gap-20 h-21 w-full'>
                {/* Logo */}
                <div>
                    <img src={Logo} alt='Logo' className='w-95' />
                </div>

                {/* Menu */}
                <div className='containerMenu flex justify-center item-center gap-5 text-[16px] font-bold'>
                    {dataMenu.map(item => (
                        <Menu
                            key={item.href}
                            content={item.content}
                            href={item.href}
                        />
                    ))}
                </div>

                {/* User / Login */}
                <div>
                    {user ? (
                        <div className='flex items-center gap-3'>
                            <span className='font-semibold text-[16px]'>
                                Xin chào, {user.username}
                            </span>
                            <span className='text-[#EE7442] font-semibold'>
                                <Link to='/profile'>Thông tin cá nhân</Link>
                            </span>
                            <span
                                className='cursor-pointer text-[#EE7442] font-semibold'
                                onClick={handleLogout}
                            >
                                Đăng xuất
                            </span>
                        </div>
                    ) : (
                        <Tooltip placement='bottom' title='Đăng nhập / Đăng ký'>
                            <img
                                src={userIcon}
                                alt='userIcon'
                                className='w-10 cursor-pointer'
                                onClick={() => setIsLoginOpen(true)}
                            />
                        </Tooltip>
                    )}

                    {/* Modals */}
                    <LoginModal
                        open={isLoginOpen}
                        onClose={() => setIsLoginOpen(false)}
                        onLoginSuccess={setUser}
                        onOpenRegister={() => setIsRegisterOpen(true)}
                    />
                    <RegisterModal
                        open={isRegisterOpen}
                        onClose={() => setIsRegisterOpen(false)}
                        onRegisterSuccess={setUser}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
