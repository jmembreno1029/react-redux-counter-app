import React from "react";

const inputStyle = {
	margin: "1em"
};

const numHighlight = {
	color: "blue",
	backgroundColor: "yellow"
};

const Counter = ({
	count,
	onDecrement,
	onIncrement,
	timesClicked,
	onInputNumberChange,
	numberInputted,
	onInputNumber
}) => {
	return (
		<div>
			<div>
				<button onClick={onDecrement}>-</button>
				<span style={numHighlight}>{count}</span>
				<button onClick={onIncrement}>+</button>
			</div>
			<br />
			<span>
				Number of Times the increment/decrement buttons have been clicked:{" "}
				<span style={numHighlight}>{timesClicked}</span>
			</span>
			<br />
			<input
				style={inputStyle}
				onChange={event => onInputNumberChange(event.target.value)}
				type="text"
				value={numberInputted}
			/>
			<button onClick={onInputNumber}>Change Count Number</button>
		</div>
	);
};

export default Counter;
