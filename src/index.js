import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import root from './store/reducer'
import registerServiceWorker from './registerServiceWorker';
let store=createStore(root)
ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root'));
registerServiceWorker();
