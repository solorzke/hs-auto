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
							<p style={styles.title}>Auto Repair</p>
							<p style={styles.subtitle}>High quality repair service</p>
						</div>
					</a>
				</div>
				<div className="item">
					<a href="#">
						<i className="fa fa-car icon" />
						<div className="row-text">
							<p style={styles.title}>Auto Body</p>
							<p style={styles.subtitle}>We can improve upon your car's quality</p>
						</div>
					</a>
				</div>
			</div>
			<div className="row">
				<div className="item">
					<a href="#">
						<i className="fa fa-plus-square icon" />
						<div className="row-text">
							<p style={styles.title}>Emergency Services</p>
							<p style={styles.subtitle}>We're on our way to help you</p>
						</div>
					</a>
				</div>
				<div className="item">
					<a href="#">
						<i className="fa fa-battery-full icon" />
						<div className="row-text">
							<p style={styles.title}>Battery Delivery Service</p>
							<p style={styles.subtitle}>Delivery to your car</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

const styles = {
	title: {
		fontSize: 20,
		textDecoration: 'none',
		color: '#000'
	},

	subtitle: {
		fontSize: 10,
		color: '#000'
	}
};
