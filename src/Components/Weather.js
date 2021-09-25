import React, { Component } from 'react';

class Weather extends Component{


    render()
    {
        return(
                <div>

                      <p> Weather Info </p>

                      <p> Date : { this.props.weather.data } </p>

                      <p> Description : { this.props.weather.description } </p>

                </div>
        )
    }
}


export default Weather;