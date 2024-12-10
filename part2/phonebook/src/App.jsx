import { useState } from "react";

const App = () => {
	const [people, setPeople] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

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
			id: people.length + 1,
		};

		setPeople(people.concat(person));
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

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				filter shown with
				<input
					type="text"
					value={filter}
					onChange={handleChangeFilter}
				/>
			</div>

			<h2>add a new</h2>
			<form onSubmit={addInfos}>
				<div>
					name:{" "}
					<input
						value={newName}
						onChange={handleChangeName}
					/>
				</div>
				<div>
					number:{" "}
					<input
						value={newNumber}
						onChange={handleChangeNumber}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{people
				.filter((person) => person.name.toLowerCase().includes(filter))
				.map((person) => (
					<p key={person.id}>
						{person.name} {person.number}
					</p>
				))}
		</div>
	);
};

export default App;
