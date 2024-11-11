const Header = (props) => {
	console.log(props);
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	console.log(props);
	return (
		<p>
			{props.partName} {props.exercisesCount}
		</p>
	);
};

const Content = (props) => {
	console.log(props);
	return (
		<div>
			<Part
				partName={props.part1.name}
				exercisesCount={props.part1.exercises}
			/>
			<Part
				partName={props.part2.name}
				exercisesCount={props.part2.exercises}
			/>
			<Part
				partName={props.part3.name}
				exercisesCount={props.part3.exercises}
			/>
		</div>
	);
};

const Footer = (props) => {
	return <p>Number of exercises {props.total}</p>;
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	return (
		<div>
			<Header course={course} />
			<Content
				part1={part1}
				part2={part2}
				part3={part3}
			/>
			<Footer total={part1.exercises + part2.exercises + part3.exercises} />
		</div>
	);
};

export default App;
