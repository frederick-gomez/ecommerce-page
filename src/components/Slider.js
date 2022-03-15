import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
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

const Slider = (props) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className={`slider-container ${props.className}`}>
			<Swiper
				onClick={props.toggleModal}
				modules={[Navigation, Thumbs]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				loop={true}
				thumbs={{ swiper: thumbsSwiper }}
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
			<Swiper
				onSwiper={setThumbsSwiper}
				modules={[Navigation, Thumbs]}
				loop={false}
				spaceBetween={30}
				slidesPerView={4}
				watchSlidesProgress={true}
				className='slider-thumbs'>
				<SwiperSlide>
					<img className='hover outline' src={thumb1} alt='shoes-thumbnails' />
				</SwiperSlide>
				<SwiperSlide>
					<img className='hover outline' src={thumb2} alt='shoes-thumbnails' />
				</SwiperSlide>
				<SwiperSlide>
					<img className='hover outline' src={thumb3} alt='shoes-thumbnails' />
				</SwiperSlide>
				<SwiperSlide>
					<img className='hover outline' src={thumb4} alt='shoes-thumbnails' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
