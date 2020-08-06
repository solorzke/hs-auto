import React, { Component } from 'react';
import { MenuItems } from './Menuitems';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Button } from './Button';
import './Navbar.css';
import Logo from './hs.png';
import Header from './Header';

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
			<div>
				<Header />
				<nav className="navbar-items">
					<Link className="navbar-logo" to="/">
						<img src={Logo} height="60" width="65" alt="logo" />
					</Link>
					<div className="menu-icon" onClick={this.handleClick}>
						<i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'} />
					</div>
					<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
						{MenuItems.map((item, index) => {
							return (
								<li key={index}>
									<Link className={item.cName} to={item.url}>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
					<Button>SignUp</Button>
				</nav>
			</div>
		);
	}
}
