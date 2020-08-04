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
						<p style={{ padding: 10 }} className="statement-msg">
							For more than 10 years, our skilled technicians at HS Auto provided quality repair service
							to a multitude of vehicles including heavy-duty, pedestrian, semis, domestic and foreign
							from many different brands of cars, all at an affordable price! We take pride in the work we
							do to make sure your vehicle leaves our shop looking and feeling better than ever before!
							Pay us a visit at our shop here in Kearny, NJ.
						</p>
						<p style={{ padding: 10 }} className="statement-msg">
							Combining our expertise with the ongoing annual cycle of newly-released cutting-edge
							technology, We make sure to check every corner of your vehicle to make sure it is good
							enough to be back on the road again. Equipped with our industry-standard equipment, we are
							able to identify all issues with your vehicle quickly before we begin operating on your
							vehicle. Your trust is our most valuable asset and we work tirelessly to keep it.
						</p>
						<p className="statement-msg">
							<strong>Handled by expert and professional technicians.</strong>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
