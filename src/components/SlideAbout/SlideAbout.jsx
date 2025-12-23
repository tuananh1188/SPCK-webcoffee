import React, { useState, useEffect } from "react";
import imgAbout1 from '@assets/images/rectangle_45.jpg';
import imgAbout2 from '@assets/images/rectangle_45__1_.jpg';
import { LeftOutlined,RightOutlined } from "@ant-design/icons";
import SlideItemAbout from "./SlideItemAbout";

const slideDataAbout = [
  {
    id: 1,
    img: imgAbout1,
    title: "Chất lượng khởi nguồn từ những đồi trả tuyển chọn",
    decription: "Giữa những ngọn đồi trà xanh mướt",
    routeText: "/about",
   },
   {
    id: 1,
    img: imgAbout2,
    title: "Nguyên bản từ giá trị hạt cà phê chất lượng",
    decription: "Mọi nụ cười ở coffee house đều bắt đầu tự hạt cà phê nguyên bản",
    routeText: "/about",
   },
]
    
const SlideAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlidesAbout = slideDataAbout.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlidesAbout);
    }, 6000);
    return () => clearInterval(timer); 
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlidesAbout) % totalSlidesAbout);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlidesAbout);
  };
  
  const curentSlideAbout = slideDataAbout[currentIndex]
  return (
    <div className="slider relative w-full h-150 m-auto overflow-hidden mt-10 ">
      <button onClick={goToPrev} className="absolute top-[50%] left-0 -translate-y-[30%]  bg-gray-950 opacity-60 text-amber-50 text-4xl py-2 ml-4 rounded-xl cursor-pointer hover:bg-amber-50 hover:text-[#EE7442] transition"><LeftOutlined/></button>
      <SlideItemAbout data={curentSlideAbout} />
      <button onClick={goToNext} className="absolute top-[50%] right-0 bg-gray-950 opacity-60 text-amber-50 -translate-y-4 text-4xl py-2 mr-4 rounded-xl cursor-pointer hover:bg-amber-50 hover:text-[#EE7442] transition"><RightOutlined/></button>
    </div>
  );
}
export default SlideAbout;
