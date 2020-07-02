import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import * as Font from 'expo-font';
import {connect} from 'react-redux';
import ipAdress from "./ip"


class HistoryHelp extends React.Component {

  constructor () {
    super();
    this.state = {
      fontLoaded: false,
      allRequest: [],
      name: "",
    }
  }

  async componentDidMount() {
    var ctx = this;
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
      'openSansRegular': require('../../assets/fonts/OpenSans-Regular.ttf')
    });

    ctx.setState({ fontLoaded: true });

    await fetch(`http://${ipAdress}:3000/myhistory?token=${this.props.userTokenfromStore}`)
    .then(function(res, err){
      return res.json()
    }).then((data)=> {
      console.log('RESULTAT DE Recuperation EN BD Request dans l histo--->', data)
      var HistoryList = [];
      for (var i =0; i<data.user.helpRequest.length; i++) {
        HistoryList.push(data.user.helpRequest[i])
    }
    
    ctx.setState({
      allRequest: HistoryList,
      name: data.user.firstName
    })
    })
    .catch((error)=> {
        console.log('Request failed in my histo request', error)
    });
      }
 

render(){
  console.log('loaded :',this.state.fontLoaded)
  var img;
  var imgAvatar = require("../../assets/images/avatar.png")
  img = imgAvatar 
  var value = "";
  var color= "";
  var HistoryallRequest = [...this.state.allRequest];
 

  var HistoryList = HistoryallRequest.map((data, i) => {
    if (data.statut === 'En attente'){
      value="En attente"
      color = "error"
    } else if (data.statut === "En cours"){
      value= "En cours"
      color = "warning"
    } else if (data.statut === "Terminé"){
      value= "Terminé"
      color = "success"
    }
      return(<ListItem
  key={i}
  title={data.category}
  titleStyle={{ fontWeight: 'bold' }}
  leftAvatar={{source: img}}
  subtitle={data.description}
  bottomDivider
  style={{width:400, marginLeft: 10, marginRight:10}}
  onPress={() => this.props.navigation.navigate("comment", {id:data._id})}
  badge={{value:data.statut , status:color}}
  chevron={{ color: 'black', height:20 }}

/>)
   })
  


  return(


    <ScrollView>
      <View style={{alignItems:'center'}}>
      <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150, marginTop: 30, alignItems:'center', justifyContent: 'center' }}/>
      </View>

{ this.state.fontLoaded? (
   <View style={{textAlign: 'center', alignContent:'center'}}>
    <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center' }}>MES DEMANDES D'AIDE</Text>

  <View style={{
    flex: 1,
    marginTop: 20,
    
  }}>
 
  <View>
  {HistoryList}
  </View >


  <View style={{marginLeft:100, marginRight:100}}>
    <Button title="RETOUR" buttonStyle={{borderRadius: 13,backgroundColor: '#2C5F13'}} style={{ height: 50, marginTop: '10%' }}onPress= {() => this.props.navigation.navigate("HomeH")}
    /> 
    </View> 
</View>
      </View>
      

) : null}


 </ScrollView>
 
  )
}}

function mapStateToProps(state) {
  console.log(state)
  console.log('je recois de mon reducer le token suivant : ',state.userToken)

  return { userTokenfromStore: state.userToken }
}

export default connect(
    mapStateToProps,
    null
)(HistoryHelp);