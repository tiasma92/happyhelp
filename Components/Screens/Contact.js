import React from 'react';
import { Text, View, Image, TextInput, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import * as Font from 'expo-font';
import {connect} from 'react-redux';
import ipAdress from "./ip"



export default class Contact extends React.Component {

  constructor (props) {
    super();
    this.state = {
      fontLoaded: false,
      desc: '',
      category: "",
      dateRequest: '',
      position: '',
      img: "",
      allRequest: [],
      user: {},
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
      'openSansRegular': require('../../assets/fonts/OpenSans-Regular.ttf')
    });
    this.setState({ fontLoaded: true})
    fetch(`http://${ipAdress}:3000/find_request?id_request=${this.props.route.params.id}`)
    .then(function(res, err){
      return res.json()
    }).then((data)=> {
      console.log('RESULTAT DE Recuperation EN BD Request sur la map--->', data)
      this.setState({
        user: data.request.idAsker,
      })
      console.log("-------------------"+this.state.user)
    })
    .catch((error)=> {
        console.log('Request failed in my HelperValid Home request', error)
    });
  }



render(){
  var img;
  imgShop = require("../../assets/images/shop.png")
  imgCar = require("../../assets/images/car.png")
  imgPen = require("../../assets/images/pen.png")
  imgTool = require("../../assets/images/tool.png")
  imgVoice = require("../../assets/images/voice.png")
  imgOrdi = require("../../assets/images/taptop-windows.png")
  //markerallRequest.map((data,i) =>
  if (this.props.route.params.category === "Courses"){
    img = imgShop;
  } else if (this.props.route.params.category === "Bricolage"){
    img = imgTool;
  } else if (this.props.route.params.category === "Aide informatique"){
    img = imgOrdi;
  } else if (this.props.route.params.category === "Accompagnement"){
    img = imgCar;
  } else if (this.props.route.params.category === "Visite de courtoisie"){
    img = imgVoice;
  } else if (this.props.route.params.category === "Démarches administratives"){
    img = imgPen;
  }
  return(
      
    <ScrollView>
      <View style={{alignItems:'center'}}>
      <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150, marginTop: 30, alignItems:'center', justifyContent: 'center' }}/>
      </View>

{ this.state.fontLoaded? (
   <View style={{textAlign: 'center', alignContent:'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center' }}>RECAPITULATIF DE LA DEMANDE</Text>
  
      <View style={{
        textAlign: 'center', 
        alignContent:'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
      }}>
    <Image source={img} 
      style={{ marginLeft: 60, marginRight: 60, backgroundColor: "transparent", width: 60, height: 60, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7}}/>
    </View>
    <View style={{alignItems:'center', marginTop: 4}}><Text>{this.props.route.params.category}</Text></View>


    <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        textAlign: 'center', 
        justifyContent:'center',
        alignItems:'center'
      }}>
    <Text style={{fontWeight: "bold", textAlign:'center', fontSize: 15, alignItems:'center', justifyContent:'center'}}>Information concernant la demande d'aide</Text>
    </View>

    <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10, 
}}>

      <Text style={{fontWeight: "bold", fontSize: 15, marginLeft: 10}}>Description: </Text><Text style={{fontSize: 15}}>{this.props.route.params.description}</Text>

</View>
    


<View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10, 
}}>

      <Text style={{fontWeight: "bold", fontSize: 15, marginLeft: 10}}>Nom: </Text><Text style={{fontSize: 15}}>{this.state.user.lastName}</Text>

</View>

<View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10, 
     }}>

      <Text style={{fontWeight: "bold", fontSize: 15, marginLeft: 10}}>Prenom: </Text><Text style={{fontSize: 15}}>{this.state.user.firstName}</Text>


</View>

<View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10, 
        
        
      }}>
      <Text style={{fontWeight: "bold", fontSize: 15, marginLeft: 10}}>Adresse: </Text><Text style={{fontSize: 15}}>{this.state.user.address}</Text>
</View>

<View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10, 
        
        
      }}>
<Text style={{fontWeight: "bold", fontSize: 15, marginLeft: 10}}>Télephone: </Text><Text style={{fontSize: 15}}>{this.state.user.phone}</Text>
    </View>

    
    
       
    <View style={{alignItems:'center', justifyContent:'center', textAlign:'center', marginTop:20}}>

   

    <Button title="Retour" onPress={() => this.props.navigation.navigate("myhelp")} buttonStyle={{marginBottom:10,borderRadius: 13, backgroundColor:"#2C5F13", alignItems:'center', justifyContent: 'center'}}/>

    </View>
</View> 

) : null}
 
 </ScrollView>
 
  )
}}

