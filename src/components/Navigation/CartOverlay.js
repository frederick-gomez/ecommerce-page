import React from 'react';
import './CartOverlay.scss';

const CartOverlay = ({ isActive }) => {
	return (
		<div className={`cart__modal ${isActive ? 'overlay-active' : ''}`}>
			<div className='overlay__container'>
				<div className='cart__title'>
					<h3>Cart</h3>
				</div>
				<div className='cart__content'>
					<p className='cart-empty'>Your cart is empty.</p>
				</div>
			</div>
		</div>
	);
};

export default CartOverlay;
