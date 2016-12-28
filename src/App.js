import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

const config = {
  apiKey: 'AIzaSyA-8AwjnK7UF5K3CYLAgKfgVg51uFmQ6dA',
  authDomain: 'banduh-bf06b.firebaseapp.com',
  databaseURL: 'https://banduh-bf06b.firebaseio.com',
  storageBucket: 'banduh-bf06b.appspot.com',
  messagingSenderId: '714375348235'
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
