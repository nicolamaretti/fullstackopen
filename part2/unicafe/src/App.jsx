import { useState } from "react";

const Button = ({ text, handleClick }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button
				text="good"
				handleClick={() => setGood(good + 1)}
			/>
			<Button
				text="neutral"
				handleClick={() => setNeutral(neutral + 1)}
			/>
			<Button
				text="bad"
				handleClick={() => setBad(bad + 1)}
			/>

			<h1>Statistics</h1>
			<p>Good {good}</p>
			<p>Neutral {neutral}</p>
			<p>Bad {bad}</p>
		</div>
	);
};

export default App;
