import React from 'react';
import CartItem from './CartItem';
import './CartOverlay.scss';

const CartOverlay = (props) => {
	return (
		<div className={`cart__modal ${props.isActive ? 'overlay-active' : ''}`}>
			<div className='container'>
				<div className='cart__title'>
					<h3>Cart</h3>
				</div>
				<div className='cart__content'>
					{!props.amount ? (
						<p className='cart-empty'>Your cart is empty.</p>
					) : (
						<CartItem itemAmount={props.amount} />
					)}
				</div>
			</div>
		</div>
	);
};

export default CartOverlay;
