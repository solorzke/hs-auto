import React, { Component } from 'react';
import './Reviews.css';
import Review from './Review';

export default class Reviews extends Component {
	render() {
		return (
			<div className="reviews-container">
				<Review
					fullname={'Kevin Solorzano'}
					description={
						'Real hard-working professionals who know their craft well and get service done for you fast. Ask for Helmer, he treated me like family.'
					}
					stars={5}
				/>
				<Review
					fullname={'Janet Blair'}
					description={
						'My car is old and they keep it running well. Good mechanics. I trust them. Fair prices.'
					}
					stars={4}
				/>
				<Review
					fullname={'Maria H'}
					description={'Overall great experience. Fixed my car quick and was very honest. Highly recommend.'}
					stars={5}
				/>
			</div>
		);
	}
}
