import CoursePart from "./CoursePart";

const CourseContent = ({ parts }) => {
	let exercisesTotal = 0;

	return (
		<div>
			{parts.map((part) => {
				exercisesTotal += part.exercises;

				return (
					<CoursePart
						key={part.id}
						name={part.name}
						exercises={part.exercises}
					/>
				);
			})}
			<p style={{ fontWeight: 700 }}>total of {exercisesTotal} exercises</p>
		</div>
	);
};

export default CourseContent;
