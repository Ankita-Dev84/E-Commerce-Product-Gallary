async function getWeather() {

    let city = document.getElementById("city").value;

    let apiKey = "503e7a810c37bc23eb0b1d8bd6eb38c1";

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);

    let data = await response.json();

    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
}