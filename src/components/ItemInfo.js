import React, { useState } from 'react';
import './ItemInfo.scss';
import Button from '../components/UI/Button';
import ItemData from '../assets/data/ItemData';
import { ReactComponent as Cart } from '../assets/icon-cart.svg';
import { ReactComponent as Plus } from '../assets/icon-plus.svg';
import { ReactComponent as Minus } from '../assets/icon-minus.svg';

const ItemInfo = (props) => {
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

	return (
		<div className='container'>
			<h2 className='item__brand'>sneaker company</h2>
			<h1 className='item__title'>{ItemData.title}</h1>
			<p className='item__text'>{ItemData.description}</p>
			<div className='price'>
				<p className='price__amount'>${ItemData.price}</p>
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
						className='amount-field'
						disabled='disabled'
						min={0}
						max={10}
						value={itemAmount}
					/>
					<button className='amount__btn' onClick={increaseAmount}>
						<Plus />
					</button>
				</div>
				<Button
					onClick={() => {
						props.onClick(itemAmount);
					}}>
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
