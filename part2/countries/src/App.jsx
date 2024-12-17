import { useState } from "react";
import CountriesList from "./components/CountriesList";
import SearchForm from "./components/SearchForm";
import countriesService from "./services/countries";

const App = () => {
	const [value, setValue] = useState("");
	const [countries, setCountries] = useState(null);

	const handleChangeValue = (event) => {
		setValue(event.target.value);
	};

	const handleSumbit = (event) => {
		event.preventDefault();

		countriesService
			.getAll()
			.then((data) => {
				setCountries(data.filter((country) => country.name.common.toLowerCase().includes(value)));
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div>
			<SearchForm
				value={value}
				handleValueChange={handleChangeValue}
				handleSubmit={handleSumbit}
			/>
			<CountriesList countries={countries} />
		</div>
	);
};

export default App;
