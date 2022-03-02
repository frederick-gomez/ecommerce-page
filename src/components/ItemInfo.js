import React, { useState } from 'react';
import './ItemInfo.scss';
import Button from '../components/UI/Button';
import { ReactComponent as Cart } from '../assets/icon-cart.svg';
import { ReactComponent as Plus } from '../assets/icon-plus.svg';
import { ReactComponent as Minus } from '../assets/icon-minus.svg';

const ItemInfo = () => {
	const [itemAmount, setItemAmount] = useState(0);

	const increaseAmount = () => {
		setItemAmount(itemAmount + 1);
	};
	const decreaseAmount = () => {
		if (!itemAmount) {
			return;
		}
		setItemAmount(itemAmount - 1);
	};
	console.log(itemAmount);

	return (
		<div className='container'>
			<h2 className='item__brand'>sneaker company</h2>
			<h1 className='item__title'>Fall Limited Edition Sneakers</h1>
			<p className='item__text'>
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they'll withstand everything the
				weather can offer.
			</p>
			<div className='price'>
				<p className='price__amount'>$125.00</p>
				<p className='price__discount'>50%</p>
				<p className='price__total'>$250.00</p>
			</div>
			<div className='item__btn'>
				<div className='item__amount'>
					<button className='amount__btn' onClick={decreaseAmount}>
						<Minus />
					</button>
					<input
						type='number'
						id='amount-field'
						class='amount-field'
						disabled='disabled'
						min={0}
						max={10}
						value={itemAmount}
					/>
					<button className='amount__btn' onClick={increaseAmount}>
						<Plus />
					</button>
				</div>
				<Button>
					<span className='add-to-cart__svg'>
						<Cart />
					</span>
					Add to cart
				</Button>
			</div>
		</div>
	);
};

export default ItemInfo;
