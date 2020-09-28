import React from 'react';

import { NavLink } from 'react-router-dom';

import './menu.scss';

const navigationMenu = [
	{name: 'Купоны и сертификаты', path: '/link1'},
	{name: 'Впечатления', path: '/link2'},
	{name: 'Авиабилеты', path: '/link3'},
	{name: 'Жд билеты', path: '/link4'},
	{name: 'Отели', path: '/link5'},
	{name: 'Каршеринг', path: '/link6'},
	{name: 'Театры', path: '/link7'},
	{name: 'Страхование', path: '/link8'},
	{name: 'Как подключиться', path: '/link9'},
	{name: 'Партнеры', path: '/'},
]

const Menu = () => {

	return (
		<nav className="header__menu menu">
			<ul className="header__menu-list">
				{
				navigationMenu.map((item, index) => {
					return (
						<li className="header__menu-item" key={index}>
							<NavLink 
							className="header__menu-link"
							activeClassName="header__menu-link--active" 
							exact 
							to={item.path}>
								{item.name}
							</NavLink>
						</li>
						)
					})
					}
			</ul>
		</nav>
	)

}

export default Menu;