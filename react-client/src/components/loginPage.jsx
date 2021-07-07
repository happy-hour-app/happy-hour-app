import React from 'react';
import axios from 'axios';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.typeUserEmail = this.typeUserEmail.bind(this);
    this.typePassword = this.typePassword.bind(this);
    // can update to handle input change in here
  }
  // handle on Submit, send post to '/login'
  handleLogin(e) {
    console.log(`UserEmail: ${this.state.userEmail}`);
    console.log(`PASSWORD: ${this.state.password}`);
    axios.post('/login', { userEmail: this.state.userEmail, password: this.state.password })
      .then((res) => { console.log(res.data); })
      .catch(err => console.log(err));
    e.preventDefault();
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
        <form onSubmit={this.handleLogin}>
          <label>
            Email:
            <input type="text" name="useremail" value={this.state.userEmail} onChange={this.typeUserEmail} />
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.state.password} onChange={this.typePassword} />
          </label>
          <input type="submit" value="Login" />
        </form>
        <button onClick={this.props.handleCreateUserClick}>Sign Up</button>
        <button onClick={this.props.handleHomePageClick}>HomePage</button>
      </div>
    );
  }
}

export default LoginPage;
