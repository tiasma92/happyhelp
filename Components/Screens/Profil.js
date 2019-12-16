import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux';


const styles = StyleSheet.create({
    infoText: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 8
    }
  });


class Profil extends React.Component{
    constructor(props){
        super()
        this.state = ({
            firstName: "",
            lastName: "",
            address: "",
            city: "75000",
            phone: "",
        })
    }
componentDidMount() {
    var ctx = this;
    fetch(`http://192.168.0.17:3000/profil?id=${ctx.props.userIdfromStore}`)
    .then(function(res, err){
      return res.json()
    }).then((data)=> {
       console.log('RESULTAT DE LERENGISTREMENT EN BD USER --->', data)
       ctx.setState({
           firstName: data.user.firstName,
           lastName: data.user.lastName,
           address: data.user.address,
           phone: data.user.phone,
       })
    })
    .catch((error)=> {
        console.log('Request failed in my Sign-In Home request', error)
    });
}
render(){
    return(
        <View>
        <View style={{ alignItems: 'center',}}>
            <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 100, height: 100, marginTop: 30}}/>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>MON PROFIL</Text>
            <Ionicons name="ios-contact" size={100} style={{marginTop:10}}/>
            </View>
            <View style={{alignItems: 'flex-start', marginLeft: 30}}>
            <Text style={styles.infoText}>Nom:                      {this.state.lastName}</Text>
            <Text style={styles.infoText}>Prenom:               {this.state.firstName}</Text>
            <Text style={styles.infoText}>Adresse:              {this.state.address}</Text>
            <Text style={styles.infoText}>Ville:                      {this.state.city}</Text>
            <Text style={styles.infoText}>Telephone:          {this.state.phone}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
            <Button title="Modifier Profil" buttonStyle={{borderRadius: 13,backgroundColor: '#2C5F13', padding: 10, width: 200, marginTop: 30}}/>
            </View>
        </View>
    )
}
}

function mapStateToProps(state) {
    console.log(state)
    console.log('je recois de mon reducer lid suivant : ',state.userId)

    return { userIdfromStore: state.userId }
  }
  
  export default connect(
      mapStateToProps,
      null
  )(Profil);