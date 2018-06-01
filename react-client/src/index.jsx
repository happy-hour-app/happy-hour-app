import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import HappyHourList from './components/happyHourList.jsx';


console.log('IT WORKED');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ description: 'Happy Hour 1' }],
    };
  }

  // after the component mounts
  componentDidMount() {
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
    return (
      <div>
        <h1>Happy Hour List</h1>
        <HappyHourList items={this.state.items} />
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
