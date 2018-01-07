import React from 'react';
import Module from './Module';
import * as api from '../api';
import PropTypes from 'prop-types';

class App extends React.Component {
	state = {};
	componentDidUpdate() {
		if(this.state.refresh == true){
			this.setState({
				refresh: false
			})
		}
	}
	componentDidMount() {
		this.setState(function(props){
			return {
				page: 0,
				refresh: false,
				contents: [
					[
						{
							type: "\'header\'",
							message: "\'Patrick Manville\'"
						},
						{
							type: "\'text\'",
							message: "\'Web Developer\'"
						},
						{
							type: "\'button\'",
							message: "\'Email\'",
							onClickEvent: "\'mailto:patrickmanville@yahoo.co.uk\'"
						},
						{
							type: "\'button\'",
							message: "\'LinkedIn\'",
							onClickEvent: "\'https://uk.linkedin.com/in/patrick-manville\'"
						},
					],
					[
						{
							type: "\'header\'",
							message: "\'Experience\'"
						},
						{
							type: "\'text\'",
							message: "\'My coding experience at a glance\'"
						},
						{
							type: "\'experience\'",
							date: "\'2016 - Present\'",
							position: "\'Lead Developer\'",
							location: "\'Tomorrow People\'",
							message: "\'Creating pixel-perfect websites based on UX design and leading web projects to tight deadlines in a fast-paced digital agency for clients predominantly in the technology sector.\'"
						},
						{
							type: "\'experience\'",
							date: "\'2013 - 2016\'",
							position: "\'Junior Developer\'",
							location: "\'Tomorrow People\'",
							message: "\'Ensuring websites work across browsers and devices and maintaining performance by running A/B tests, identifying UI issues and proposing and implementing solutions.\'"
						},
						{
							type: "\'experience\'",
							date: "\'2008 - 2012\'",
							position: "\'BSc Computer Games Design\'",
							location: "\'Staffordshire University\'",
							message: "\'Using front-end languages such as HTML, CSS & JavaScript to complete web-based projects as well as studying object-oriented programming in Java and C++.\'"
						
						},
					],
					[
						{
							type: "\'header\'",
							message: "\'Skills\'"
						},
						{
							type: "\'text\'",
							message: "\'Here\\'s what I do best\'"
						},
						{
							type: "\'skill\'",
							message: "\'HTML\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'CSS\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'Sass\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'JavaScript\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'jQuery\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'EJS\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'ReactJS\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'NodeJS\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'PHP\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'Git\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Gulp\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Grunt\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Bootstrap\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'Drupal\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Wordpress\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Responsive Design\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'Semantic HTML\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'Command line\'",
							rating: "\'4\'"
						}
					],
					[
						{
							type: "\'header\'",
							message: "\'Work\'"
						},
						{
							type: "\'text\'",
							message: "\'See some of my work in action\'"
						},
						{
							type: "\'work\'",
							urls: [
								{
									name: "PreciseTV",
									description: "By Tomorrow People",
									img: "/assets/images/precise.png",
									url: "http://www.precise.tv/"
								},
								{
									name: "Arkadin",
									description: "By Tomorrow People",
									img: "/assets/images/arkadin.png",
									url: "http://connected.arkadin.com/"
								},
								{
									name: "Tomorrow People",
									description: "By Tomorrow People",
									img: "/assets/images/tomorrow-people.png",
									url: "http://www.tomorrow-people.com/"
								},
								{
									name: "TechData",
									description: "By Tomorrow People",
									img: "/assets/images/techdata.png",
									url: "http://trustedadvisor.techdata.co.uk/"
								},
								{
									name: "Cubiks",
									description: "By Tomorrow People",
									img: "/assets/images/cubiks.png",
									url: "https://practicetests.cubiks.com/"
								},
								{
									name: "Qualco",
									description: "By Tomorrow People",
									img: "/assets/images/qualco.png",
									url: "http://www.qualco.co.uk/"
								},
								{
									name: "Hyster-Yale",
									description: "By Tomorrow People",
									img: "/assets/images/hyster-yale.png",
									url: "http://dependable.hyster.com/HysterXT"
								},
								{
									name: "Sanderson",
									description: "By Tomorrow People",
									img: "/assets/images/sanderson.png",
									url: "https://www.sanderson.com/"
								},
							]
						}
					]
				]
			}
		});
	}
	handleClick = (evt) => {
		evt.preventDefault();
		if (this.refs.name !== null ){
			this.setState({
				pageBody: this.refs.name.value
			})
		}
	}
	onInputEvent = (evt) => {
		this.setState({
			myval: evt.target.value
		})
	}
	changePage = () => {
		this.setState({
			page: this.state.page + 1,
			refresh: true
		})
	}
	findType(i){
		if (this.state.contents){
			if (eval("this.state.contents[0][" + i + "]")){
				var result = eval("this.state.contents[0][" + i + "].type");
				result = eval(result);
				return result;
			}
		}
		return 'text';
	}
	findMessage(i){
		if (this.state.contents){
			if (eval("this.state.contents[0][" + i + "]")){
				var result = eval("this.state.contents[0][" + i + "].message");
				result = eval(result);
				return result;
			}
		}
		return '';
	}
	makeModule(thispage){
		var result = [];
		var animation = 10;
		var imgs = 0;
		if (this.state.contents){
			for (var i = 0; i < this.state.contents[thispage].length; i++){ 
				var allprops = { ...this.state.contents[thispage][i]};
				allprops.number = animation;
				for (var p in allprops) {
					allprops[p] = eval(allprops[p]);
					if (p == 'message' && allprops.type != 'paragraph'){
						if (allprops.type == 'button'){
								animation += 15;
						}
						var stop = false;
						var proplength = allprops.message.length - 1;
						allprops.message = allprops.message.split("").map(
							function(x, index){
								animation ++;
								if (stop == true ){
									animation += 15;
									stop = false;
								}
								if (x == "." | x == "?"){
									stop = true;
								}
								var lets = `delay-${animation}`;
								if (x != '~'){
									return <span key={index} className={lets}>{x}</span>;
								}
								return <br key={index}></br>;
							}
						);
					}
				}
				animation += 5;
				allprops.key = i;
				result.push(React.createElement(Module, allprops));
				
			}
		};
		return result;
	}
	page(i){
		return "App page-" + i;
	}
	activePage(i){
		if (i == this.state.page){
			return ' active';
		}
		return '';
	}
	changePages = (i, e) =>{
		this.setState({
			page : i
		})
	}
	checkIfLoaded(){
		if(this.state.contents){
			return "root-inner loaded"
		}
		return "root-inner";
	}
	loader(){

	}
	makePage(){
		var result = [];
		for (var i = 0; i <= 3; i++){
			var stuff = <section key={i} onClick={this.changePages.bind(this, i)} className={'app page-' + i + this.activePage(i)}>
							<i></i>
							<div className="text-section">
								<div className="text-wrapper">
									{this.makeModule(i)}
								</div>
							</div>
						</section>;
			result.push(stuff);
		};
		return result;
	}
	render() {
		return (
			<div className={this.checkIfLoaded()}>
				{this.makePage()}
			</div>
		);
	}
}

export default App;

