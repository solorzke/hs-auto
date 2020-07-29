import React from 'react';
import './Services.css';
import 'font-awesome/css/font-awesome.min.css';

export default function List() {
	return (
		<div className="list-container">
			<div className="row">
				<div className="item">
					<a href="#">
						<i className="fa fa-wrench icon" />
						<div className="row-text">
							<p className="item-title">Auto Repair</p>
							<p className="item-subtitle">High quality repair service</p>
						</div>
					</a>
				</div>
				<div className="item">
					<a href="#">
						<i className="fa fa-car icon" />
						<div className="row-text">
							<p className="item-title">Auto Body</p>
							<p className="item-subtitle">We can improve upon your car's quality</p>
						</div>
					</a>
				</div>
			</div>
			<div className="row">
				<div className="item">
					<a href="#">
						<i className="fa fa-plus-square icon" />
						<div className="row-text">
							<p className="item-title">Emergency Services</p>
							<p className="item-subtitle">We're on our way to help you</p>
						</div>
					</a>
				</div>
				<div className="item">
					<a href="#">
						<i className="fa fa-battery-full icon" />
						<div className="row-text">
							<p className="item-title">Battery Delivery Service</p>
							<p className="item-subtitle">Delivery to your car</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
