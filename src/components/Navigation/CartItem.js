import React from 'react';
import './CartItem.scss';
import thumb1 from '../../assets/image-product-1-thumbnail.jpg';
import { ReactComponent as DeleteIcon } from '../../assets/icon-delete.svg';
import Button from '../UI/Button';

const CartItem = (props) => {
	const itemPrice = 125.0;
	const itemAmount = 3;

	const totalPrice = (price, amount) => {
		const totalSum = price * amount;
		return totalSum;
	};

	return (
		<div>
			<div className='wrapper'>
				<div className='cart-item__img-container'>
					<img className='cart-item__img' src={thumb1} alt='Item thumbnail' />
				</div>
				<div className='cart-item__content'>
					<p>Fall Limited Edition Sneakers</p>
					<p>
						${itemPrice} x {itemAmount}
						<span className='total-amount'>
							${totalPrice(itemPrice, itemAmount)}
						</span>
					</p>
				</div>
				<button className='delete-icon'>
					<DeleteIcon className='delete-icon__svg' />
				</button>
			</div>
			<Button>Checkout</Button>
		</div>
	);
};

export default CartItem;
