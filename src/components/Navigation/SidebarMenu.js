import React from 'react';
import './SidebarMenu.scss';
import { ReactComponent as CloseButton } from '../../assets/icon-close.svg';
import NavList from './NavList';
import Backdrop from '../UI/Backdrop';

const SidebarMenu = (props) => {
	return (
		<div className={`nav-container ${props.isOpen ? 'active' : ''}`}>
			<nav className='nav__menu-mobile'>
				<button onClick={props.closeMenu} className='close-menu-btn'>
					<CloseButton />
				</button>
				<NavList />
			</nav>
			<Backdrop onClick={props.closeMenu} />
		</div>
	);
};

export default SidebarMenu;
