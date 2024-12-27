import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";
import SearchForm from "./components/SearchForm";
import countriesService from "./services/countries";
import weatherService from "./services/weather";

const App = () => {
	const [value, setValue] = useState("");
	const [countries, setCountries] = useState(null);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		if (!countries || countries.length !== 1) {
			return;
		}

		const country = countries[0];

		weatherService.getCountryWeather(country.name.common).then((weather) => {
			setWeather(weather);
		});
	}, [countries]);

	const handleChangeValue = (event) => {
		setValue(event.target.value);
	};

	const handleSumbit = (event) => {
		event.preventDefault();

		countriesService
			.getAll()
			.then((countries) => {
				setCountries(
					countries.filter((country) => country.name.common.toLowerCase().includes(value))
				);
			})
			.catch((error) => alert(error.message));
	};

	const handleShowButtonClicked = (countryName) => {
		countriesService.getCountryByName(countryName).then((data) => {
			setCountries([data]);
		});
	};

	return (
		<div>
			<SearchForm
				value={value}
				handleValueChange={handleChangeValue}
				handleSubmit={handleSumbit}
			/>
			<CountriesList
				countries={countries}
				weather={weather}
				handleShowButtonClicked={handleShowButtonClicked}
			/>
		</div>
	);
};

export default App;
