export default function Weather(weather){
    return `
        <ul id="weather">
            <li><strong>Temp:</strong> ${weather.main ? (weather.main.temp * (9 / 5) - 459.67).toFixed(1) : 'Loading...'}&deg;F</li>
            <li><strong>Forecast:</strong> ${weather.main ? weather.weather[0].main : '...'} (${weather.main ? weather.weather[0].description : '...'})</li>
            <li><strong>Wind:</strong> ${weather.main ? weather.wind.speed : '...'} knots</li>
        </ul>
    `;
}