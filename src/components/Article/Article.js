import React from 'react';
import './Article.css';
import Zoom from 'react-reveal/Zoom';

export default function Article(props) {
	return (
		<Zoom>
			<div className="article-container">
				<div className="img-col">
					<img src={props.image} height={props.height} width={props.width} alt="cars" />
				</div>
				<div className="article-col">
					<h1 className="article-heading">
						<strong>{props.title}</strong>
					</h1>
					{props.paragraphs.map((item, index) => (
						<p key={index} className="article-paragraph">
							{item}
						</p>
					))}
				</div>
			</div>
		</Zoom>
	);
}
