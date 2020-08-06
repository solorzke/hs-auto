import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Partners.css';

export default function Partner(props) {
	return (
		<Bounce>
			<div className="img-container">
				<a href={props.link} target="_blank" rel="noopener noreferrer">
					<img src={props.img} height="100" width="300" alt={props.alt} />
				</a>
			</div>
		</Bounce>
	);
}
