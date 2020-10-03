import React from 'react';
import axios from "axios";

const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast';

export default class extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        apiKey : '2ef097685d2af7f9d43d020fcb80234e',
        requestCity: 'Higashihiroshima,jp',
        city: '',
        response : [],
      };
      this.handleInput = this.handleInput.bind(this);
      this.handleGetWeather = this.handleGetWeather.bind(this);
    }
    handleGetWeather() {
      axios
          .get(API_ENDPOINT, {
            params: {
              q: this.state.requestCity,
              APPID: this.state.apiKey
            }
          })
          .then(res => {
            this.setState({
              response: res.data.list,
              city: res.data.city.name,
            });
          })
          .catch(function (error) {
              console.log(error);
          });
    }
    handleInput({ target: { value } }) {
      this.setState({
        requestCity: value
      });
    }
    render() {
      console.log(this.state.response);

      return (
        <div>
            <h2>Weather forecast</h2>
            <input type="text" value={this.state.requestCity} onChange={this.handleInput}/>
            <button onClick={this.handleGetWeather}>Search</button>
            <p> Location: {this.state.city} </p>
            {/* {Object.keys(this.state.response).map(key => (
              <li key={key}>
                {this.state.response[key].dt_txt}
                ,<img src={'http://openweathermap.org/img/w/'+this.state.response[key].weather[0].icon+'.png'} alt="weather"/>
                {this.state.response[key].weather[0].main}
              </li>
            ))} */}
        </div>
      );
    }
}