import React, { Component } from 'react';

class forecastSection extends Component {
    
    componentDidMount(){
        console.log(this.props);
    }

    timeCoverter(time){
        let unix_timestamp = time;
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime;
    }
    render() {
        return (
            <section className="forecastSection">
                <h2>Weather Forecast for {this.props.weatherData.name}</h2>
                <article className="table-forecast">
                    <table className="weather-widget-table table table-striped table-bordered table-condensed" id="weather-widget-table">
                        <tbody>
                            <th>Local Time</th>
                            <tr>
                                <td id="weather-widget-local-time">{new Date().toLocaleString()}</td>
                            </tr>
                            <th>Weather Description</th>
                            <tr>
                                <td id="weather-widget-cloudiness">{this.props.weatherData.weather[0].description}</td>
                            </tr>
                            <th>Wind Speed</th>
                            <tr>
                                <td id="weather-widget-wind">{this.props.weatherData.wind.speed}  m/s </td>
                            </tr>
                            <th>Pressure</th>
                            <tr>
                                <td id="weather-widget-pressure">{this.props.weatherData.main.pressure} hpa</td>
                            </tr>
                            <th>Humidity</th>
                            <tr>
                                <td id="weather-widget-humidity">{this.props.weatherData.main.humidity} %</td>
                            </tr>
                            <th>Sunrise</th>
                            <tr>
                                <td id="weather-widget-sunrise">{this.timeCoverter(this.props.weatherData.sys.sunrise)} </td>
                            </tr>
                            <th>Sunset</th>
                            <tr>
                                <td id="weather-widget-sunset">{this.timeCoverter(this.props.weatherData.sys.sunset)} </td>
                            </tr>
                        </tbody></table>
                </article>
                <article>
                    <div class="temp-circle">{this.props.weatherData.main.temp} &#8451;</div>
                </article>
            </section>
        )
    }
}

export default forecastSection;