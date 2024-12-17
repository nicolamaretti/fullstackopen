const Country = ({ country }) => {
	return (
		<div>
			<h1>{country.name.common}</h1>
			<p>
				capital{" "}
				{country.capital.map((c) => (
					<span key={c}>{c} </span>
				))}
			</p>
			<p>area {country.area}</p>
			<h3>languages</h3>
			<ul>
				{Object.values(country.languages).map((lang) => (
					<li key={lang}>{lang}</li>
				))}
			</ul>
			<img
				src={country.flags.png}
				alt={country.flags.alt}
			/>
		</div>
	);
};

export default Country;
