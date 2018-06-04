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
    console.log(`UserEmail: ${this.props.userEmail}`);
    console.log(`PASSWORD: ${this.props.password}`);
    axios.post('/login', { userEmail: this.props.userEmail, password: this.props.password })
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
            Email:
            <input type="text" name="useremail" value={this.props.userEmail} onChange={this.props.usrchange} />
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.props.password} onChange={this.props.pwchange} />
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
