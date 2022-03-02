import React from 'react';
import './SidebarMenu.scss';
import { ReactComponent as CloseButton } from '../../assets/icon-close.svg';
import NavList from './NavList';

const SidebarMenu = (props) => {
	return (
		<div className={`nav-container ${props.isOpen ? 'active' : ''}`}>
			<nav className='nav__menu-mobile'>
				<button onClick={props.closeMenu} className='close-menu-btn'>
					<CloseButton />
				</button>
				<NavList />
			</nav>
			<div onClick={props.closeMenu} className='backdrop'></div>
		</div>
	);
};

export default SidebarMenu;
