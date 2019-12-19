import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import { Button} from 'react-native-elements';
import * as Font from 'expo-font';





export default class Acceuil extends React.Component{
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
   
render(){
    return(
    <View style = {{
            width:'100%',
        textAlign:'center',
        alignItems: 'center'
       }}>
        
      <View style={{ 
        alignItems: 'center',
         textAlign:'center',
         marginBottom:50,}}>
        <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 250, height: 250, marginTop: 2}}/>
      </View>

      { this.state.fontLoaded? (
            <View>
        <Text style={{fontFamily: 'pacifico',  fontSize: 18, color:'#000000', textAlign:'center', alignItems: 'center', justifyContent: 'center'}}>
      L'entraide 100% gratuite pour
      </Text>
      <Text style={{fontFamily: 'pacifico',  fontSize: 18, color:'#000000', textAlign:'center', alignItems: 'center', justifyContent: 'center', marginBottom:30}}>
     les personnes âgées
      </Text>

      <Button title="Se connecter" buttonStyle={{borderRadius: 13,backgroundColor: '#2C5F13', marginBottom:20, width:250}} style={{ height: 50, marginTop: '10%' }} onPress= {() => this.props.navigation.navigate("signin")} 
    />

<Button title="S'inscrire" buttonStyle={{borderRadius: 13,backgroundColor: '#139725', width:250}} style={{ height: 50}} onPress= {() => this.props.navigation.navigate("signup")} 
    />
    </View>
    ) : null}
     </View>
  )
}
}