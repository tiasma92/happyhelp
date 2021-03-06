import React from 'react';
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';


export default class DemandeConf extends React.Component {
  render() {


    return (
      <View style={{
        width: '100%',
        textAlign: 'center',
        alignItems: 'center'
      }}>

        <View style={{
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 30,
        }}>
          <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 200, height: 200, marginTop: 2 }} />
        </View>

        <View style={{ alignItems: 'center', textAlign: 'center' }}>
          <Image source={require('../../assets/images/icons8-content-100.png')} style={{ marginBottom: 20, marginTop: 10, width: 100, height: 100 }} />

        </View>


        <View style={{}}>
          <Text style={{
            marginBottom: 20,

            fontSize: 20,
            color: '#000000',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            Vous serez contacté par un de nos Happy Helper disponible
    </Text>
        </View>


        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.props.navigation.navigate('HomeH')
          }>
          <Text style={styles.submitButtonText}> RETOUR AU MENU </Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {

    width: '100%',
    textAlign: 'center'

  },
  input: {


    flex: 1,
    flexDirection: 'column',
    borderWidth: 0,
    borderRadius: 5,
    marginBottom: 15,
    marginLeft: 50,
    marginRight: 50,

    fontSize: 15,
    textAlign: 'center',
    height: 25,
    borderColor: '#2C5F13',
    borderWidth: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  submitButton: {
    backgroundColor: '#2C5F13',
    padding: 10,
    height: 45,
    borderWidth: 0,
    borderRadius: 13,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,


    justifyContent: "center",
    textAlign: "center",
  },
  submitButtonText: {
    justifyContent: "center",
    textAlign: "center",
    color: 'white'
  }
})