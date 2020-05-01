import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions, CommonActions, useNavigation } from '@react-navigation/native';
import Signin from '../Screens/Signin';
import Signup from '../Screens/Signup';
import Accueil from '../Screens/Accueil';


const AuthStack = createStackNavigator();

export default function AuthStackScreen({ navigation }) {
  return (
    <AuthStack.Navigator initialRouteName="accueil" screenOptions={{ headerStyle: { backgroundColor: "#2C5F13" }, headerTintColor: '#fff' }}>
      < AuthStack.Screen name="accueil" component={Accueil} options={{ title: "" }} />
      < AuthStack.Screen name="signin" component={Signin} options={{ title: "" }} />
      < AuthStack.Screen name="signup" component={Signup} options={{ title: "" }} />
    </AuthStack.Navigator >
  )
}