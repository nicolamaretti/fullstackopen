const Person = ({ person, handleDeleteClick }) => {
	return (
		<div>
			<span>
				{person.name} {person.number}
			</span>
			<button onClick={() => handleDeleteClick(person)}>delete</button>
		</div>
	);
};

export default Person;
