import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import * as Font from 'expo-font';



export default class HistoryHelp extends React.Component {

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
    
    fetch(`http://192.168.43.103:3000/request`)
    .then(function(res, err){
      return res.json()
    }).then((data)=> {
      console.log('RESULTAT DE Recuperation EN BD Request dans l histo--->', data)
      ctx.setState({
        allRequest: data.request,
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

  var historyList = [];
  historyallRequest = [...this.state.allRequest];
  historyList = historyallRequest.map((data,i) =>  <historyList
  key={i}
  title={data.category}
  titleStyle={{ fontWeight: 'bold' }}
  leftAvatar={{source: require('../../assets/images/avatar.png')}}
  subtitle={data.description}
  bottomDivider
  style={{width:400, marginLeft: 10, marginRight:10}}
  onPress={() => console.log("commentaire")}
  badge={{value:data.value , status:data.color}}
  chevron={{ color: 'black', height:20 }}
  
  
/>);


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
      {historyList }
      </View >


      <View style={{marginLeft:100, marginRight:100}}>
        <Button title="RETOUR" buttonStyle={{backgroundColor: '#2C5F13'}} style={{ height: 50, marginTop: '10%' }} 
        /> 
        </View> 
</View>
      </View>
      

) : null}

  
 </ScrollView>
 
  )
}}