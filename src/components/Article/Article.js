import React from 'react';
import './Article.css';
import { Link } from 'react-router-dom';
import EngineGif from './Engine.gif';

export default function Article(props) {
	return (
		<div className="article-container">
			<div className="img-col">
				<img src={EngineGif} height="400" width="400" />
			</div>
			<div className="article-col">
				<h1 className="article-heading">
					<strong>HS Auto &amp; Trucking Services</strong>
				</h1>
				<p className="article-paragraph">
					At HS Auto, you can relax knowing we will get the job done with anything that your vehicle needs. We
					handle anything from oil changes, filter changes, battery replacements, auto body upgrades, engine
					installations, car diagnostics, and more.
				</p>
				<p className="article-paragraph">
					Ever since 2010, we at HS Auto have always been providing our friends with trustworthy, professional
					vehicle repair and trucking services at a industry-standard quality. No matter how small the deed is
					or how big the job is, you can count on us to get done right and quick enough to get you back on the
					road again.
				</p>
				<p className="article-paragraph">
					Tune-ups, engine installations, oil changes, parts assembly, or towing requests, it doesn't matter.
					Our technicians take pride in their work to make sure we give you a quality service while saving
					time and money.
				</p>
			</div>
		</div>
	);
}
