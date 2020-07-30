import React from 'react';
import './Article.css';

export default function Article(props) {
	return (
		<div className="article-container">
			<div className="img-col">
				<img src={props.image} height="400" width="400" />
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
	);
}
