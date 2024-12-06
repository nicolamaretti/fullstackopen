import { useState } from "react";

const App = () => {
	const [people, setPeople] = useState([{ name: "Arto Hellas", number: "1234567890" }]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

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

	return (
		<div>
			<h2>Phonebook</h2>
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
			{people.map((person) => (
				<p key={person.name}>
					{person.name} {person.number}
				</p>
			))}
		</div>
	);
};

export default App;
