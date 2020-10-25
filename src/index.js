import React from 'react';
import App from './App'
import ReactDOM,{render} from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store'



 
ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>
, document.getElementById("root"));


