import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Components/Weather';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locationResult: {},
      searchQuery: '',
      showLocInfo: false,
      weatherResult: {}
    }
  }

  getLocFun = async (e) => {
    e.preventDefault();
    console.log('inside getLocFun')

    // let cityName = e.target.city.value;
    await this.setState({
      searchQuery: e.target.city.value
    })

    console.log('key',process.env.REACT_APP_LOCATIONIQ_KEY);

    let reqUrl = `${process.env.REACT_APP_SERVER_LINK}/weather?city=${this.state.searchQuery}`;
    // let reqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;

    // let locResult = await axios.get(reqUrl);
    let resultOfServer = await axios.get(reqUrl);
    console.log('aaaaaaaaaaa', resultOfServer);
    console.log('bbbbbbbb', resultOfServer.data);
    console.log('cccccccc', resultOfServer.data[0]);
    

    this.setState({
      locationResult: resultOfServer.data[0],
      showLocInfo: true,
      weatherResult: resultOfServer.data
    })
  }

  render() {
    return (
      <div>

        <h3> City Explorer App </h3>

        {/* <button onClick={this.getLocFun}>Get Location</button> */}

        <form onSubmit={this.getLocFun} >
          <input type="text" name='city' />
          <input type="submit" value='Explore!' />
        </form>

        {this.state.showLocInfo &&
          <>

            <Card style={{ width: '35rem' }}>

            {this.state.weatherResult.weatherInfos.map((weather,x) => {
              return ( <Weather key = {x} infoWeather = {weather} /> )
              })}

              <ListGroup className="list-group-flush">
                {/* <ListGroupItem> {this.state.searchQuery} </ListGroupItem>
                <ListGroupItem> {this.state.locationResult.lat} </ListGroupItem>
                <ListGroupItem> {this.state.locationResult.lon} </ListGroupItem> */}
                <ListGroupItem> <p> City Name : {this.state.searchQuery}</p> </ListGroupItem>
                <ListGroupItem> <p> Latitude :  {this.state.weatherResult.lat}</p> </ListGroupItem>
                <ListGroupItem> <p> Longitude :  {this.state.weatherResult.lon}</p> </ListGroupItem>
              </ListGroup>

            </Card>
          </>
          
        }
         
      </div>
    )
  }
}

export default App;