import CoursePart from "./CoursePart";

const CourseContent = ({ parts }) => {
	return (
		<div>
			{parts.map((part) => (
				<CoursePart
					key={part.id}
					name={part.name}
					exercises={part.exercises}
				/>
			))}
		</div>
	);
};

export default CourseContent;
