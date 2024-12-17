const CountriesList = ({ countries }) => {
	if (!countries) return;
	if (countries.length === 0) return <p>No results found</p>;
	if (countries.length >= 10) return <p>Too many matches, specify another filter</p>;

	if (countries.length === 1) {
		const country = countries[0];
		console.log(country);

		return (
			<div>
				<h1>{country.name.common}</h1>
				<p>
					capital{" "}
					{country.capital.map((c) => (
						<span>{c} </span>
					))}
				</p>
				<p>area {country.area}</p>
				<h3>languages</h3>
				<ul>
					{Object.values(country.languages).map((lang) => (
						<li key={lang}>{lang}</li>
					))}
				</ul>
				<img src={country.flags.png} />
			</div>
		);
	}

	return (
		<div>
			{countries.map((country) => (
				<p key={country.cioc}>{country.name.common}</p>
			))}
		</div>
	);
};

export default CountriesList;
