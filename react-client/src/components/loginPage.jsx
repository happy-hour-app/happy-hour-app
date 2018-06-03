import React from 'react';
import axios from 'axios';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleLogin = this.handleLogin.bind(this);
    // can update to handle input change in here
  }
  // handle on Submit, send post to '/login'
  handleLogin(e) {
    console.log(`USERNAME: ${this.props.username}`);
    console.log(`PASSWORD: ${this.props.password}`);
    axios.post('/login', { username: this.props.username, password: this.props.password })
      .then((res) => { console.log(res.data); })
      .catch(err => console.log(err));
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2> Happy Hour App</h2>
        <form onSubmit={this.handleLogin}>
          <label>
            Username:
            <input type="text" name="username" value={this.props.username} onChange={this.props.usrchange} />
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.props.password} onChange={this.props.pwchange} />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
