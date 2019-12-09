import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    infoText: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 8
    }
  });


export default class Profil extends React.Component{
render(){
    return(
        <View>
        <View style={{ alignItems: 'center',}}>
            <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 100, height: 100, marginTop: 30}}/>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>MON PROFIL</Text>
            <Ionicons name="ios-contact" size={100} style={{marginTop:10}}/>
            </View>
            <View style={{alignItems: 'flex-start', marginLeft: 30}}>
            <Text style={styles.infoText}>Nom:                      Doe</Text>
            <Text style={styles.infoText}>Prenom:               John</Text>
            <Text style={styles.infoText}>Adresse:              59 rue de la rose</Text>
            <Text style={styles.infoText}>Ville:                      75 000</Text>
            <Text style={styles.infoText}>Telephone:          06 06 06 06 06</Text>
            </View>
            <Button title="Modifier Profil" style={{alignItems: 'center', marginTop: 30}} buttonStyle={{backgroundColor: '#2C5F13', padding: 10}}/>
        </View>
    )
}
}