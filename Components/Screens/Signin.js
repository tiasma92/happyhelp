import React from 'react';
import { Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { Button, Input } from 'react-native-elements';
import * as Font from 'expo-font';
import { connect } from 'react-redux';
import ipAdress from "./ip";
import * as firebase from "firebase";
import * as Facebook from 'expo-facebook';

const FACEBOOK_APP_ID = '1940531982745503';

var config = {
  apiKey: "AIzaSyB7u25TQSE5xayuqxdtY2PTnA26VeCx4lU",
  authDomain: "happyhelp-app-e3a78.firebaseapp.com",
  databaseURL: "https://happyhelp-app-e3a78.firebaseio.com",
  projectId: "happyhelp-app-e3a78",
  storageBucket: "happyhelp-app-e3a78.appspot.com",
  messagingSenderId: "801689835050",
  appId: "1:801689835050:web:5da0659eb4afcd6d031553"
};
firebase.initializeApp(config);

const auth = firebase.auth();

class Signin extends React.Component {

  constructor() {

    super();
    this.state = {
      fontLoaded: false,
      email: '',
      password: '',
      token: "",
      logInStatus: 'signed out',
      errorMail: '',
      errorPassword: ''
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
    auth.onAuthStateChanged(user => {
      if (user != null) {
        this.setState({ logInStatus: 'We are authenticated now!' });
      } else {
        this.setState({ logInStatus: 'You are currently logged out.' });
      }
    });
  }
  /* For check if the user is already registered in the database */
  handleSubmitSignIn = async () => {

    await fetch(`http://${ipAdress}:3000/sign-in?email=${this.state.email}&password=${this.state.password}`)
      .then(function (res, err) {
        return res.json()
      }).then((data) => {
        console.log('RESULTAT DE LERENGISTREMENT EN BD USER submit signin--->', data)
        if (data.result === true) {
          this.setState({
            token: data.user.token
          })
          this.storeData();
          this.props.saveToken(data.user.token);
        } else {
          this.setState({
            errorMail: 'Votre mail n\'est pas valide',
            errorPassword: 'Votre mot de passe n\'est pas valide'
          })
        }

      })
      .catch((error) => {
        console.log('Request failed in my Sign-In Home request', error)
      });
  }

  storeData = async () => {
    try {
      await AsyncStorage.setItem("token", this.state.token)
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  render() {
    console.log('loaded :', this.state.fontLoaded)
    return (

      <ScrollView>
        <View style={{ alignItems: 'center', textAlign: 'center' }}>
          <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 200, height: 200, marginTop: 10, alignItems: 'center', justifyContent: 'center' }} />

          {this.state.fontLoaded ? (
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000000', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                Entrez vos identifiants
      </Text>



              <View style={{ marginBottom: 15 }}>

                <Input style={{ fontSize: 12, height: 60, borderColor: 'gray', borderWidth: 4 }} placeholder="Votre adresse mail" marginTop='10%'
                  errorStyle={{ color: 'red' }}
                  errorMessage={this.state.errorMail}
                  onChangeText={(text) => { this.setState({ email: text }) }}
                />


                <Input style={{ fontSize: 12, height: 60, borderColor: 'gray', borderWidth: 4, alignItems: 'center', justifyContent: 'center' }} placeholder="Votre mot de passe"
                  errorStyle={{ color: 'red' }}
                  errorMessage={this.state.errorPassword}
                  secureTextEntry={true}
                  onChangeText={(text) => { this.setState({ password: text }) }}
                />
              </View>
              <View>
                <Button title="Se connecter" buttonStyle={{ borderRadius: 13, backgroundColor: '#2C5F13', width: 250 }} style={{ height: 50, marginTop: '10%' }} onPress={() => this.handleSubmitSignIn()}
                />
                <Button title="Se connecter via Facebook" buttonStyle={{ borderRadius: 13, backgroundColor: '#375D81', marginBottom: 20, width: 250 }} style={{ height: 50, marginTop: '5%' }} onPress={() => this.Facebooklogin()} />


                <Text style={{ fontSize: 15, color: '#000000', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate("forget")}>
                  J'ai oublié mon mot de passe
      </Text>


              </View>
            </View>


          ) : null}
        </View>
      </ScrollView >

    )
  }
}
Facebooklogin = async () => {
  await Facebook.initializeAsync('1940531982745503');
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
    permissions: ['public_profile', 'email']
  });
  if (type === 'success') {
    //Firebase credential is created with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    auth.signInAndRetrieveDataWithCredential(credential).catch(error => {
      this.setState({ errorMessage: error.message });
    });
  }
}

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
)(Signin);

