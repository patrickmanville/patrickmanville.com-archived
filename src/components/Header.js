import React from 'react';

// const Header = ({ message, type }) => {
// 	if (type == 'text'){
// 		var messagelength = message.length;
// 		var letternumber = 0;
// 		var stop = false;
// 		var newmessage = message.split("").map(function(x){
// 			letternumber ++;
// 			if (stop == true ){
// 				letternumber += 15;
// 				stop = false;
// 			}
// 			if (x == "." | x == "?"){
// 				stop = true;
// 			}
// 			var lets = `delay-${letternumber}`;
// 			if (x != '~'){
// 				return <span className={lets}>{x}</span>;
// 			}
// 			return <br></br>;
// 		})
// 		return (
// 			<h2 className="text-center">
// 				{ newmessage }
// 			</h2>
// 		);
// 	}
// 	if (type == 'form'){
// 		return (
// 			<form>
// 				<input className="name" ref="name" ></input>
// 			</form>
// 		);
// 	}
// };

class Module extends React.Component {
	onSubmit = (evt) => {
		evt.preventDefault();
		this.props.parentObject.formSubmit(this.state.myval)
	}
	onInput = (evt) => {
		this.setState({
			myval: evt.target.value
		})
	}
	render() {
		if (this.props.type == 'text'){
			var messagelength = this.props.message.length;
			var letternumber = 0;
			var stop = false;
			var newmessage = this.props.message.split("").map(function(x){
				letternumber ++;
				if (stop == true ){
					letternumber += 15;
					stop = false;
				}
				if (x == "." | x == "?"){
					stop = true;
				}
				var lets = `delay-${letternumber}`;
				if (x != '~'){
					return <span className={lets}>{x}</span>;
				}
				return <br></br>;
			});
			return (
				<h2 className="text-center" >
					{ newmessage }
				</h2>
			);
		}
		if (this.props.type == 'form'){
			return (
				<form onSubmit={evt => this.onSubmit(evt)} >
					<input className="name" onChange={ this.onInput } ></input>
				</form>
			);
		}
		if (this.props.type == 'button'){
			return (
				<div className="button" >{ this.props.message }</div>
			);
		}
	}
};

Module.propTypes = {
	message: React.PropTypes.string,
	type: React.PropTypes.string
}

export default Module;