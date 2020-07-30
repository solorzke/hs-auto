import React, { Component } from 'react';
import './Banner.css';
import Slideshow from './Slideshow';

export default class Banner extends Component {
	render() {
		const default_title = 'Welcome to HS Auto & Trucking Services';
		const default_subtitle = 'We offer the best auto service in the Kearny area.';
		return (
			<div className="container">
				<div className="banner-body">
					<Slideshow />
				</div>
				<div className="banner-text">
					<h1 className="banner-title">
						{this.props.title === undefined ? default_title : this.props.title}
					</h1>
					<p className="banner-subtitle">
						{this.props.subtitle === undefined ? default_subtitle : this.props.subtitle}
					</p>
				</div>
			</div>
		);
	}
}
