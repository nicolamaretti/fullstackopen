import Person from "./Person";

const PeopleList = ({ people, filter }) => {
	return people
		.filter((person) => person.name.toLowerCase().includes(filter))
		.map((person) => (
			<Person
				key={person.id}
				person={person}
			/>
		));
};

export default PeopleList;
