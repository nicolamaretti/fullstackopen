import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Notification from "./components/Notification";
import PeopleList from "./components/PeopleList";
import peopleService from "./services/people";

const App = () => {
	const [people, setPeople] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");
	const [notificationMessage, setNotificationMessage] = useState(null);
	const [type, setType] = useState(null);

	useEffect(() => {
		peopleService.getAll().then((people) => {
			setPeople(people);
		});
	}, []);

	const handleAddButtonClicked = (event) => {
		event.preventDefault();

		const foundPerson = people.find((person) => person.name === newName);

		if (foundPerson) {
			if (
				window.confirm(
					`${newName} is already added to phonebook, replace the old number with a new one?`
				)
			) {
				updateInfos(foundPerson);
				showNotificationMessage("success", `Updated ${foundPerson.name}`);
			} else return;
		} else {
			addInfos();
			showNotificationMessage("success", `Added ${newName}`);
		}

		hideNotificationMessage();
		setNewName("");
		setNewNumber("");
	};

	const addInfos = () => {
		const person = {
			name: newName,
			number: newNumber,
		};

		peopleService.addPerson(person).then((addedPerson) => {
			setPeople(people.concat(addedPerson));
		});
	};

	const updateInfos = (person) => {
		peopleService
			.updatePerson({ ...person, number: newNumber })
			.then((updatedPerson) => {
				setPeople(people.map((p) => (p.id === updatedPerson.id ? updatedPerson : p)));
			})
			.catch((error) => {
				showNotificationMessage("error", error.message);
				hideNotificationMessage();
			});
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
				.then(() => {
					setPeople(people.filter((p) => person.id !== p.id));
					showNotificationMessage("success", `Deleted ${person.name}`);
					hideNotificationMessage();
				})
				.catch(() => {
					showNotificationMessage(
						"error",
						`Information of ${person.name} has already been removed from the server`
					);
					hideNotificationMessage();
				});
	};

	const showNotificationMessage = (type, message) => {
		setType(type);
		setNotificationMessage(message);
	};

	const hideNotificationMessage = () => {
		setTimeout(() => {
			setNotificationMessage(null);
		}, 3000);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification
				message={notificationMessage}
				type={type}
			/>
			<div>
				filter shown with
				<Filter
					filter={filter}
					handleChangeFilter={handleChangeFilter}
				/>
			</div>

			<h2>add a new</h2>
			<Form
				handleAddButtonClicked={handleAddButtonClicked}
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
