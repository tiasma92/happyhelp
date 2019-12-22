import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import * as Font from 'expo-font';
import {connect} from 'react-redux'; 
import ipAdress from "./ip"


class Signin extends React.Component {

  constructor () {
    
    super();
    this.state = {
      fontLoaded: false,
      email: '',
      password: ''
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
    });
    
 
this.setState({ fontLoaded: true });
  }

  handleSubmitSignIn() {

    fetch(`http://${ipAdress}:3000/sign-in?email=${this.state.email}&password=${this.state.password}`)
    .then(function(res, err){
      return res.json()
    }).then((data)=> {
      console.log('RESULTAT DE LERENGISTREMENT EN BD USER submit signin--->', data)
      if (data.result === true){
        this.props.saveId(data.user._id)
        this.props.navigation.navigate("Home")
      } else {
        this.props.navigation.navigate('signup')
      }  
       
    })
    .catch((error)=> {
        console.log('Request failed in my Sign-In Home request', error)
    });
 }

render(){
  console.log('loaded :',this.state.fontLoaded)
  return(
    
      <ScrollView>
         <View style={{ alignItems:'center', textAlign:'center'}}>
<Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 200, height: 200, marginTop: 10, alignItems:'center', justifyContent: 'center' }}/>

   { this.state.fontLoaded? (
   <View>
    <Text style={{ fontWeight: 'bold', fontSize: 20, color:'#000000', textAlign:'center', alignItems: 'center', justifyContent: 'center'}}>
    Entrez vos identifiants
      </Text>
      
     
   
    <View style={{marginBottom:15}}>
    <Input style={{fontSize: 12, height: 60, borderColor: 'gray', borderWidth: 4}} placeholder="Votre adresse mail" marginTop= '10%'
    // errorStyle={{ color: 'red' }}
    // errorMessage="Votre mail n'est pas valide"
    onChangeText = {(text) => {this.setState({email: text})}}
    />


    <Input style={{fontSize: 12, height: 60, borderColor: 'gray', borderWidth: 4, alignItems: 'center', justifyContent: 'center'}} placeholder="Votre mot de passe"
    // errorStyle={{ color: 'red' }}
    // errorMessage="Votre mot de passe n'est pas valide"
    secureTextEntry={true}
    onChangeText = {(text) => {this.setState({password: text})}}
    />
    </View>
<View>
    <Button title="Se connecter" buttonStyle={{borderRadius: 13,backgroundColor: '#2C5F13',  width:250}} style={{ height: 50, marginTop: '10%' }} onPress = {() => this.handleSubmitSignIn() } 
    />
    <Button  title="Se connecter via Facebook" buttonStyle={{borderRadius: 13,backgroundColor: '#375D81', marginBottom:20, width:250}} style={{ height: 50, marginTop: '5%' }} onPress = {() => this.handleSubmitSignIn() } 
    />


    <Text style={{fontSize: 15, color:'#000000', textAlign:'center', alignItems: 'center', justifyContent: 'center'}} onPress= {() => this.props.navigation.navigate("forget")}>
    J'ai oublié mon mot de passe
      </Text>

   
    </View>
    </View>


    ) : null}
    </View>
    </ScrollView>
 
  )
}}

function mapDispatchToProps(dispatch) {
  return {
    saveId: function(id) {
        dispatch( {type: 'connect',
         id,
        } );
    }
  }
}

export default connect(
    null, 
    mapDispatchToProps
)(Signin);

