import Logo from '@assets/images/logo.png';
import Menu from './Menu/Menu';
import { dataMenu } from './constants';
import userIcon from '@assets/icons/user-icon.svg';

function MyHeader() {
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
                    <img src={userIcon} alt='userIcon' className='w-10' />
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
