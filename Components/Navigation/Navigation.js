import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
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
import Accueil from '../Screens/Accueil';
import DemandeConf from '../Screens/DemandeConf';
import HomeHelper from '../Screens/HomeHelper';
import HomeHelp from '../Screens/HomeHelp';
import HelperValid from '../Screens/HelperValid';
import Contact from "../Screens/Contact";


// class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  // toggleDrawer = () => {
    //Props to open/close the drawer
//     this.props.navigationProps.toggleDrawer();
//   };
//   render() {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//           {/*Donute Button Image */}
//           <Image
//             source={require('./image/drawer.png')}
//             style={{ width: 25, height: 25, marginLeft: 5 }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

const LoginStack = createStackNavigator({
  accueil: {
    screen: Accueil
  },
  signin: {
    screen: Signin
  },
  signup: {
    screen: Signup
  }
},
  {
    initialRouteName: "accueil",
    defaultNavigationOptions: {
       headerStyle: {
        backgroundColor: "#2C5F13",
       },
       headerTintColor: '#fff',
      }
})

const NavNavigator = createStackNavigator(
    {
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
      confirmD:DemandeConf,
      HomeH:HomeHelp,
      HomeA:HomeHelper,
      validhelp: HelperValid,
      contact: Contact
      
    },
    {
      defaultNavigationOptions: {
         headerStyle: {
          backgroundColor: "#2C5F13",
         },
         headerTintColor: '#fff',
         
         }
  })



// const DrawerNavigator = createDrawerNavigator({
//   profil: {
//     //Title
//     screen: Profil,
//     navigationOptions: {
//       drawerLabel: 'Profil',
//     },
//   },
//   myhelp: {
//     //Title
//     screen: MyHelp,
//     navigationOptions: {
//       drawerLabel: 'Mes aides',
//     },
//   },
//   historyhelp: {
//     //Title
//     screen: HistoryHelp,
//     navigationOptions: {
//       drawerLabel: "Mon historique d'aides",
//     },
//   },
// });

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Nav: NavNavigator,
      // drawer: DrawerNavigator
    },
    {
      initialRouteName: "Login"
    }
  )
)
  
  
export default Navigation = createAppContainer(AppNavigator)