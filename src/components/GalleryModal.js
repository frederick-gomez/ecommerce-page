import React from 'react';
import Slider from './Slider';
import Backdrop from './UI/Backdrop';
import './GalleryModal.scss';

const GalleryModal = (props) => {
	return (
		<>
			<Slider className='modal__slider' />
			<Backdrop onClick={props.closeModal} />
		</>
	);
};

export default GalleryModal;
