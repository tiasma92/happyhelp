import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import * as Font from 'expo-font';
import {connect} from 'react-redux';


class HistoryHelp extends React.Component {

  constructor () {
    super();
    this.state = {
      fontLoaded: false,
      allRequest: [],
    }
  }

  async componentDidMount() {
    var ctx = this;
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
      'openSansRegular': require('../../assets/fonts/OpenSans-Regular.ttf')
    });

    ctx.setState({ fontLoaded: true });

    fetch(`http://10.2.4.23:3000/myhistory?id=${this.props.userIdfromStore}`)
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
    })
      console.log(ctx.state.allRequest)
    })
    .catch((error)=> {
        console.log('Request failed in my histo request', error)
    });
      }
render(){
  console.log('loaded :',this.state.fontLoaded)



  // const data =[
  //   {
  //     name: 'BRICOLAGE',
  //     avatar: '../../assets/images/LogoHappyHelp.png',
  //     subtitle: 'Description: Réparation de meuble. Fait le: 15/12/2019. Réalisé par: John DOE',
  //     value: 'En attente',
  //     color:'primary'
  //   },
  //   {
  //     name: 'BRICOLAGE',
  //     avatar: '../../assets/images/LogoHappyHelp.png',
  //     subtitle: 'Description: Réparation de meuble. Fait le: 15/12/2019. Réalisé par: John DOE',
  //     value: 'En attente',
  //     color:'primary'
  //   },
  //   {
  //     name: 'COURS',
  //     avatar: '../../assets/images/LogoHappyHelp.png',
  //     subtitle: 'Description: Réparation de meuble. Fait le: 15/12/2019. Réalisé par: John DOE',
  //     value: 'En cours',
  //     color:'warning'
  //   },
  //   {
  //     name: 'VISITE DE COURTOISIE',
  //     avatar: '../../assets/images/LogoHappyHelp.png',
  //     subtitle: 'Description: Réparation de meuble. Fait le: 15/12/2019. Réalisé par: John DOE',
  //     value: 'Terminé',
  //     color:'success'
  //   },
  //   {
  //     name: 'JARDINAGE',
  //     avatar: '../../assets/images/LogoHappyHelp.png',
  //     subtitle: 'Description: Réparation de meuble. Fait le: 15/12/2019. Réalisé par: John DOE',
  //     value: 'En cours',
  //     color: 'warning'
  //   }]
  
  var value = "";
  var color= "";
  var HistoryList = [];
  HistoryallRequest = [...this.state.allRequest];
  console.log("-------------------",HistoryallRequest)
  for (var i=0; i< HistoryallRequest.length; i++){
    var data = HistoryallRequest[i];
    if (!data.statut){
      value="En attente"
      color = "warning"
    } else if (data.statut){
      value= "En cours"
      color = "success"
    }
      HistoryList.push(<ListItem
  key={i}
  title={data.category}
  titleStyle={{ fontWeight: 'bold' }}
  leftAvatar={{source: require('../../assets/images/avatar.png')}}
  subtitle={data.description}
  bottomDivider
  style={{width:400, marginLeft: 10, marginRight:10}}
  onPress={() => console.log("commentaire")}
  badge={{value:value , status:color}}
  chevron={{ color: 'black', height:20 }}

/>);
  
}

  return(


    <ScrollView>
      <View style={{alignItems:'center'}}>
      <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150, marginTop: 30, alignItems:'center', justifyContent: 'center' }}/>
      </View>

{ this.state.fontLoaded? (
   <View style={{textAlign: 'center', alignContent:'center'}}>
    <Text style={{fontWeight: 'bold', fontFamily: 'openSansRegular', fontSize: 20, textAlign:'center' }}>MES DEMANDES D'AIDE</Text>

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
  console.log('je recois de mon reducer lid suivant : ',state.userId)

  return { userIdfromStore: state.userId }
}

export default connect(
    mapStateToProps,
    null
)(HistoryHelp);