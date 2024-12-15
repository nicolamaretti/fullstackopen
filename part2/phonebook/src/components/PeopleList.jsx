import Person from "./Person";

const PeopleList = ({ people, filter, handleDeleteClick }) => {
	return people
		.filter((person) => person.name.toLowerCase().includes(filter))
		.map((person) => (
			<Person
				key={person.id}
				person={person}
				handleDeleteClick={handleDeleteClick}
			/>
		));
};

export default PeopleList;
