import React from 'react';
import Navigation from './Components/Navigation/Navigation'
import userToken from './Components/Reducer/myReducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthLoading from './Components/Screens/AuthLoading';


const store = createStore(combineReducers({ userToken }));

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
          <AuthLoading />
      </Provider>
    );
  }
}
