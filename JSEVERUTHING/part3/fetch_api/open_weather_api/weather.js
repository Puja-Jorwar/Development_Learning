const apiKey = "0c5517e2455efe90ecc2de1bd642253c";

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.getElementById("city-name").innerText = data.name;
      document.getElementById("temperature").innerText = data.main.temp + "°C";
      document.getElementById("description").innerText =
        data.weather[0].description;
    })
    .catch((err) => console.log(err));
}
document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  getWeather(city);
});