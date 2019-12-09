import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Signin from '../Screens/Signin';
import Profil from '../Screens/Profil';
import Signup from '../Screens/Signup';
import Homepage from '../Screens/Homepage';
import PasswordForget from '../Screens/PasswordForget';
import ConfirmPassword from '../Screens/ConfirmPassword';
import Help from '../Screens/Help';
import HelperConf from '../Screens/HelperConf';
import Map from '../Screens/Map';

const AppNavigator = createStackNavigator(
    {
      Home: Homepage,
      signin: Signin,
      signup: Signup,
      profil: Profil,
      forget: PasswordForget,
      confirm: ConfirmPassword,
      help: Help,
      helper: HelperConf,
      map: Map,
    },
    {
      initialRouteName: 'Home',
    }
  );
  
   export default Navigation = createAppContainer(AppNavigator)