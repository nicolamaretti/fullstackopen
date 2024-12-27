import weatherService from "../services/weather";

const Weather = ({ weather }) => {
	if (!weather) return null;

	return (
		<div>
			<h1>Weather in {weather.name}</h1>
			<p>temperature {weather.main.temp} Celsius</p>
			<img src={weatherService.iconUrl(weather.weather[0].icon)} />
			<p>wind {weather.wind.speed} m/s</p>
		</div>
	);
};

export default Weather;
