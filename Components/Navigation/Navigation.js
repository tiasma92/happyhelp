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
import Acceuil from '../Screens/Acceuil';
import DemandeConf from '../Screens/DemandeConf';
import HomeHelper from '../Screens/HomeHelper';
import HomeHelp from '../Screens/HomeHelp';

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
      acceuil:Acceuil,
      confirmD:DemandeConf,
      HomeH:HomeHelp,
      HomeA:HomeHelper
      
    },
    {
      initialRouteName: 'acceuil',
    }
  );

 
  
  
   export default Navigation = createAppContainer(AppNavigator)