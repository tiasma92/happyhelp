import React from 'react';
import { Text, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export default class Signin extends React.Component {

  constructor () {
    super();
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
    });
 
this.setState({ fontLoaded: true });
  }

render(){
  console.log('loaded :',this.state.fontLoaded)
  return(
    <View style={{ alignItems:'center', textAlign:'center'}}>
<Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 200, height: 200, marginTop: 30, alignItems:'center', justifyContent: 'center' }}/>

   { this.state.fontLoaded? (
   <View>
    <Text style={{ fontFamily: 'pacifico', fontSize: 18, color:'#000000', textAlign:'center', alignItems: 'center', justifyContent: 'center'}}>
      L'entraide 100% gratuite pour
      </Text>
      <Text style={{ fontFamily: 'pacifico', fontSize: 18, color:'#000000', textAlign:'center', alignItems: 'center', justifyContent: 'center'}}>
     les personnes âgées et handicapées
      </Text>
     
   
    <View>
    <Input style={{fontSize: 12, height: 40, borderColor: 'gray', borderWidth: 4}} placeholder="Votre adresse mail" marginTop= '10%'
    errorStyle={{ color: 'red' }}
    errorMessage="Votre mail n'est pas valide"
    value=""/>

    <Input style={{fontSize: 12, height: 40, borderColor: 'gray', borderWidth: 4, alignItems: 'center', justifyContent: 'center'}} placeholder="Votre mot de passe"
    errorStyle={{ color: 'red' }}
    errorMessage="Votre mot de passe n'est pas valide"
    value=""/>

    <Button title="Je me connecte" buttonStyle={{backgroundColor: '#2C5F13'}} style={{ height: 50, marginTop: '10%' }} 
    />

    <Text style={{fontSize: 12, color:'#000000', textAlign:'center', alignItems: 'center', justifyContent: 'center'}}>
    J'ai oublié mon mot de passe
      </Text>

    <Text style={{fontSize: 12, color:'#000000', textAlign:'center', alignItems: 'center', justifyContent: 'center'}}>
    Je m'inscris
    </Text>
    </View>
    </View>


    ) : null}
 </View>
  )
}}

