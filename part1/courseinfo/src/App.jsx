const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Content = (props) => {
	return (
		<p>
			{props.partName} {props.exercisesCount}
		</p>
	);
};

const Footer = (props) => {
	return <p>Number of exercises {props.total}</p>;
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content
				partName={part1}
				exercisesCount={exercises1}
			/>
			<Content
				partName={part2}
				exercisesCount={exercises2}
			/>
			<Content
				partName={part3}
				exercisesCount={exercises3}
			/>
			<Footer total={exercises1 + exercises2 + exercises3} />
		</div>
	);
};

export default App;
