import React, { Component } from 'react';

export default class Counter extends Component {
	constructor(){
		super();
		this.handelIncrement=this.handelIncrement.bind(this); 
	}
	styles={
		fontSize: 20,
		fontWeight:'bold'
	}
	state={
		count: 1,
		tags:['tag1','tag2','tag3']
		//imageUrl:"https://picsum.photos/200"
		
	};	//component data
	handelIncrement(){
		
		this.setState({count:this.state.count +1});
	}
	render() {
	
		return (
			<div> {/* replace div with React.Fragment 
				<span> {this.state.count} </span> */}
				{/*<img src={this.state.imageUrl} alt=""/>*/}
				<span style={this.styles} className={this.getBadgeClasses()}> {this.formatCount()} </span>
				<button onClick={this.handelIncrement} style={{ fontSize:20 ,fontWeight:'bold'}} className="btn btn-secondary btn-sm">Increment</button>
				<ul>
					{this.state.tags.map( tag => <li key={tag}> {tag}</li>)}
				</ul>
			</div>
		);	
	}
	formatCount() {
		const {count}=this.state; {/*object de-structing this.state.count */}
		const x=<h1>Zero</h1>;
		return count===0 ? x : count;
	}
	getBadgeClasses(){
		let c="badge m-2 ";
		c +=  this.state.count ===0 ? "badge-warning" : "badge-primary" ;
		return c;
	}
}
