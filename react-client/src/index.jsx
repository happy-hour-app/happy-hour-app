import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import happyHourList from './components/happyHourList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
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
        return (<div>
            <h1>Happy Hour List</h1>
            <happyHourList items={this.state.items} />
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));