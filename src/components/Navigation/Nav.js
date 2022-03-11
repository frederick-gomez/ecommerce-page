import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Nav.scss';
import { ReactComponent as BrandLogo } from '../../assets/logo.svg';
import { ReactComponent as Cart } from '../../assets/icon-cart.svg';
import { ReactComponent as Menu } from '../../assets/icon-menu.svg';
import avatar from '../../assets/image-avatar.png';
import CartOverlay from './CartOverlay';
import SidebarMenu from './SidebarMenu';
import ItemAmount from '../UI/ItemAmount';

const Nav = () => {
	const [cartActive, setCartActive] = useState(false);
	const [menuActive, setMenuActive] = useState(false);

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
			</div>
			<div className='cart'>
				<button className='cart-btn'>
					<ItemAmount amount={1} />
					<Cart
						className={`cart-icon ${cartActive ? 'cart-active' : ''}`}
						onClick={toggleCart}
					/>
				</button>
				<img className='user-avatar' src={avatar} alt='User profile' />
			</div>
			<CartOverlay isActive={cartActive} />
		</nav>
	);
};

export default Nav;
