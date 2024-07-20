import axios from "axios";
import React, { Component } from 'react';

const city = 'London';
const appid = 'a391cbb535a4c763b25873d9696749c9';

const api = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`,
});

class App extends Component {

  constructor(){
    super();
    this.state = {
      weather: null,
    };
  }

  // In react api should request should always be made in componentDidMount lifecycle method

  componentDidMount() {
    api.get(`?q=${city}&appid=${appid}`)
      .then(res => {
        this.setState({ weather: res.data });
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error fetching the weather data:', error);
      });
  }

  render(){
    const { weather } = this.state;
    return(
      <div className="App">
        <h1>Weather in {city}</h1>
        {weather ? (
          <div>
            <p>Temperature: {weather.main.temp}K</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    );
  }
}

export default App;
