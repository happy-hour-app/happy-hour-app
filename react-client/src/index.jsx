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
      username: '',
      password: '',
      loginPage: true,
      location: 'loading..',
      date: 'loading..',
      items: [{ description: 'Happy Hour 1' }],
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.typeUsername = this.typeUsername.bind(this);
    this.typePassword = this.typePassword.bind(this);
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

  handleLogin(e) {
    console.log('USERNAME');
    console.log(this.state.username);
    console.log('PASSWORD');
    console.log(this.state.password);
    axios.post('/login', { username: this.state.username, password: this.state.password })
      .then((res) => { console.log(res.data); })
      .catch(err => console.log(err));
    e.preventDefault();
  }
  typeUsername(event) {
    this.setState({ username: event.target.value });
  }
  typePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    if (this.state.loginPage) {
      return (
        <div>
          <h2> Happy Hour App</h2>
          <form onSubmit={this.handleLogin}>
            <label>
              Username:
              <input type="text" name="username" value={this.state.username} onChange={this.typeUsername} />
            </label>
            <label>
              Password:
              <input type="text" name="password" value={this.state.password} onChange={this.typePassword} />
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
