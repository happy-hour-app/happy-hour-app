import React from 'react';
import axios from 'axios';


class CreateUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: 0,
      age: 0,
    };
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.typeFirstName = this.typeFirstName.bind(this);
    this.typeLastName = this.typeLastName.bind(this);
    this.typeAge = this.typeAge.bind(this);
    this.typePhoneNumber = this.typePhoneNumber.bind(this);
    this.typeUserEmail = this.typeUserEmail.bind(this);
    this.typePassword = this.typePassword.bind(this);

    // can update to handle input change in here
  }
  // handle on Submit, send post to '/login'
  handleCreateUser(e) {
    console.log(`USEREMAIL: ${this.state.userEmail}`);
    console.log(`PASSWORD: ${this.state.password}`);
    const newUser = {
      userEmail: this.state.userEmail,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      age: this.state.age,
    };
    axios.post('/user', newUser)
      .then((res) => { console.log(res.data); })
      .catch(err => console.log(err));
    e.preventDefault();
  }
  // on change event for last name input
  typeFirstName(event) {
    this.setState({ firstName: event.target.value });
    setTimeout(() => { console.log(this.state.firstName); }, 100);
  }
  // on change event for last name input
  typeLastName(event) {
    this.setState({ lastName: event.target.value });
    setTimeout(() => { console.log(this.state.lastName); }, 100);
  }
  typeAge(event) {
    this.setState({ age: event.target.value });
    setTimeout(() => { console.log(this.state.age); }, 100);
  }
  typePhoneNumber(event) {
    this.setState({ phoneNumber: event.target.value });
    setTimeout(() => { console.log(this.state.phoneNumber); }, 100);
  }
  // on change event for user email input (Login Page)
  typeUserEmail(event) {
    this.setState({ userEmail: event.target.value });
  }

  // on change event for password input (Login Page)
  typePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <h2> Happy Hour App</h2>
        <form onSubmit={this.handleCreateUser}>
        <label>
          First Name:
          <input type="text" name="firstname" value={this.state.firstName} onChange={this.typeFirstName} />
        </label>
          <br />
        <label>
          Last Name:
          <input type="text" name="lastname" value={this.state.lastName} onChange={this.typeLastName} />
        </label>
          <br />
        <label>
          Email:
          <input type="text" name="useremail" value={this.state.userEmail} onChange={this.typeUserEmail} />
        </label>
          <br />
        <label>
          Password:
          <input type="text" name="password" value={this.state.password} onChange={this.typePassword} />
        </label>
        <br />
        <label>
        Age:
          <input type="number" name="age" value={this.state.age} onChange={this.typeAge} />
        </label>
        <label>
        Phone Number:
          <input type="number" name="phone" value={this.state.phoneNumber} onChange={this.typePhoneNumber} />
        </label>
        <input type="submit" value="Create User" />
        </form>
        <button onClick={this.props.handleLoginClick}>Login</button>
        <button onClick={this.props.handleHomePageClick}>HomePage</button>
      </div>
    );
  }
}

export default CreateUserPage;
