import React from 'react';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer'
// import { createStackNavigator } from 'react-navigation-stack';
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
import Accueil from '../Screens/Accueil';
import DemandeConf from '../Screens/DemandeConf';
import HomeHelper from '../Screens/HomeHelper';
import HomeHelp from '../Screens/HomeHelp';
import HelperValid from '../Screens/HelperValid';
import Contact from "../Screens/Contact";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions, CommonActions, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { DrawerContent } from '../Screens/DrawerContent';
import LogOut from './LogOut';
// import { connect } from 'react-redux';

// import {View, Image, Text} from "react-native"
// import { TouchableOpacity } from 'react-native-gesture-handler';

// class NavigationDrawerStructure extends React.Component {
//   toggleDrawer = () => {
//     this.props.navigationProps.toggleDrawer();
//   };
//   render() {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//           <Image
//             source={require('../../assets/images/drawer.png')}
//             style={{ width: 25, height: 25, marginRight: 5 }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const LoginStack = createStackNavigator({
//   accueil: {
//     screen: Accueil
//   },
//   signin: {
//     screen: Signin
//   },
//   signup: {
//     screen: Signup
//   }
// },
//   {
//     initialRouteName: "accueil",
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: "#2C5F13",
//       },
//       headerTintColor: '#fff',
//     }
//   })

const NavStack = createStackNavigator();
const ProfilStack = createStackNavigator();
const MyHelpStack = createStackNavigator();
const HistoryHelpStack = createStackNavigator();
// const AuthStack = createStackNavigator();

// function AuthStackScreen({ navigation }) {
//   return (
//     <AuthStack.Navigator initialRouteName="accueil" screenOptions={{ headerStyle: { backgroundColor: "#2C5F13" }, headerTintColor: '#fff' }}>
//       < AuthStack.Screen name="accueil" component={Accueil} options={{ title: "" }} />
//       < AuthStack.Screen name="signin" component={Signin} options={{ title: "" }} />
//       < AuthStack.Screen name="signup" component={Signup} options={{ title: "" }} />
//     </AuthStack.Navigator >
//   )
// }

function NavStackScreen({ navigation }) {
  return (
    <NavStack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: "#2C5F13" }, headerTintColor: '#fff' }}>
      <NavStack.Screen name="Home" component={Homepage} options={{
        title: "", headerRight: () => (
          <TouchableHighlight
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>

            <FontAwesome name="bars" size={20} style={{ color: 'white' }} />

          </TouchableHighlight>),
        headerRightContainerStyle: { marginRight: 20 },
      }} />
      <NavStack.Screen name="forget" component={PasswordForget} options={{ title: "" }} />
      <NavStack.Screen name="confirmP" component={ConfirmPassword} options={{ title: "" }} />
      <NavStack.Screen name="help" component={Help} options={{ title: "" }} />
      <NavStack.Screen name="helper" component={HelperConf} options={{ title: "" }} />
      <NavStack.Screen name="map" component={Map} options={{ title: "" }} />
      <NavStack.Screen name="confirmR" component={ConfirmRequest} options={{ title: "" }} />
      <NavStack.Screen name="comment" component={Comments} options={{ title: "" }} />
      <NavStack.Screen name="confirmD" component={DemandeConf} options={{ title: "" }} />
      <NavStack.Screen name="HomeH" component={HomeHelp} options={{ title: "" }} />
      <NavStack.Screen name="HomeA" component={HomeHelper} options={{ title: "" }} />
      <NavStack.Screen name="validhelp" component={HelperValid} options={{ title: "" }} />
      <NavStack.Screen name="contact" component={Contact} options={{ title: "" }} />
      {/* </> */}
      {/* )\ */}
    </NavStack.Navigator>
  )
}

function MyHelpStackScreen({ navigation }) {
  return (
    <MyHelpStack.Navigator>
      <MyHelpStack.Screen name="myhelp" component={MyHelp} options={{
        headerStyle: { backgroundColor: "#2C5F13" }, headerTintColor: '#fff',
        title: "", headerRight: () => (
          <TouchableHighlight
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>

            <FontAwesome name="bars" size={20} style={{ color: 'white' }} />

          </TouchableHighlight>),
        headerRightContainerStyle: { marginRight: 20 },
      }} />
    </MyHelpStack.Navigator>
  )
}

function ProfilStackScreen({ navigation }) {
  return (
    <ProfilStack.Navigator>
      <ProfilStack.Screen name="profil" component={Profil} options={{
        headerStyle: { backgroundColor: "#2C5F13" }, headerTintColor: '#fff',
        title: "", headerRight: () => (
          <TouchableHighlight
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>

            <FontAwesome name="bars" size={20} style={{ color: 'white' }} />

          </TouchableHighlight>),
        headerRightContainerStyle: { marginRight: 20 },
      }} />
    </ProfilStack.Navigator>
  )
}

function HistoryHelpStackScreen({ navigation }) {
  return (
    <HistoryHelpStack.Navigator>
      <HistoryHelpStack.Screen name="historyhelp" component={HistoryHelp} options={{
        headerStyle: { backgroundColor: "#2C5F13" }, headerTintColor: '#fff',
        title: "", headerRight: () => (
          <TouchableHighlight
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>

            <FontAwesome name="bars" size={20} style={{ color: 'white' }} />

          </TouchableHighlight>),
        headerRightContainerStyle: { marginRight: 20 },
      }} />
    </HistoryHelpStack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
      <Drawer.Screen name="Home" component={NavStackScreen} />
      <Drawer.Screen name="myhelp" component={MyHelpStackScreen} />
      <Drawer.Screen name="historyhelp" component={HistoryHelpStackScreen} />
      <Drawer.Screen name="Profil" component={ProfilStackScreen} />
      <Drawer.Screen name="Deconnexion" component={LogOut} />
    </Drawer.Navigator>
  )
}



export default function Navigation() {
  return (
      <MyDrawer />
  )
}
