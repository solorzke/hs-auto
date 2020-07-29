import React, { Component } from 'react';
import { MenuItems } from './Menuitems';
import 'font-awesome/css/font-awesome.min.css';
import { Button } from './Button';
import './Navbar.css';

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
	}

	handleClick = () => {
		this.setState({
			clicked: !this.state.clicked
		});
	};

	render() {
		return (
			<nav className="navbar-items">
				<h1 className="navbar-logo">HS Auto</h1>
				<div className="menu-icon" onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'} />
				</div>
				<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
				<Button>SignUp</Button>
			</nav>
		);
	}
}
