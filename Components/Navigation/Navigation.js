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
import ConfirmRequest from '../Screens/ConfirmRequest';
import HistoryHelp from '../Screens/HistoryHelp';
import MyHelp from '../Screens/MyHelp';
import Comments from '../Screens/Comments';



const AppNavigator = createStackNavigator(
    {
      signup: Signup,
      signin: Signin,
      Home: Homepage,
      profil: Profil,
      forget: PasswordForget,
      confirmP: ConfirmPassword,
      help: Help,
      helper: HelperConf,
      map: Map,
      confirmR: ConfirmRequest,
      historyhelp: HistoryHelp,
      comment: Comments,
      myhelp: MyHelp,
    },
    {
<<<<<<< HEAD
      initialRouteName: 'signin',
=======
      initialRouteName: 'Home',
>>>>>>> 188a752b48516e7bdd2f0d06eaaeac3f67701c90
    }
  );
  
   export default Navigation = createAppContainer(AppNavigator)