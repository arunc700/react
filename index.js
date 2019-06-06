import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Avatar/demo'
import Home from './home/home'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<div>
    <Home />    
</div>
    , document.getElementById('root'));
//ReactDOM.render(<Home name="Arun Kumar Singh" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
