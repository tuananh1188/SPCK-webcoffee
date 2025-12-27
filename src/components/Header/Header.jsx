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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className='bg-white w-full sticky top-0 z-20 shadow-md'>
            <div className='flex justify-between items-center h-16 px-4 md:px-10'>
                {/* Logo */}
                <div>
                    <img src={Logo} alt='Logo' className='w-24 md:w-40' />
                </div>

                {/* Hamburger button (mobile) */}
                <button
                    className='md:hidden text-[#EE7442] focus:outline-none'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {/* 3 gạch hamburger */}
                    <svg
                        className='w-8 h-8'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d={
                                isMenuOpen
                                    ? 'M6 18L18 6M6 6l12 12' // icon X khi mở
                                    : 'M4 6h16M4 12h16M4 18h16' // icon hamburger
                            }
                        />
                    </svg>
                </button>

                {/* User / Login (desktop) */}
                <div className='hidden md:flex items-center'>
                    {user ? (
                        <div className='flex items-center gap-3 text-base'>
                            <span className='font-semibold'>
                                Xin chào, {user.username}
                            </span>
                            <Link
                                to='/profile'
                                className='text-[#EE7442] font-semibold'
                            >
                                Thông tin cá nhân
                            </Link>
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
                                className='w-8 cursor-pointer'
                                onClick={() => setIsLoginOpen(true)}
                            />
                        </Tooltip>
                    )}
                </div>
            </div>

            {/* Menu (desktop) */}
            <div className='hidden md:flex justify-center gap-6 py-2 font-bold'>
                {dataMenu.map(item => (
                    <Menu
                        key={item.href}
                        content={item.content}
                        href={item.href}
                    />
                ))}
            </div>

            {/* Menu (mobile dropdown) */}
            {isMenuOpen && (
                <div className='md:hidden bg-white shadow-lg flex flex-col items-center gap-4 py-4 font-bold'>
                    {dataMenu.map(item => (
                        <Menu
                            key={item.href}
                            content={item.content}
                            href={item.href}
                        />
                    ))}

                    {/* User / Login (mobile) */}
                    <div className='mt-4'>
                        {user ? (
                            <div className='flex flex-col items-center gap-2 text-sm'>
                                <span className='font-semibold'>
                                    Xin chào, {user.username}
                                </span>
                                <Link
                                    to='/profile'
                                    className='text-[#EE7442] font-semibold'
                                >
                                    Thông tin cá nhân
                                </Link>
                                <span
                                    className='cursor-pointer text-[#EE7442] font-semibold'
                                    onClick={handleLogout}
                                >
                                    Đăng xuất
                                </span>
                            </div>
                        ) : (
                            <Tooltip
                                placement='bottom'
                                title='Đăng nhập / Đăng ký'
                            >
                                <img
                                    src={userIcon}
                                    alt='userIcon'
                                    className='w-8 cursor-pointer'
                                    onClick={() => setIsLoginOpen(true)}
                                />
                            </Tooltip>
                        )}
                    </div>
                </div>
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
    );
}

export default MyHeader;
