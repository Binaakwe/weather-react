import React, { useState } from "react";
import axios from "axios";
import "./App.css";


export default function App(props) {
  let [weather, setWeather] = useState(" ");
  
  
function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

 
    let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  
  
  // function cityInquiry(event) {
  //   setCity(event.target.value);
  // }
  let form = (
    <form className="search-form">
      <input
        type="search"
        placeholder="Enter a City..."
        // onChange={cityInquiry}
        className="search-input"
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );
  return (
    <div className="weather-app">
      <header>{form}</header>
      <main>
        <div className="current-weather">
          <div>
            <h1 className="city">{props.city}</h1>
            <h3 className="weather-description">
              {" "}
              <div id="current-time">Thursday, 15:00</div>
              <div className="description">{weather.description}</div>
            </h3>
            <div className="current-weather-details">
              <p>
                Humidity:{" "}
                <span className="current-humidity">
                  {Math.round(weather.humidity)} %
                </span>
                <br />
                Wind Speed:{" "}
                <span className="current-windspeed">
                  {Math.round(weather.wind)}km/h
                </span>
              </p>
            </div>
          </div>
          <div className="temperature-container">
            <div className="current-temperature">
              {Math.round(weather.temperature)}
            </div>
            <div className="temperature-unit">°C</div>
            <div>
              {" "}
              <img
                src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.description}
              />
            </div>
          </div>
        </div>
      </main>
        <footer>This project was coded by <a href="https://github.com/Binaakwe" target="_blank" rel='noreferrer'>Briana Lesage</a>. Code hosted on <a href="https://github.com/Binaakwe/weather-react" target="_blank" rel='noreferrer'>GitHub</a>, website hosted on <a href="https://weather-app-react-briana.netlify.app/" target="_blank" rel='noreferrer'>Netlify</a></footer>
    </div>
  );
}