import React from 'react';
import axios from 'axios';


class CreateUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: 0,
      age: 0,
    };
    this.typeFirstName = this.typeFirstName.bind(this);
    this.typeLastName = this.typeLastName.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    // can update to handle input change in here
  }
  // handle on Submit, send post to '/login'
  handleCreateUser(e) {
    console.log(`USEREMAIL: ${this.props.userEmail}`);
    console.log(`PASSWORD: ${this.props.password}`);
    axios.post('/user', { userEmail: this.props.userEmail, password: this.props.password })
      .then((res) => { console.log(res.data); })
      .catch(err => console.log(err));
    e.preventDefault();
  }

  typeFirstName(event) {
    this.setState({ firstName: event.target.value });
    setTimeout(() => { console.log(this.state.firstName); }, 100);
  }
  // on change event for password input (Login Page)
  typeLastName(event) {
    this.setState({ lastName: event.target.value });
    setTimeout(() => { console.log(this.state.lastName); }, 100);
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
          <input type="text" name="useremail" value={this.props.userEmail} onChange={this.props.usrchange} />
        </label>
          <br />
        <label>
          Password:
          <input type="text" name="password" value={this.props.password} onChange={this.props.pwchange} />
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
