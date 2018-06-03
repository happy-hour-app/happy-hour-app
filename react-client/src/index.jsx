import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import HappyHourList from './components/happyHourList.jsx';
import HappyHourHeader from './components/header.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: true,
      location: 'loading..',
      date: 'loading..',
      items: [{ description: 'Happy Hour 1' }],
    };
  }

  // after the component mounts
  componentDidMount() {
    // get current location and time
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyDFYgdEUy4CeS5XcKc2G7w3pWjQ7f946DA`)
          .then((res) => {
            console.log(res.data.results);
            this.setState({
              location: `${res.data.results[0].address_components[2].long_name}, ${res.data.results[0].address_components[3].long_name}`,
            });
          })
          .catch(err => console.log(err));
        const date = new Date(position.timestamp);
        this.setState({
          date: date.toString().substring(0, 16),
        });
      },
      (err) => { console.log(err); },
    );
    // populate happy Hour list with get request.
    // $.ajax({
    //     url: '/happyHours',
    //     success: (data) => {
    //         this.setState({
    //             items: data
    //         })
    //     },
    //     error: (err) => {
    //         console.log('err', err);
    //     }
    // });
  }

  render() {
    if (this.state.loginPage) {
      return (
        <div>
          <h2> Happy Hour App</h2>
          <form>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <label>
              Password:
              <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>( LOGIN PAGE ALWAYS TRUE IN INDEX.JSX UNTIL SERVER HANDLES ACCOUNTS ) </div>
        </div>
      );
    }
    return (
      <div>
        <HappyHourHeader location={this.state.location} date={this.state.date} />
        <h1>Happy Hour List</h1>
        <HappyHourList items={this.state.items} />
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
