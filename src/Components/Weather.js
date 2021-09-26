import React, { Component } from 'react';

class Weather extends Component{


    render()
    {
        return(
                <div>

                      <p> Weather Info </p>

                      <p> Date : { this.props.infoWeather.data } </p>

                      <p> Description : { this.props.infoWeather.description } </p>

                </div>
        )
    }
}


export default Weather;