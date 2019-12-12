import React from 'react';
import { Text, View, Image, TextInput, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import * as Font from 'expo-font';



class ConfirmRequest extends React.Component {

  constructor () {
    super();
    this.state = {
      fontLoaded: false,
      desc: ''
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
  const { navigation } = this.props;
  console.log(this.props.navigation.getParam('img'))
  var img=this.props.navigation.getParam("img");
  return(
      
    <ScrollView>
      <View style={{alignItems:'center'}}>
      <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150, marginTop: 30, alignItems:'center', justifyContent: 'center' }}/>
      </View>

{ this.state.fontLoaded? (
   <View style={{textAlign: 'center', alignContent:'center'}}>
      <Text style={{fontWeight: 'bold', fontFamily: 'openSansRegular', fontSize: 20, textAlign:'center' }}>RECAPITULATIF DE MA DEMANDE</Text>
  
      <View style={{
        textAlign: 'center', 
        alignContent:'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
      }}>
    <Image source={img} 
      style={{ marginLeft: 60, marginRight: 60, textAlign: 'center', backgroundColor: "transparent", width: 60, height: 60, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7, borderStyle: 'dotted' }}/>
    </View>

    
    <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        textAlign: 'center', 
        justifyContent:'center',
        alignItems:'center'
      }}>
    <Text style={{fontWeight: "bold", textAlign:'center', fontSize: 15, alignItems:'center', justifyContent:'center'}}>{this.props.navigation.getParam('type')}</Text>
    </View>


    <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 30, 
        
        
      }}>

      <Text style={{fontWeight: "bold", fontSize: 15, marginLeft: 10}}>Détaillez votre demande (facultative):</Text>
    </View>

    <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
      }}>
    <TextInput
      style={{ height: 120, borderColor: 'gray', borderWidth: 1, width:"90%", marginLeft: 10 }}
      onChange={(e) => this.setState({desc: e.target.value})} 
      value={this.state.desc}
       placeholder="Détails de votre demande"
    />
    </View>
       
    <View style={{alignItems:'center', justifyContent:'center', textAlign:'center', marginTop:20}}>
    <Button title="VALIDER" onPress={() => console.log('pressed retour')} buttonStyle={{ backgroundColor:"#2C5F13", alignItems:'center', textAlign:'center', justifyContent: 'center'}}/>
    </View>
</View> 

) : null}
 
 </ScrollView>
 
  )
}}

export default ConfirmRequest;