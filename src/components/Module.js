import React from 'react';
import PropTypes from 'prop-types';

class Module extends React.Component {
	render() {
		if (this.props.type == 'text'){
			if (!this.props.message){
				return ('');
			};
			var letternumber = this.props.number;
			var stop = false;
			var newmessage = this.props.message;
			return (
				<h2 className="text-center" >
					{ newmessage }
				</h2>
			);
		}
		if (this.props.type == 'paragraph'){
			if (!this.props.message){
				return ('');
			};
			var letternumber = this.props.number;
			var stop = false;
			var newmessage = this.props.message;
			return (
				<p className="text-center paragraph" >
					{ newmessage }
				</p>
			);
		}
		if (this.props.type == 'work'){
			if (!this.props.urls){
				return ('');
			};
			var newurl = this.props.urls;
			var newurlarray = [];
			for(var i = 0; i < newurl.length; i++){
				newurlarray.push(
					<div key={i} className="work">
						<div className="front">
						<img className="image" src={ newurl[i].img } />
						</div>
						<a href={newurl[i].url} >
							<div className="back">
								<div className="back-inner">
								<h3 className="name">{ newurl[i].name }</h3>
								<h4 className="description">{ newurl[i].description }</h4>
								</div>
							</div>
						</a>
					</div>
				);
			}
			return (
				<div className="works">
					<div className="works-inner">
					{ newurlarray }
					</div>
				</div>
			);
		}
		if (this.props.type == 'experience'){
			if (!this.props.date){
				return ('');
			};
			var left = this.props.message? '' : ' one-col' ;
			return (
				<div className={'experience' + left}>
					<div className="left-section">
						<p className="date" >{ this.props.date }</p>
						<p className="position">{ this.props.position }</p>
						<p className="location">{ this.props.location }</p>
					</div>
					<div className="right-section">
						<p className="message">{ this.props.message}</p>
					</div>
				</div>
			);
		}
		if (this.props.type == 'skill'){
			if (!this.props.message){
				return ('');
			};
			var letternumber = this.props.number;
			var stop = false;
			var newmessage = this.props.message;
			var newrating = [];
			for (var i = 0; i < 5; i++){
				if (i < this.props.rating){
					newrating.push(<span key={i} className="star"></span>)
				}
				else {
					newrating.push(<span key={i} className="star inactive"></span>)
				}
			}
			var thisclass = "stars";
			return (
				<div className="skill" >
					<p className="text-center">
						{ newmessage }
					</p>
					<p className={ thisclass }>
						{ newrating}
					</p>
				</div>
			);
		}
		if (this.props.type == 'header'){
			if (!this.props.message){
				return ('');
			};
			return (
				<h2 className="text-center header" >
					{ this.props.message }
				</h2>
			);
		}
		if (this.props.type == 'button'){
			var lets = `button delay-${this.props.number}`;
			return (
				<a className={lets} href={ this.props.onClickEvent } >{ this.props.message }</a>
			);
		}
	}
};

Module.propTypes = {
	header: PropTypes.string,
	work: PropTypes.string,
	experience: PropTypes.string,
	message: PropTypes.array,
	skill: PropTypes.string,
	front: PropTypes.string,
	back: PropTypes.string,
	type: PropTypes.string,
	urls: PropTypes.array,
	paragraph: PropTypes.string,
	date: PropTypes.string,
	position: PropTypes.string,
	location: PropTypes.string,
	number: PropTypes.number
}

export default Module;