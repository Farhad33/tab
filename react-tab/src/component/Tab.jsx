import React, { Component } from 'react';
import styled from 'styled-components';
var rand = require("random-key");


class Tab extends Component {
	constructor() {
		super()
		this.state = {
			tabs: [
				{name: 'one', color: 'red', content: 'this is tab one content'},
				{name: 'two', color: 'blue', content: 'this is tab two content'},
				{name: 'three', color: 'green', content: 'this is tab three content'},
			],
			selected: 'one'
		}
	}

	makeTab() {
		return this.state.tabs.map(tab => (
			<Li
				color={tab.color}
				key={rand.generate()}
				index={this.state.selected === tab.name}
				onClick={() => {this.setState({selected: tab.name})}}>
				{tab.name}
			</Li>
		))
	}

	makeContent() {
		return this.state.tabs.map(tab => (
			<Content
				color={tab.color}
				selected={this.state.selected === tab.name}
				key={rand.generate()}>
				<p>{tab.content}</p>
			</Content>
		))
	}

	// tabClick(e) {
	// 	(e) => (
	// 		console.log(e)
	// 	)
	// }

	render() {
		return (
			<Container>
				<Ul>
					{this.makeTab()}
				</Ul>
				<div>
					{this.makeContent()}
				</div>
			</Container>
		);
	}
}

const Container = styled.div`
	width: 500px;
	margin: 10px auto;
	position: relative;
`;

const Content = styled.div`
	background-color: ${props => props.color};
	display: ${props => props.selected ? 'block' : 'none'};
	height: 200px;
	line-height: 200px;
	width: 100%;
	border-radius: 5px;
	border: 2px solid #000;
	position: absolute;
	top: 53px;
	z-index: 2;
	vertical-align: middle;
`;

const Li = styled.li`
	background-color: ${props => props.color};
	padding: 15px;
	margin-left: 10px;
	border-top-right-radius: 5px;
	border-top-left-radius: 5px;
	border-top: 2px solid #000;
	border-right: 2px solid #000;
	border-left: 2px solid #000;
	font-size: 20px;
	z-index: ${props => props.index ? 3 : 1};
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: row;
`;

export default Tab;
