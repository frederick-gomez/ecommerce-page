import React, { useState } from 'react';
import './Nav.scss';
import { ReactComponent as BrandLogo } from '../../assets/logo.svg';
import { ReactComponent as Cart } from '../../assets/icon-cart.svg';
import { ReactComponent as Menu } from '../../assets/icon-menu.svg';
import { ReactComponent as CloseButton } from '../../assets/icon-close.svg';
import avatar from '../../assets/image-avatar.png';
import CartOverlay from './CartOverlay';

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

	const openCart = () => {
		if (cartActive) {
			setCartActive(false);
		} else {
			setCartActive(true);
		}
	};

	return (
		<nav className='nav'>
			<div className='nav__menu'>
				<div className='nav__menu-container'>
					<button className='nav__menu-btn' onClick={toggleMenu}>
						<Menu />
					</button>
					<BrandLogo />
				</div>
				<div
					className={`list-container ${
						menuActive ? 'nav__mobile-menu' : 'disable'
					}`}>
					{menuActive ? (
						<button onClick={toggleMenu} className='close-menu-btn'>
							<CloseButton />
						</button>
					) : null}
					<ul className='nav__list '>
						<li className='nav__item'>
							<a href='#' className='nav__link'>
								Collections
							</a>
						</li>
						<li className='nav__item'>
							<a href='#' className='nav__link'>
								Men
							</a>
						</li>
						<li className='nav__item'>
							<a href='#' className='nav__link'>
								Women
							</a>
						</li>
						<li className='nav__item'>
							<a href='#' className='nav__link'>
								About
							</a>
						</li>
						<li className='nav__item'>
							<a href='#' className='nav__link'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='cart'>
				<Cart
					className={`cart-icon ${cartActive ? 'active' : ''}`}
					onClick={openCart}
				/>
				<img src={avatar} alt='User profile' />
			</div>
			<CartOverlay isActive={cartActive} />
		</nav>
	);
};

export default Nav;
