import React, { Component } from 'react';
import './Reviews.css';
import Review from './Review';
import Profile1 from './profile1.png';
import Profile2 from './profile2.png';
import Profile3 from './profile3.png';

export default class Reviews extends Component {
	render() {
		return (
			<div className="reviews-container">
				<Review
					image={Profile1}
					fullname={'Kevin Solorzano'}
					description={
						'Real hard-working professionals who know their craft well and get service done for you fast. Ask for Helmer, he treated me like family.'
					}
					stars={5}
				/>
				<Review
					image={Profile2}
					fullname={'Janet Blair'}
					description={
						'My car is old and they keep it running well. Good mechanics. I trust them. Fair prices.'
					}
					stars={4}
				/>
				<Review
					image={Profile3}
					fullname={'Maria H'}
					description={'Overall great experience. Fixed my car quick and was very honest. Highly recommend.'}
					stars={5}
				/>
				<div className="arrow-div">
					<div className="arrow-down" />
				</div>
			</div>
		);
	}
}
