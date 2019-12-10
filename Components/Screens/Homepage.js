import React from 'react';
import { Text, View, Image, } from 'react-native';
import {  Button } from 'react-native-elements';


var Name= 'John';

export default class HomePage extends React.Component{
render(){
    return(
        <View>
        <View style={{ alignItems: 'center',}}>
            <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150}}/>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Bienvenue {Name}</Text>
           
            </View>

            <View  style={{ marginTop: 20, alignItems: 'center'}}> 
            <Button title="JE PROPOSE MON AIDE"onPress={()=>this.props.navigation.navigate('map')}  buttonStyle={{ backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10}}/>
            <Button title="J'AI BESOIN D'AIDE"onPress={()=>this.props.navigation.navigate('help')}  buttonStyle={{ backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10}}/>
            <Button title="MES DEMANDE D'AIDE"onPress={()=>this.props.navigation.navigate('Demande')}  buttonStyle={{ backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10}} s/>
            <Button title="  MES AIDE  "onPress={()=>this.props.navigation.navigate('MesAides')}  buttonStyle={{ backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10}}/>
            <Button title="  MON PROFIL  "onPress={()=>this.props.navigation.navigate('profil')}  buttonStyle={{ backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10}}/>
            </View>


        </View>


    )
}
}