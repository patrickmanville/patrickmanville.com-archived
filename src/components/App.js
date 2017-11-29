import React from 'react';
import Module from './Module';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';
// import ContestPreview from './ContestPreview';
// import data from '../testData';

const pushState = (obj, url) =>
	window.history.pushState(obj, '', url);

const onPopState = handler => {
	window.onpopstate = handler;
}

class App extends React.Component {
	static propTypes = {
		initialData: React.PropTypes.object.isRequired
	};
	state = this.props.initialData;
	componentWillMount() {
	}
	componentDidUpdate() {
		if(this.state.refresh == true){
			this.setState({
				refresh: false
			})
		}
	}
	componentDidMount() {
		onPopState((event) => {
			this.setState({
				currentContestId: (event.state || {}).currentContestId
			})
		});
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
							message: "\'Front-end Developer\'"
						},
					],
					[
						{
							type: "\'header\'",
							message: "\'Experience\'"
						},
						{
							type: "\'text\'",
							message: "\'My work history & education\'"
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
							position: "\'BSC Computer Games Design\'",
							location: "\'Staffordshire University\'",
						},
						{
							type: "\'experience\'",
							date: "\'2001 - 2008\'",
							location: "\'Planstbrook School\'",
						},
					],
					[
						{
							type: "\'header\'",
							message: "\'Skills\'"
						},
						{
							type: "\'text\'",
							message: "\'My current ability levels\'"
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
							message: "\'JavaScript\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Responsive Design\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'jQuery\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'NodeJS\'",
							rating: "\'2\'"
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
							message: "\'Hubspot CMS\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'PHP\'",
							rating: "\'2\'"
						},
						{
							type: "\'skill\'",
							message: "\'Semantic HTML\'",
							rating: "\'2\'"
						},
						{
							type: "\'skill\'",
							message: "\'APIs\'",
							rating: "\'2\'"
						},
						{
							type: "\'skill\'",
							message: "\'ReactJS\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'Sass\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'Command line\'",
							rating: "\'3\'"
						}
					],
					[
						{
							type: "\'header\'",
							message: "\'Work\'"
						},
						{
							type: "\'text\'",
							message: "\'A selection of projects I have worked on\'"
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
					],
					[
						{
							type: "\'header\'",
							message: "\'Contact\'"
						},
						{
							type: "\'text\'",
							message: "\'Get in touch\'"
						},
						{
							type: "\'button\'",
							message: "\'Email me\'",
							onClickEvent: "{this.changePage}"
						},
						// {
						// 	type: "\'button\'",
						// 	message: "\'Add me on LinkedIn\'",
						// 	onClickEvent: "{this.changePage}"
						// }
					]
				]
			}
		});
	}
	componentWillUnmount() {
		// clean timers, listeners
		onPopState(null);

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
		var animation = 0;
		var imgs = 0;
		if (this.state.contents){
			for (var i = 0; i < this.state.contents[thispage].length; i++){ 
				var allprops = { ...this.state.contents[thispage][i]};
				allprops.number = animation;
				for (var p in allprops) {
					allprops[p] = eval(allprops[p]);
					if (p == 'message'){
						if (allprops.type == 'button'){
								animation += 15;
						}
						var stop = false;
						var proplength = allprops.message.length - 1;
						// console.log(allprops.message);
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
								// if (x == ' '){
								// 	return <i></i>;
								// }
								if (x != '~'){
									return <span key={index} className={lets}>{x}</span>;
								}
								return <br key={index}></br>;
							}
						);
						// var cheese = function(){return allprops.message}() ;
						// console.log(cheese);
						// console.log(allprops.message);
						// allprops.message = allprops.message.split("<i></i>").map(
						// 	function(x, index){
						// 		return <span>{x}</span>;
						// 	}
						// );
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
	makePage(){
		var result = [];
		for (var i = 0; i <= 4; i++){
			var stuff = <div key={i} onClick={this.changePages.bind(this, i)} className={'App page-' + i + ' menu menu-' + i + this.activePage(i)}>
					<div className="main-wrapper">
						<div className="left-section">
							<div className="background-section">
								<div className="background">
									<div className="phone">
										<div className="phone-screen">
											<div className="phone-contents">
												<div className="moon">
												</div>
												<div className="sun">
													<div className="sun-part sun-part-1"></div>
													<div className="sun-part sun-part-2"></div>
													<div className="sun-part sun-part-3"></div>
													<div className="sun-part sun-part-4"></div>
													<div className="sun-part sun-part-5"></div>
													<div className="sun-core"></div>
												</div>
												<div className="flag flag-england-top"></div>
												<div className="flag flag-left"></div>
												<div className="flag flag-middle"></div>
												<div className="flag flag-right"></div>
											</div>
										</div>
										<div className="phone-stand">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-section">
						<div className="text-wrapper">
							{this.makeModule(i)}
						</div>
					</div>
				</div>;
			result.push(stuff);
		};
		return result;
	}
	render() {
		return (
			<div className="root-inner">
				{this.makePage()}
			</div>
		);
	}
}

export default App;

