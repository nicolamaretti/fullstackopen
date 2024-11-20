import { useState } from "react";

const Button = ({ text, handleClick }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ goodVal, neutralVal, badVal, allVal, averageVal, positiveVal }) => {
	let feedbackGiven = false;

	if (goodVal !== 0 || neutralVal !== 0 || badVal !== 0) feedbackGiven = true;

	if (!feedbackGiven)
		return (
			<div>
				<h1>Statistics</h1>
				<p>No feedback given</p>
			</div>
		);
	else
		return (
			<div>
				<h1>Statistics</h1>
				<p>good {goodVal}</p>
				<p>neutral {neutralVal}</p>
				<p>bad {badVal}</p>
				<p>all {allVal}</p>
				<p>average {averageVal}</p>
				<p>positive {positiveVal} %</p>
			</div>
		);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [all, setAll] = useState(0);
	const [average, setAverage] = useState(0);
	const [positive, setPositive] = useState(0);

	const buttonClicked = (buttonName, buttonVal) => {
		const updatedValue = buttonVal + 1;
		const updatedAll = all + 1;

		setAll(updatedAll);

		switch (buttonName) {
			case "good":
				setGood(updatedValue);
				updateAverage(updatedValue, neutral, bad, updatedAll);
				updatePositive(updatedValue, updatedAll);

				break;
			case "neutral":
				setNeutral(updatedValue);
				updateAverage(good, updatedValue, bad, updatedAll);
				updatePositive(good, updatedAll);

				break;
			case "bad":
				setBad(updatedValue);
				updateAverage(good, neutral, updatedValue, updatedAll);
				updatePositive(good, updatedAll);

				break;
			default:
				return;
		}
	};

	const updateAverage = (goodVal, neutralVal, badVal, allVal) => {
		const multipliers = [1, 0, -1];
		const values = [goodVal, neutralVal, badVal];
		let weightedSum = 0;

		values.forEach((value, index) => {
			weightedSum += value * multipliers[index];
		});

		setAverage(weightedSum / allVal);
	};

	const updatePositive = (goodVal, allVal) => {
		console.log(goodVal, allVal);

		const result = (goodVal / allVal) * 100;
		setPositive(result);
	};

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button
				text="good"
				handleClick={() => buttonClicked("good", good)}
			/>
			<Button
				text="neutral"
				handleClick={() => buttonClicked("neutral", neutral)}
			/>
			<Button
				text="bad"
				handleClick={() => buttonClicked("bad", bad)}
			/>

			<Statistics
				goodVal={good}
				neutralVal={neutral}
				badVal={bad}
				allVal={all}
				averageVal={average}
				positiveVal={positive}
			/>
		</div>
	);
};

export default App;
