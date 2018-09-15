import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class A extends Component {
    render() {
        return (
            <div className="A">
                <h1>Hello World</h1>
            </div>
        );
    }
}

ReactDOM.render(<A />, document.getElementById('root'));