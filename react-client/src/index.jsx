import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import HappyHourList from './components/happyHourList.jsx';
import HappyHourHeader from './components/header.jsx';
import LoginPage from './components/loginPage.jsx';
import CreateUserPage from './components/createUserPage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginPage: true,
      // ^^^ make true to work on login page ^^^
      createUserPage: false,
      // ^^^ make true to work on create user page ^^^
      location: 'loading..',
      date: 'loading..',
      items: [{ description: 'Happy Hour 1' }],
    };
    this.typeUsername = this.typeUsername.bind(this);
    this.typePassword = this.typePassword.bind(this);
    this.handleCreateUserClick = this.handleCreateUserClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
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
    // axios.get('/happyHours').then((data) => {
    //   this.setState({
    //     items: data,
    //   });
    // }).catch((err) => {
    //   console.log('err', err);
    // });
  }
  // on change event for username input (Login Page)
  typeUsername(event) {
    this.setState({ username: event.target.value });
  }
  // on change event for password input (Login Page)
  typePassword(event) {
    this.setState({ password: event.target.value });
  }
  // on click for login page redirect to signup page
  handleCreateUserClick() {
    console.log('REDIRECT CREATE USER PAGE');
    this.setState({
      createUserPage: true,
      loginPage: false,
    });
  }

  // on click for create user page redirect to login page
  handleLoginClick() {
    console.log('REDIRECT LOGIN PAGE');
    this.setState({
      createUserPage: false,
      loginPage: true,
    });
  }

  render() {
    if (this.state.createUserPage) {
      return (
        <div>
          <div> Create User Page </div>
          < CreateUserPage handleLoginClick={this.handleLoginClick} username={this.state.username} password={this.state.password} pwchange={this.typePassword} usrchange={this.typeUsername} />
        </div>
      );
    }
    if (this.state.loginPage) {
      return (
        <div>
          <div>( LOGIN PAGE ALWAYS TRUE IN INDEX.JSX UNTIL SERVER HANDLES ACCOUNTS ) </div>
          <LoginPage handleCreateUserClick={this.handleCreateUserClick} username={this.state.username} password={this.state.password} pwchange={this.typePassword} usrchange={this.typeUsername} />
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
