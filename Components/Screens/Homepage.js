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

            <View  style={{ marginTop: 20}}>
            <Button title="JE PROPOSE MON AIDE"onPress={()=>this.props.navigation.navigate('Helper')}  buttonStyle={{ width:'100%', backgroundColor: '#2C5F13', padding: 10}}/>
            </View>


            <View  style={{ marginTop: 20}} >
            <Button title="J'AI BESOIN D'AIDE"onPress={()=>this.props.navigation.navigate('Help')}  buttonStyle={{width:'100%',  backgroundColor: '#2C5F13', padding: 10}}/>
            </View>


            <View  style={{ marginTop: 20}} >

            <Button title="MES DEMANDE D'AIDE"onPress={()=>this.props.navigation.navigate('Demande')}  buttonStyle={{ width:'100%', backgroundColor: '#2C5F13', padding: 10}}/>
            </View>


            <View  style={{ marginTop: 20}} >
            <Button title="  MES AIDE  "onPress={()=>this.props.navigation.navigate('MesAides')}  buttonStyle={{width:'100%',  backgroundColor: '#2C5F13', padding: 10}}/>
            </View>


            <View  style={{  marginTop: 20}} >
            <Button title="  MON PROFIL  "onPress={()=>this.props.navigation.navigate('Profil')}  buttonStyle={{width:'100%', backgroundColor: '#2C5F13', padding: 10}}/>
            </View>


        </View>


    )
}
}