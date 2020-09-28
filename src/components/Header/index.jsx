import React from 'react';

import Logo from '../Logo';
import Menu from '../Menu';
import Location from '../Location';
import Search from '../Search';
import SignIn from '../SignIn';

import './header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header__container container">
				<div className="header__wrapper">
					<Logo />
					<Menu />
				</div>
				<form className="header__form">
					<Location />
					<div className="header__form-wrapper">
						<Search />
						<SignIn />
					</div>
				</form>
				<div className="header__mobail">
					<span className="header__mobail-line"></span>
				</div>
			</div>
		</header>
	)
}

export default Header;