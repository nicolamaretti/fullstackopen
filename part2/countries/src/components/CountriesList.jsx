import Country from "./Country";
import Weather from "./Weather";

const CountriesList = ({ countries, handleShowButtonClicked, weather }) => {
	if (!countries) return;
	if (countries.length === 0) return <p>No results found</p>;
	if (countries.length >= 10) return <p>Too many matches, specify another filter</p>;
	if (countries.length === 1) {
		return (
			<div>
				<Country country={countries[0]} />
				<Weather weather={weather} />
			</div>
		);
	}

	// countries list
	return (
		<div>
			{countries.map((country) => (
				<div key={country.cca2}>
					<span>{country.name.common} </span>
					<button onClick={() => handleShowButtonClicked(country.name.common)}>show</button>
				</div>
			))}
		</div>
	);
};

export default CountriesList;
