import axios from "axios";
const baseUrl = `https://api.openweathermap.org`;
const apiKey = import.meta.env.API_KEY;

const getCountryWeather = (cityName) => {
	return axios
		.get(`${baseUrl}/data/2.5/weather?q=${cityName}&APPID=${apiKey}`)
		.then((response) => response.data);
};

const iconUrl = (icon) => {
	return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};

export default { getCountryWeather, iconUrl };
