import React from 'react';
import './ItemAmount.scss';

const ItemAmount = (props) => {
	return !props.amount ? null : (
		<div className='item-amount'>{props.amount}</div>
	);
};

export default ItemAmount;
