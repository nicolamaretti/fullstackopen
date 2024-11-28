import CoursePart from "./CoursePart";

const CourseContent = ({ parts }) => {
	const exercisesTotal = Object.values(parts).reduce((sum, part) => (sum += part.exercises), 0);

	return (
		<div>
			{parts.map((part) => {
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
