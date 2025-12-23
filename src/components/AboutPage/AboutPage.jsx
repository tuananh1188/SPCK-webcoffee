import React from 'react';
import imgBNT from '@assets/images/aboutus-bannertop-pc.png';
import imgBN1 from '@assets/images/aboutus-banner1.png';
import imgBN2 from '@assets/images/aboutus-banner2.png';
import imgBN3 from '@assets/images/aboutus-banner3.png';
import CardFeedBack from '@components/CardFeedBack/CardFeedBack';
import imgFB1 from '@assets/images/avatar4-customer-review.png';
import imgFB2 from '@assets/images/avatar1-customer-review.png';
import imgFB3 from '@assets/images/avatar2-customer-review.png';
import imgFB4 from '@assets/images/avatar3-customer-review.png';
import TextCurved from '@components/TextCurved/TextCurved';

const dataFeedBack = [
    {
        id: 1,
        img: imgFB1,
        name: 'Nguyễn Thảo Vy',
        comment: 'Mình ghé The Coffee House mỗi sáng trước giờ làm...'
    },
    {
        id: 2,
        img: imgFB2,
        name: 'Tạ Quang Anh',
        comment: 'Có lần mưa lớn, mình tấp vô Nhà trú tạm ...'
    },
    {
        id: 3,
        img: imgFB3,
        name: 'Lê Bảo Ngọc',
        comment: 'Giữa giờ làm, mình thường qua Nhà làm Ame...'
    },
    {
        id: 4,
        img: imgFB4,
        name: 'Đặng Quân',
        comment: 'Mình thích cái cách Nhà luôn giữ không gian nhẹ nhàng...'
    }
];

function AboutPage() {
    return (
        <>
            <div className='relative'>
                <img src={imgBNT} className='w-full' />
                <div className='absolute top-2 translate-x-[150%] text-center'>
                    <TextCurved
                        text={'CHUYỆN "NHÀ"'}
                        width={500}
                        height={200}
                        fontSize={36}
                    />
                    <p className='text-[28px] font-bold text-[#ED7542] -mt-10'>
                        MỖI NỤ CƯỜI LÀ MỘT CÂU CHUYỆN - VÀ "NHÀ" <br /> LÀ NƠI
                        LƯU GIỮ TẤT CẢ
                    </p>
                    <p className='text-[20px] mt-10 font-semibold'>
                        The Coffee House sẽ là nơi mọi người xích lại gần nhau,
                        đề cao giá trị kết <br /> nối con người và sẻ chia thân
                        tình bên những tách cà phê, ly trà đượm <br /> hương,
                        truyền cảm hứng về lối sống hiện đại.
                    </p>
                </div>
            </div>
            <div className='flex justify-center gap-20 mt-20'>
                <div className='w-2/5'>
                    <h1 className='text-[56px] font-bold '>Chuyện "Nhà"</h1>
                    <p className='text-[20px] font-semibold mt-10'>
                        The Coffee House tin rằng, nụ cười là hương vị ngọt ngào
                        nhất trong mỗi ngày mới. Từ những ly cà phê đậm đà,
                        những tách trà thanh mát, đến từng lời chào thân quen,
                        chúng tôi mong mỗi vị khách khi ghé Nhà đều mang theo
                        một niềm vui nhỏ – để rồi nụ cười ấy lại được lan toả
                        khắp nơi.
                    </p>
                </div>
                <div>
                    <img src={imgBN1} className='w-130' />
                </div>
            </div>
            <div className='flex justify-center gap-20 mt-20 bg-amber-50 py-20'>
                <div>
                    <img src={imgBN2} className='w-125' />
                </div>
                <div className='w-2/5'>
                    <h1 className='text-[56px] font-bold'>
                        Nguyên bản từ giá trị hạt cà phê chất lượng
                    </h1>
                    <div className='text-[20px] font-semibold py-10'>
                        <p>
                            Mọi nụ cười ở The Coffee House đều bắt đầu từ một
                            hạt cà phê nguyên bản.
                        </p>
                        <p className='mt-5'>
                            Những hạt cà phê được “Nhà” chọn lựa từ cao nguyên
                            nắng gió, nơi đất, trời và con người cùng góp tình
                            yêu vào từng mùa vụ. Từng hạt được rang xay cẩn
                            trọng, giữ trọn hương vị nguyên bản – đậm đà, tinh
                            tế và thật lòng như chính cách “Nhà” trao đi từng
                            tách cà phê mỗi ngày.
                        </p>
                        <p className='mt-5'>
                            Với The Coffee House, chất lượng không chỉ là hương
                            vị, mà là cảm xúc. Là khi một ly cà phê khiến ai đó
                            mỉm cười – một nụ cười nhỏ, nhưng đủ khiến ngày dài
                            trở nên dịu lại. Bởi “Nhà” tin, mỗi nụ cười được tạo
                            nên từ những điều nguyên bản và chân thật nhất – như
                            chính hạt cà phê của mình.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-20 mt-20 py-20'>
                <div className='w-2/5'>
                    <h1 className='text-[56px] font-bold'>
                        {' '}
                        Chất lượng khởi nguồn từ những đồi trà tuyển chọn
                    </h1>
                    <div className='text-[20px] font-semibold py-10'>
                        <p>
                            Giữa những đồi trà xanh mướt trong sương sớm, “Nhà”
                            tìm thấy nguồn cảm hứng cho hành trình của mình –
                            nơi từng búp trà được nâng niu, chọn lọc từ những
                            người trồng gửi gắm cả tấm lòng. Từng lá trà tươi
                            được hái đúng thời điểm, ướp trong hương nắng, gió
                            và niềm vui của những bàn tay cần mẫn.
                        </p>
                        <p className='mt-5'>
                            The Coffee House tin rằng, chất lượng không chỉ đến
                            từ nguyên liệu tốt, mà còn từ cảm xúc được tạo ra
                            sau mỗi ngụm trà. Là khi hương vị thanh mát ấy khiến
                            ai đó khẽ mỉm cười, để thấy ngày mình nhẹ hơn, lòng
                            mình yên hơn.
                        </p>
                        <p className='mt-5'>
                            Bởi với “Nhà”, mỗi tách trà ngon đều bắt đầu từ đồi
                            trà chất lượng – và kết thúc bằng một nụ cười chân
                            thật.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={imgBN3} className='w-125' />
                </div>
            </div>
            <div className='bg-amber-50 py-20 text-center'>
                <h1 className='text-[48px] font-bold'>Những lời thương...</h1>
                <div>
                    <CardFeedBack data={dataFeedBack} />
                </div>
            </div>
        </>
    );
}

export default AboutPage;
