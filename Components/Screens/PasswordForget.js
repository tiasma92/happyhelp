import React from 'react';
import { Text, View, Image,TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {  Button } from 'react-native-elements';






export default class PasswordForget extends React.Component{

    state={ 
        email:''
    }

    


     handleEmail = (text) => {
        this.setState({ email: text })
     }

     login = (email) => {
        alert({email} )
     }
render(){
    return(
        <ScrollView style = {styles.container}>

        <View style={{ alignItems: 'center', textAlign:'center'}}>
        <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150, marginTop: 25}}/>
        </View>


        

        <View style={{ alignItems: 'center', textAlign:'center'}}>
        <Image source={require('../../assets/images/icons8-ennuyeux-100.png')} style={{marginBottom:20,marginTop:20, width: 100, height: 100}}/>
        <Text style={{fontWeight: 'bold', fontSize: 14,marginTop:10}}>OUPSSSSS  </Text>
        <Text style={{fontWeight: 'bold', fontSize: 13,marginTop:1}}>VOUS AVEZ OUBLIE VOTRE MOT DE PASSE </Text>
        </View>

       

        <View style={{ marginLeft:50, marginTop:25}}>
        <Text style={{  fontWeight: 'bold', fontSize: 15}}>Entrez votre email</Text>
        </View>
        
        <TextInput style = {styles.input}
           underlineColorAndroid = "transparent"
           placeholder = "Email"
           
           autoCapitalize = "none"
           onChangeText = {this.handleEmail}/>

        
        
        
        <TouchableOpacity
           style = {styles.submitButton}
           onPress = {
              () => this.login(this.state.email)
           }>
           <Text style = {styles.submitButtonText}> ENVOYER </Text>
        </TouchableOpacity>
           <TouchableOpacity>
        <Image source={require('../../assets/images/icon8-fleche.png')} style={{marginTop:50, width:25, height:25 ,marginLeft:10}} onPress = {
         () => this.login(this.state.email)
           }/>
           </TouchableOpacity>
        
     </ScrollView>
  )
}
}




const styles = StyleSheet.create({
container: {
  
  width:'100%',
textAlign:'center'

},
input: {
   
  
  flex:1,
       flexDirection:'column',
       borderWidth: 0,
       borderRadius: 5,
       marginBottom:15,
       marginLeft: 50,
       marginRight: 50,
      
       fontSize: 15,
       textAlign: 'center' ,
       height: 25,
       borderColor: '#2C5F13',
       borderWidth: 1,
       justifyContent:"center",
       alignItems:'center'
    },
    submitButton: {
       backgroundColor: '#2C5F13',
       padding: 10,
      
       height: 45,
       borderWidth: 0,
       borderRadius: 5,
       marginBottom:15,
       marginLeft: 50,
       marginRight: 50,
       marginTop:30,
       
       
       justifyContent:"center",
        textAlign:"center",
    },
    submitButtonText:{
        justifyContent:"center",
        textAlign:"center",
       color: 'white'
    }
 })