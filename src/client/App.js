import React, { Component } from 'react';
import ForecastSection from './forecastSection/forecastSection';
import BottomNewsFeed from './bottomNewsFeed/bottomNewsFeed';
import './app.css';

export default class App extends Component {
  state = {
    weatherData: ''
  }

  locationSearch() {
    var valEntered = document.getElementById('locationSearch').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + valEntered + '&units=metric&appid=dea7023b13280eea2011f0437eca69bc')
      .then(res => res.json())
      .then(weather => this.setState({ weatherData: weather }));
  }

  render() {
    return (
      <div>
        <div className="headerBg"><h1>Weather.com</h1>
          <div className="pull-right">
            <ul className="headerMenu">
              <li>Home</li>
              <li>About Weather.com</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="mainContainer">
          <section className="locationSearchSection">
            <input type="text" id="locationSearch" name="City, State or Zipcode" placeholder="City, State or Zipcode" />
            <button className="w-icon-search" onClick={this.locationSearch.bind(this)}>
              <svg aria-label="Search" id="w-icon-search" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M21.616 21.072l-3.872-3.888c1.392-1.664 1.296-4.16-0.288-5.712-0.816-0.816-1.904-1.216-2.976-1.216-1.088 0-2.192 0.416-3.008 1.264-1.632 1.664-1.616 4.336 0.048 5.984 0.816 0.816 1.904 1.216 2.976 1.216 0.96 0 1.92-0.32 2.704-0.976l3.872 3.872c0.080 0.080 0.176 0.112 0.272 0.112s0.192-0.032 0.272-0.112c0.144-0.144 0.16-0.384 0-0.544zM12.080 16.96c-1.36-1.344-1.376-3.536-0.032-4.88 0.656-0.656 1.536-1.024 2.464-1.024v0c0.912 0 1.776 0.352 2.432 0.992 1.36 1.344 1.376 3.536 0.032 4.88-0.656 0.656-1.536 1.024-2.464 1.024s-1.792-0.352-2.432-0.992z"></path></svg>
            </button>
          </section>
          {this.state.weatherData && this.state.weatherData.cod === 200 &&
            <ForecastSection weatherData={this.state.weatherData} />
          }
          {this.state.weatherData && this.state.weatherData.cod !== 200 &&
            <p className="errMsg">Please enter a valid City, State or Zipcode</p>
          }
          <div className="clearfix"></div>
          <BottomNewsFeed />
        </div>
        <div className="clearfix"></div>
        <div className="footerBg mt20"><p>Copywright reserved 2020</p></div>
      </div>
    );
  }
}
