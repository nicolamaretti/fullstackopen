import { useState } from "react";

const App = () => {
	const [people, setPeople] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const addPerson = (event) => {
		event.preventDefault();

		const person = {
			name: newName,
		};

		setPeople(people.concat(person));
		setNewName("");
	};

	const handleChangeName = (event) => {
		setNewName(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name:{" "}
					<input
						value={newName}
						onChange={handleChangeName}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{people.map((person) => (
				<p key={person.name}>{person.name}</p>
			))}
		</div>
	);
};

export default App;
