import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import rootReducer from './store/reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider>
        <Router>
            <App />
        </Router>
    </Provider>

    , document.getElementById('root'));

