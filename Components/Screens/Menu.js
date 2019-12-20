// import React from 'react';
// import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
// import { Button } from 'react-native-elements';
// import { MenuItem, MenuDivider } from 'react-native-material-menu';


// export default class Menu extends React.Component {
// _menu = null;
 
//   setMenuRef = ref => {
//     this._menu = ref;
//   };
 
//   hideMenu = () => {
//     this._menu.hide();
//   };
 
//   showMenu = () => {
//     this._menu.show();
//   };

// render(){
//     return(
//         <View style = {{
//             width:'100%',
//         textAlign:'center',
//         alignItems: 'center'
//        }}>

//     <Menu
//       ref={this.setMenuRef}
//       button={
//        <Image source={require('../../assets/images/format.png')}  onPress={this.showMenu} style={{ width: 30, height: 30, marginLeft:350}}/>
//     }
//     >
//       <MenuItem onPress={this.hideMenu}>Profil</MenuItem>
//       <MenuItem onPress={this.hideMenu}>Mes demandes d'aide</MenuItem>
//       <MenuItem onPress={this.hideMenu}>Mes aides</MenuItem>
//       <MenuDivider />
//       <MenuItem onPress={this.hideMenu}>Deconnexion</MenuItem>
//     </Menu>
//     </View>
//     )}
// }