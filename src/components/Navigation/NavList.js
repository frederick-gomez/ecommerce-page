import React from 'react';
import './NavList.scss';

const NavList = () => {
	return (
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
	);
};

export default NavList;
