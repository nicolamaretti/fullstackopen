import CourseContent from "./CourseContent";
import CourseHeader from "./CourseHeader";

const Course = ({ course }) => {
	return (
		<div>
			<CourseHeader text={course.name} />
			<CourseContent parts={course.parts} />
		</div>
	);
};

export default Course;
