import React from 'react';
import './Reviews.css';
import Stars from './Star';

export default function Review(props) {
	return (
		<div className="review">
			<div className="avi">
				<img src={props.image} width="50" alt="Profile .ico" />
			</div>
			<div className="description">
				<div className="name-review">
					<h2 style={{ paddingRight: 10 }} className="fullname">
						{props.fullname}
					</h2>
					<Stars stars={props.stars} />
				</div>
				<div className="des-text">
					<p>
						<i>"{props.description}"</i>
					</p>
				</div>
			</div>
		</div>
	);
}
