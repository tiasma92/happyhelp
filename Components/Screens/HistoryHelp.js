import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import * as Font from 'expo-font';



export default class HistoryHelp extends React.Component {

  constructor () {
    super();
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
      'openSansRegular': require('../../assets/fonts/OpenSans-Regular.ttf')
    });
 
this.setState({ fontLoaded: true });
  }

render(){
  console.log('loaded :',this.state.fontLoaded)

  
  const data =[
    {
      name: 'BRICOLAGE',
      avatar: '../../assets/images/LogoHappyHelp.png',
      subtitle: 'Description: Réparation de meuble. Fait le: 15/12/2019. Réalisé par: John DOE',
      value: 'En attente',
      color:'primary'
    },
    {
      name: 'BRICOLAGE',
      avatar: '../../assets/images/LogoHappyHelp.png',
      subtitle: 'Description: Réparation de meuble. Fait le: 15/12/2019. Réalisé par: John DOE',
      value: 'En attente',
      color:'primary'
    },
    {
      name: 'COURS',
      avatar: '../../assets/images/LogoHappyHelp.png',
      subtitle: 'Description: Réparation de meuble. Fait le: 15/12/2019. Réalisé par: John DOE',
      value: 'En cours',
      color:'warning'
    },
    {
      name: 'VISITE DE COURTOISIE',
      avatar: '../../assets/images/LogoHappyHelp.png',
      subtitle: 'Description: Réparation de meuble. Fait le: 15/12/2019. Réalisé par: John DOE',
      value: 'Terminé',
      color:'success'
    },
    {
      name: 'JARDINAGE',
      avatar: '../../assets/images/LogoHappyHelp.png',
      subtitle: 'Description: Réparation de meuble. Fait le: 15/12/2019. Réalisé par: John DOE',
      value: 'En cours',
      color: 'warning'
    }]

  const listItems = data.map((item,i) => <ListItem
  key={i}
  title={item.name}
  titleStyle={{ fontWeight: 'bold' }}
  leftAvatar={{source: require('../../assets/images/avatar.png')}}
  subtitle={item.subtitle}
  bottomDivider
  style={{width:400, marginLeft: 10, marginRight:10}}
  onPress={() => console.log("commentaire")}
  badge={{value:item.value , status:item.color}}
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
      {listItems }
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