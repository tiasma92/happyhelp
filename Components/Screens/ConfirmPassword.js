import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';







export default class ComfirmPassword extends React.Component{

   
render(){
    return(
    <View style = {{
            width:'80%',
        textAlign:'center',
       }}>

        <View style={{ 
        alignItems: 'center',
         textAlign:'center',
         marginBottom:150,}}>
        <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 250, height: 250, marginTop: 2}}/>
        </View>
        <View style={{}}>
        <Text style={{
            marginBottom:140,
            
            fontSize: 17,
            color:'#000000',
            textAlign:'center',
            alignItems: 'center',
            justifyContent: 'center'}}>
        Un mail vous sera envoyé afin de réinitialiser votre mot de passe
        </Text>
        </View>
     </View>
  )
}
}

