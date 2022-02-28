import React from 'react';
import './SidebarMenu.scss';
import { ReactComponent as CloseButton } from '../../assets/icon-close.svg';

const SidebarMenu = (props) => {
	return (
		<div className='nav__menu-mobile'>
			<button className='close-menu-btn'>
				<CloseButton />
			</button>
			<ul className='nav__list-mobile '>
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
	);
};

export default SidebarMenu;
