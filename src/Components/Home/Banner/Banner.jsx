import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// import photos 
import banner1 from './Image/brand1.png'
import banner2 from './Image/brand2.png'
import banner3 from './Image/brand3.png'
import { Link } from "react-router-dom";

const Banner = () => {
    const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};
	// for banner image 
	const photos = [
		{ img: banner1, header1: 'One Stop', header2: 'Event Planner', header3: 'Event Event Sould Be Perfect', aboutBtn: 'about', startedBtn: 'get started' },
		{ img: banner2, header1: 'One Stop', header2: 'Event Planner', header3: 'Event Event Sould Be Perfect', aboutBtn: 'about', startedBtn: 'get started' },
		{ img: banner3, header1: 'One Stop', header2: 'Event Planner', header3: 'Event Event Sould Be Perfect', aboutBtn: 'about', startedBtn: 'get started' }
	]
    return (
        // <div className="">
      <div className="banner-background">
            	<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				centeredSlides={true}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				pagination={pagination}
				className="mySwiper"
			>
				{
					photos.map((banner, index) =>
						<SwiperSlide key={index}>
							<div className="md:flex lg:flex items-center justify-center gap-8 " id="slider_content">


                      <div className=" text-white ">
                                <h3 className='text-[20px]'>MEN's CLOTHINGSPORTIVA</h3>
						 
                                <br />
								<h1 className='text-[40px] font-bold'>
								SWING TEEAliquam facilisis

								</h1>
                                <br />
								<h1 className='text-[20px]'>
								non ante ac dictum. Fusce a ligula nec neque bibendum 
								<br />
								rhoncus. Nulla est lectus, eleifend et libero ac

								</h1>
                                </div>

                                
                                <div className=" mx-auto">
                                <img className='mx-auto' src={banner.img} alt="" />
                                </div>

                                
                        
							</div>
						</SwiperSlide>
					)
				}
			</Swiper>
        </div>
    );
};

export default Banner;