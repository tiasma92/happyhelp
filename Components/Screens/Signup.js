import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView, AsyncStorage } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import ipAdress from "./ip"

class Signup extends React.Component {
   constructor(props) {
      super();
   }
   state = {
      token: '',
      email: '',
      password: '',
      repeatPassword: '',
      address: '',
      // city: "",
      firstName: '',
      lastName: '',
      telephone: '',
      isUserExist: false,
   }

   /* For send the information to the back and register a new user or check if he exists */
   handleSubmitSignUp = async () => {
      if (this.state.password === this.state.repeatPassword) {
         fetch(`http://${ipAdress}:3000/sign-up`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `firstName=${this.state.firstName}&lastName=${this.state.lastName}&email=${this.state.email}&password=${this.state.password}&telephone=${this.state.telephone}&address=${this.state.address}`
         }
         ).then(function (res, err) {
            return res.json()
         }).then((data) => {

            console.log('RESULTAT DE LERENGISTREMENT EN BD USER --->', data.user)
            this.setState({ token: data.user.token })
            this.storeData();
            this.props.saveToken(data.user.token)
         })
            .catch((error) => {
               console.log('Request failed in my Sign-Up Home request', error)
            });
      }
   }

   storeData = async () => {
      try {
         await AsyncStorage.setItem("token", this.state.token)
      } catch (error) {
         console.log("Something went wrong", error);
      }
   }

   render() {
      console.log(this.state.lastName)
      return (
         <ScrollView style={styles.container}>

            <View style={{ alignItems: 'center', }}>
               <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150, marginTop: 1 }} />
               <Text style={{ fontWeight: 'bold', fontSize: 20 }}>S'INSCRIRE</Text>
            </View>

            <View style={{ marginLeft: 50, marginTop: 15 }}>
               <Text style={{ fontWeight: 'bold', fontSize: 15 }}>VOTRE NOM</Text>
            </View>

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Entrez votre Nom"

               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ lastName: text }) }} />

            <View style={{ marginLeft: 50, marginTop: 1 }}>
               <Text style={{ fontWeight: 'bold', fontSize: 15 }}>VOTRE PRENOM</Text>
            </View>

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Entrez votre Prenom"

               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ firstName: text }) }} />




            <View style={{ marginLeft: 50, marginTop: 1 }}>
               <Text style={{ fontWeight: 'bold', fontSize: 15 }}>VOTRE ADRESSE</Text>
            </View>

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Entrez votre adresse"

               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ address: text }) }} />

            {/* <View style={{ marginLeft:50, marginTop:1}}>
            <Text style={{  fontWeight: 'bold', fontSize: 15}}>VOTRE VILLE</Text>
            </View>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Entrez votre ville"
               
               autoCapitalize = "none"
               onChangeText = {(text) => {this.setState({city: text})}}/> */}

            <View style={{ marginLeft: 50, marginTop: 1 }}>
               <Text style={{ fontWeight: 'bold', fontSize: 15 }}>EMAIL</Text>
            </View>

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Entrez votre Email"

               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ email: text }) }} />


            <View style={{ marginLeft: 50, marginTop: 1 }}>
               <Text style={{ fontWeight: 'bold', fontSize: 15 }}>MOT DE PASSE</Text>
            </View>

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Entrez votre Mot de Passe"
               secureTextEntry={true}
               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ password: text }) }} />



            <View style={{ marginLeft: 50, marginTop: 1 }}>
               <Text style={{ fontWeight: 'bold', fontSize: 15 }}>CONFIMER MOT DE PASSE</Text>
            </View>

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Confirmez votre mot de passe"
               secureTextEntry={true}
               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ repeatPassword: text }) }} />




            <View style={{ marginLeft: 50, marginTop: 1 }}>
               <Text style={{ fontWeight: 'bold', fontSize: 15 }}>TELEPHONE</Text>
            </View>

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="0601020304"

               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ telephone: text }) }} />

            <TouchableOpacity
               style={styles.submitButton}
               onPress={
                  () => this.handleSubmitSignUp()
               }>
               <Text style={styles.submitButtonText}> VALIDER </Text>
            </TouchableOpacity>


            <Text style={{ fontSize: 12, color: '#000000', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
               Vous serez contacté sous les 24 heures pour valider votre inscription
            </Text>
         </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      width: '100%'
   },
   input: {


      flex: 1,
      flexDirection: 'column',
      borderWidth: 0,
      borderRadius: 13,
      marginBottom: 15,
      marginLeft: 50,
      marginRight: 50,

      fontSize: 15,
      textAlign: 'center',
      height: 35,
      borderColor: '#2C5F13',
      borderWidth: 1,
      justifyContent: "center",
      alignItems: 'center'
   },
   submitButton: {
      backgroundColor: '#2C5F13',
      padding: 10,

      height: 40,
      borderWidth: 0,
      borderRadius: 5,
      marginBottom: 15,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 20,
      borderRadius: 13,

      justifyContent: "center",
      textAlign: "center",
   },
   submitButtonText: {
      justifyContent: "center",
      textAlign: "center",
      color: 'white'
   }
})

function mapDispatchToProps(dispatch) {
   return {
      saveToken: function (token) {
         dispatch({
            type: 'connect',
            token,
         });
      }
   }
}

export default connect(
   null,
   mapDispatchToProps
)(Signup);