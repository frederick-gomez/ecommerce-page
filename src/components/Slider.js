import React from 'react';
import './Slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import img1 from '../assets/image-product-1.jpg';
import img2 from '../assets/image-product-2.jpg';
import img3 from '../assets/image-product-3.jpg';
import img4 from '../assets/image-product-4.jpg';

const Slider = () => {
	return (
		<div>
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				loop={true}>
				<SwiperSlide>
					<img className='slide' src={img1} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img className='slide' src={img2} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img className='slide' src={img3} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img className='slide' src={img4} alt='' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
