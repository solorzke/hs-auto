import React, { Component } from 'react';
import './Services.css';
import Summary from './Summary';
import List from './List';

export default class Services extends Component {
	render() {
		return (
			<div className="services-container">
				<Summary />
				<List />
			</div>
		);
	}
}
