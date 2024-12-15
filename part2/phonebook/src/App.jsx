import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import PeopleList from "./components/PeopleList";
import peopleService from "./services/people";

const App = () => {
	const [people, setPeople] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	useEffect(() => {
		peopleService.getAll().then((people) => {
			setPeople(people);
		});
	}, []);

	const addInfos = (event) => {
		event.preventDefault();

		const found = people.find((person) => person.name === newName);

		if (found) {
			alert(`${newName} is already added to phonebook`);
			return;
		}

		const person = {
			name: newName,
			number: newNumber,
		};

		peopleService.addPerson(person).then((addedPerson) => {
			setPeople(people.concat(addedPerson));
		});

		setNewName("");
		setNewNumber("");
	};

	const handleChangeName = (event) => {
		setNewName(event.target.value);
	};

	const handleChangeNumber = (event) => {
		setNewNumber(event.target.value);
	};

	const handleChangeFilter = (event) => {
		setFilter(event.target.value);
	};

	const handlePersonDeletion = (person) => {
		if (window.confirm(`Delete ${person.name}?`))
			peopleService
				.deletePerson(person.id)
				.then(() => setPeople(people.filter((p) => person.id !== p.id)))
				.catch((error) => alert(error.message));
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				filter shown with
				<Filter
					filter={filter}
					handleChangeFilter={handleChangeFilter}
				/>
			</div>

			<h2>add a new</h2>
			<Form
				addInfos={addInfos}
				newName={newName}
				handleChangeName={handleChangeName}
				newNumber={newNumber}
				handleChangeNumber={handleChangeNumber}
			/>
			<h2>Numbers</h2>
			<PeopleList
				people={people}
				filter={filter}
				handleDeleteClick={handlePersonDeletion}
			/>
		</div>
	);
};

export default App;
