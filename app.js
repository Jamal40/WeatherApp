import { cities } from "./cities.js";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const appKey = "&appid=2597640e21e188dba568e0e2ffd88ad0";
const img = document.querySelector("img");
const weatherCases = {
  "clear sky":
    "https://images.unsplash.com/photo-1607463747053-9c90f8341cd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "few clouds":
    "https://images.unsplash.com/photo-1505860125062-3ce932953cf5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3Vkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "scattered clouds":
    "https://images.unsplash.com/photo-1589486022941-a92fb1c4d8e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  "broken clouds":
    "https://images.unsplash.com/photo-1605977216813-2db4874819b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  "shower clouds":
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.coventrytelegraph.net%2Fnews%2Fcoventry-news%2F500-homes-lose-electricity-tree-9856488&psig=AOvVaw0wTnSBb5CwvQ0d6yzpfAdC&ust=1622405134044000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICL65zY7_ACFQAAAAAdAAAAABAK",
  rain: "https://www.vmcdn.ca/f/files/via/images/weather/rain-umbrella-vancouver-weather.jpg;w=960",
  thunderstorm:
    "https://images.unsplash.com/photo-1551234250-d88208c2ce14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=672&q=80",
  "light rain":
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvancouversun.com%2Fnews%2Fvancouver-weather-light-rain-today-but-sunshine-is-coming&psig=AOvVaw1ONEJntj6G9mRCGMQmKAwR&ust=1622405482754000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODnl8PZ7_ACFQAAAAAdAAAAABAK",
  snow: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  mist: "https://images.unsplash.com/photo-1606220838313-07eedd6f84c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzdCUyMHJvYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "light rain":
    "https://www.denverpost.com/wp-content/uploads/2016/05/20160509__CD16WEATHER_AC25750xp1.jpg?w=479",
};

let cityName = "cairo";
const citiesTemps = [];
const tempText = document.querySelector("p span:first-child");
const btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  cityName = document.querySelector("input").value;
  let response = await fetch(baseUrl + cityName + appKey);
  let result = await response.json();
  tempText.textContent = `${Math.round(result.main.temp - 273)}`;
  img.src = weatherCases[result.weather[0].description];
});

const getAllCountries = async () => {
  for (let city of cities) {
    let response = await fetch(baseUrl + city + appKey);
    let result = await response.json();

    citiesTemps.push(Math.round(result.main.temp - 273));
  }

  document.querySelector(".max").textContent = Math.max(...citiesTemps);
};

getAllCountries();
