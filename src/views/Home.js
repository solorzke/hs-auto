import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';
import '../App.css';

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Banner />
				<Services />
			</div>
		);
	}
}
