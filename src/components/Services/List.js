import React from 'react';
import './Services.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

export default function List() {
	return (
		<div className="list-container">
			<div className="row">
				<div className="item">
					<Link to="/services" className="service-link">
						<i className="fa fa-wrench icon" />
						<div className="row-text">
							<p className="item-title">Auto Repair</p>
							<p className="item-subtitle">High quality repair service</p>
						</div>
					</Link>
				</div>
				<div className="item">
					<Link to="/services" className="service-link">
						<i className="fa fa-car icon" />
						<div className="row-text">
							<p className="item-title">Auto Body</p>
							<p className="item-subtitle">We can improve upon your car's quality</p>
						</div>
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="item">
					<Link to="/services" className="service-link">
						<i className="fa fa-plus-square icon" />
						<div className="row-text">
							<p className="item-title">Emergency Services</p>
							<p className="item-subtitle">We're on our way to help you</p>
						</div>
					</Link>
				</div>
				<div className="item">
					<Link to="/services" className="service-link">
						<i className="fa fa-battery-full icon" />
						<div className="row-text">
							<p className="item-title">Battery Delivery Service</p>
							<p className="item-subtitle">Delivery to your car</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
