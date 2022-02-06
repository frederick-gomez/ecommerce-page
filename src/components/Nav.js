import React from 'react';
import './Nav.scss';
import { ReactComponent as BrandLogo } from '../assets/logo.svg';
import { ReactComponent as Cart } from '../assets/icon-cart.svg';
import { ReactComponent as Menu } from '../assets/icon-menu.svg';
import avatar from '../assets/image-avatar.png';

const Nav = () => {
	return (
		<nav className='nav'>
			<div className='nav__menu'>
				<div className='nav__menu-container'>
					<button className='nav__menu-btn'>
						<Menu />
					</button>
					<BrandLogo />
				</div>
				<ul className='nav__list'>
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
			<div className='cart'>
				<Cart />
				<img src={avatar} alt='User profile' />
			</div>
		</nav>
	);
};

export default Nav;
