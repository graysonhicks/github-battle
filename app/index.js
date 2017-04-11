import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('./index.css');


// state
// lifecycle
// ui
class App extends Component {
    render() {
        return (
            <div>
                <h1>Battlefield</h1>
                <p>Watch test</p>
            </div>

        )
    }
}

ReactDOM.render(
    <App /> ,
    document.getElementById('app')
);
