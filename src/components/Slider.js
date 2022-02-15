import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper';
import './Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/thumbs';
//Images
import img1 from '../assets/image-product-1.jpg';
import img2 from '../assets/image-product-2.jpg';
import img3 from '../assets/image-product-3.jpg';
import img4 from '../assets/image-product-4.jpg';
//Thumbnails
import thumb1 from '../assets/image-product-1-thumbnail.jpg';
import thumb2 from '../assets/image-product-2-thumbnail.jpg';
import thumb3 from '../assets/image-product-3-thumbnail.jpg';
import thumb4 from '../assets/image-product-4-thumbnail.jpg';

const Slider = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div>
			<Swiper
				style={{
					'--swiper-navigation-color': '#fff',
					'--swiper-pagination-color': '#fff',
				}}
				modules={[Navigation, Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				loop={true}
				className='slider'>
				<SwiperSlide>
					<img src={img1} alt='shoes' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img2} alt='shoes' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img3} alt='shoes' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img4} alt='shoes' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
