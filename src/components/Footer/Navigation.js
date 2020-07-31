import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export default function Navigation() {
	return (
		<div className="navigation-container">
			<div className="col">
				<h2 className="heading">Services</h2>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Oil Change
				</a>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Brake Replacement
				</a>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Tires Check
				</a>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Engine Installation
				</a>
			</div>
			<div className="col">
				<h2 className="heading">More Services</h2>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Body Work
				</a>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Car Repair
				</a>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Vehicle Towing
				</a>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Emergency
				</a>
			</div>
			<div className="col">
				<h2 className="heading">Assistance</h2>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Battery Service
				</a>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Car Diagnostics
				</a>
				<a className="link" href="#">
					<i className="fa fa-chevron-circle-right" />
					Schedule An Appt.
				</a>
				<Link className="link" to="/help">
					<i className="fa fa-chevron-circle-right" />
					Support Center
				</Link>
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
