import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('./index.css');


// state
// lifecycle
// ui
class App extends Component {
    render() {
        return (
            <h1>Battlefield</h1>
        )
    }
}

ReactDOM.render(
    <App /> ,
    document.getElementById('app')
);
