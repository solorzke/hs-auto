import React, { Component } from 'react';
import './Banner.css';
import Slideshow from './Slideshow';

export default class Banner extends Component {
	render() {
		return (
			<div className="container">
				<div className="banner-body">
					<Slideshow />
				</div>
				<div className="banner-text">
					<h1 className="banner-title">Welcome to H&amp;S Auto Trucking Services</h1>
					<p className="banner-subtitle">We offer the best auto service in the Kearny area.</p>
				</div>
			</div>
		);
	}
}
