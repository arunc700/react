import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './home/home'
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './Redux/Reducers/rootReducer'

const myStore = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<div>
    <Provider store={myStore}>
        <Home />
    </Provider>

</div>
    , document.getElementById('root'));
//ReactDOM.render(<Home name="Arun Kumar Singh" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
