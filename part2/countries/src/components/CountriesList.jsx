import Country from "./Country";

const CountriesList = ({ countries, handleShowButtonClicked }) => {
	if (!countries) return;
	if (countries.length === 0) return <p>No results found</p>;
	if (countries.length >= 10) return <p>Too many matches, specify another filter</p>;
	if (countries.length === 1) return <Country country={countries[0]} />;

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
