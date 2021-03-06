import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../Context/cart-context';
import './Nav.scss';
import { ReactComponent as BrandLogo } from '../../assets/logo.svg';
import { ReactComponent as Cart } from '../../assets/icon-cart.svg';
import { ReactComponent as Menu } from '../../assets/icon-menu.svg';
import avatar from '../../assets/image-avatar.png';
import CartOverlay from './CartOverlay';
import SidebarMenu from './SidebarMenu';
import ItemAmount from '../UI/ItemAmount';
import NavList from './NavList';

const Nav = (props) => {
	const [cartActive, setCartActive] = useState(false);
	const [menuActive, setMenuActive] = useState(false);

	const [cartAmount, setCartAmount] = useContext(CartContext);

	const toggleMenu = () => {
		if (menuActive) {
			setMenuActive(false);
		} else {
			setMenuActive(true);
		}
	};

	const toggleCart = () => {
		if (cartActive) {
			setCartActive(false);
		} else {
			setCartActive(true);
		}
	};

	return (
		<nav className='nav'>
			{ReactDOM.createPortal(
				<SidebarMenu closeMenu={toggleMenu} isOpen={menuActive} />,
				document.getElementById('overlay-root')
			)}
			<div className='nav__menu'>
				<div className='nav__menu-container'>
					<button className='nav__menu-btn' onClick={toggleMenu}>
						<Menu />
					</button>
					<BrandLogo />
				</div>
				<NavList className='disable' />
			</div>
			<div className='cart'>
				<button className='cart-btn'>
					<ItemAmount amount={cartAmount} />
					<Cart
						className={`cart-icon ${cartActive ? 'cart-active' : ''}`}
						onClick={toggleCart}
					/>
				</button>
				<img className='user-avatar' src={avatar} alt='User profile' />
			</div>
			<CartOverlay isActive={cartActive} amount={cartAmount} />
		</nav>
	);
};

export default Nav;
