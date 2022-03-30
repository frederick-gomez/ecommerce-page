import React, { useContext } from 'react';
import CartContext from '../Context/cart-context';
import './CartItem.scss';
import ItemData from '../../assets/data/ItemData';
import thumb1 from '../../assets/image-product-1-thumbnail.jpg';
import { ReactComponent as DeleteIcon } from '../../assets/icon-delete.svg';
import Button from '../UI/Button';

const CartItem = (props) => {
	const [cartAmount, setCartAmount] = useContext(CartContext);

	const itemPrice = parseFloat(125).toFixed(2);

	const totalPrice = (price, amount) => {
		const totalSum = price * amount;
		return parseFloat(totalSum).toFixed(2);
	};

	return (
		<div>
			<div className='wrapper'>
				<div className='cart-item__img-container'>
					<img className='cart-item__img' src={thumb1} alt='Item thumbnail' />
				</div>
				<div className='cart-item__content'>
					<p>{ItemData.title}</p>
					<p>
						${itemPrice} x {cartAmount}
						<span className='total-amount'>
							${totalPrice(itemPrice, cartAmount)}
						</span>
					</p>
				</div>
				<button className='delete-icon'>
					<DeleteIcon
						className='delete-icon__svg'
						onClick={() => {
							setCartAmount(0);
						}}
					/>
				</button>
			</div>
			<Button>Checkout</Button>
		</div>
	);
};

export default CartItem;
