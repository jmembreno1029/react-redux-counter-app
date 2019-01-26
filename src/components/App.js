import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import {
	increment,
	decrement,
	inputNumber,
	inputNumberChange
} from "../actions/index";

const divStyle = {
	textAlign: "center",
	border: "dashed",
	padding: "3rem",
	margin: "3rem 6rem 2rem 6rem"
};

class App extends React.Component {
	render() {
		return (
			<div style={divStyle}>
				<h2>Counter</h2>
				<Counter
					count={this.props.count}
					timesClicked={this.props.timesClicked}
					onIncrement={this.props.onIncrement}
					onDecrement={this.props.onDecrement}
					onInputNumber={this.props.onInputNumber}
					onInputNumberChange={this.props.onInputNumberChange}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrement: () => dispatch(increment()),
		onDecrement: () => dispatch(decrement()),
		onInputNumber: () => dispatch(inputNumber()),
		onInputNumberChange: number => dispatch(inputNumberChange(number))
	};
}
function mapStateToProps(state) {
	return {
		count: state.count,
		timesClicked: state.timesClicked,
		numberInputted: state.numberInputted
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
