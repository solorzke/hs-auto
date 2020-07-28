import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Navigation() {
	return (
		<div className="navigation-container">
			<div className="col">
				<h2 className="heading">Services</h2>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Oil Change
				</a>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Brake Replacement
				</a>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Tires Check
				</a>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Engine Installation
				</a>
			</div>
			<div className="col">
				<h2 className="heading">More Services</h2>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Body Work
				</a>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Car Repair
				</a>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Vehicle Towing
				</a>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Emergency
				</a>
			</div>
			<div className="col">
				<h2 className="heading">Assistance</h2>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Battery Service
				</a>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Car Diagnostics
				</a>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Schedule An Appt.
				</a>
				<a className="link" href="#">
					<i className="fa fa-circle-o-notch" />
					Support Center
				</a>
			</div>
			<div className="col">
				<h2 className="heading">Contact Us</h2>
				<a className="link" href="#">
					<i className="fa fa-phone-square" />
					551-580-7286
				</a>
				<a className="link" href="#">
					<i className="fa fa-envelope" />
					helmersolano@gmail.com
				</a>
				<a className="link" href="#">
					<i className="fa fa-clock-o" />
					Mon-Sat 8am - 6pm
				</a>
				<a className="link" href="#">
					<i className="fa fa-map-marker" />
					250 Davis Ave, Kearny, NJ 07032
				</a>
			</div>
		</div>
	);
}
