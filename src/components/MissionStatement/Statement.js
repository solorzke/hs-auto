import React, { Component } from 'react';
import './Statement.css';
import Wrench from './wrench.gif';

export default class Statement extends Component {
	render() {
		return (
			<div>
				<div className="statement-container">
					<div className="wrench-block">
						<div className="overlay">
							<img src={Wrench} alt="wrench" width="300" height="300" />
						</div>
					</div>
					<div className="message-block">
						<h1 style={{ padding: 10 }} className="statement-title">
							HS Auto Repair Shop
						</h1>
						<h3 style={{ color: '#fe6847' }} className="statement-slogan">
							You're In Good Hands!
						</h3>
						<p style={{ padding: 10 }} className="statement-msg">
							At HS Auto, you can relax knowing we will get the job done with anything that your vehicle
							needs. We handle anything from oil changes, filter changes, battery replacements, auto body
							upgrades, engine installations, car diagnostics, and more.
						</p>
						<p className="statement-msg">Handled by expert and professional technicians.</p>
					</div>
				</div>
			</div>
		);
	}
}
