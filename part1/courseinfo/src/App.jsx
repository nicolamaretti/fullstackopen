const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	return (
		<p>
			{props.partName} {props.exercisesCount}
		</p>
	);
};

const Content = (props) => {
	return (
		<div>
			<Part
				partName={props.partName1}
				exercisesCount={props.exerciseCount1}
			/>
			<Part
				partName={props.partName2}
				exercisesCount={props.exerciseCount2}
			/>
			<Part
				partName={props.partName3}
				exercisesCount={props.exerciseCount3}
			/>
		</div>
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
				partName1={part1}
				exercisesCount1={exercises1}
				partName2={part2}
				exercisesCount2={exercises2}
				partName3={part3}
				exercisesCount3={exercises3}
			/>
			<Footer total={exercises1 + exercises2 + exercises3} />
		</div>
	);
};

export default App;
