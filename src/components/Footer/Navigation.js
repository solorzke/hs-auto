import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export default function Navigation() {
	return (
		<div className="navigation-container">
			<div className="col">
				<h2 className="heading">Services</h2>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Oil Change
				</Link>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Brake Replacement
				</Link>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Tires Check
				</Link>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Engine Installation
				</Link>
			</div>
			<div className="col">
				<h2 className="heading">More Services</h2>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Body Work
				</Link>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Car Repair
				</Link>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Vehicle Towing
				</Link>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Emergency
				</Link>
			</div>
			<div className="col">
				<h2 className="heading">Assistance</h2>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Battery Service
				</Link>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Car Diagnostics
				</Link>
				<Link className="link" to="/services">
					<i className="fa fa-chevron-circle-right" />
					Schedule An Appt.
				</Link>
				<Link className="link" to="/help">
					<i className="fa fa-chevron-circle-right" />
					Support Center
				</Link>
			</div>
			<div className="col">
				<h2 className="heading">Contact Us</h2>
				<Link className="link" to="/contact">
					<i className="fa fa-phone-square" />
					551-580-7286
				</Link>
				<Link className="link" to="/contact">
					<i className="fa fa-envelope" />
					helmersolano@gmail.com
				</Link>
				<Link className="link" to="/contact">
					<i className="fa fa-clock-o" />
					Mon-Sat 8am - 6pm
				</Link>
				<Link className="link" to="/contact">
					<i className="fa fa-map-marker" />
					250 Davis Ave, Kearny, NJ 07032
				</Link>
			</div>
		</div>
	);
}
