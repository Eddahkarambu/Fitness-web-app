import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  
})
const store = configureStore({
  reducer,
})

// const store = configureStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store} ><App/></Provider>
  </React.StrictMode>
);
export default store;


