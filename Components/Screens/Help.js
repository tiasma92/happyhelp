import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import * as Font from 'expo-font';



export default class Help extends React.Component {

  constructor () {
    super();
    this.state = {
      fontLoaded: false,
      backgroundColorLaptop: 'transparent',
      backgroundColorShop: 'transparent',
      backgroundColorCar: 'transparent',
      backgroundColorVoice: 'transparent',
      backgroundColorTool: 'transparent',
      backgroundColorPen: 'transparent'
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
  return(
    
      
    <ScrollView>
<View style={{alignItems:'center'}}>
<Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150, marginTop: 30, alignItems:'center', justifyContent: 'center' }}/>
</View>

{ this.state.fontLoaded? (
   <View style={{textAlign: 'center', alignContent:'center'}}>
    <Text style={{fontWeight: 'bold', fontFamily: 'openSansRegular', fontSize: 20, textAlign:'center' }}>MA DEMANDE D'AIDE</Text>

    <Text style={{fontFamily: 'openSansRegular', fontWeight: 'normal', fontSize: 15, textAlign:'center' }}>Appuyer sur l'image qui correspond</Text>
    <Text style={{fontFamily: 'openSansRegular', fontWeight: 'normal', fontSize: 15, textAlign:'center' }}>à votre demande d'aide</Text>
  
      <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 25
      }}>
        <TouchableOpacity 
        onPress={() => {if (this.state.backgroundColorShop == 'transparent') {
          console.log('Pressed shop'); 
          this.setState({backgroundColorShop: '#FFD029'})} else {
            this.setState({backgroundColorShop:'transparent'})
          }}}>
    
    <Image source={require('../../assets/images/shop.png')} 
      style={{ backgroundColor: this.state.backgroundColorShop, width: 100, height: 100, margin: 10, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7, borderStyle: 'dotted' }}/>
    <Text style={{textAlign:'center', fontSize: 12}}>Courses</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        onPress={() => {if (this.state.backgroundColorTool == 'transparent') {
          console.log('Pressed shop'); 
          this.setState({backgroundColorTool: '#FFD029'})}
          else {
            this.setState({backgroundColorTool:'transparent'})
          }}}>
    <Image source={require('../../assets/images/tool.png')} 
      style={{ backgroundColor: this.state.backgroundColorTool, width: 100, height: 100, margin: 10, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7, borderStyle: 'dotted' }}/>
    <Text style={{textAlign:'center', fontSize: 12}}>Bricolage</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        onPress={() => {if (this.state.backgroundColorLaptop == 'transparent') {
          console.log('Pressed shop'); 
          this.setState({backgroundColorLaptop: '#FFD029'})}
          else {
            this.setState({backgroundColorLaptop:'transparent'})
          }}}>
      <Image source={require('../../assets/images/taptop-windows.png')} 
        style={{ backgroundColor: this.state.backgroundColorLaptop, borderColor:'grey', borderRadius: 7, borderStyle: 'dotted', borderWidth: 1, width: 100, height: 100, margin: 10, alignItems:'center', justifyContent: 'center'}}/>
      <Text style={{textAlign:'center', fontSize: 12}}>Aide informatique</Text>
      </TouchableOpacity>
    </View>
    
    <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 25
      }}>
    
    <TouchableOpacity 
        onPress={() => {if (this.state.backgroundColorCar == 'transparent') {
          console.log('Pressed shop'); 
          this.setState({backgroundColorCar: '#FFD029'})}
          else {
            this.setState({backgroundColorCar:'transparent'})
          }}}>
    <Image source={require('../../assets/images/car.png')} 
      style={{ backgroundColor: this.state.backgroundColorCar, width: 100, height: 100, margin: 10, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7, borderStyle: 'dotted' }}/>
    <Text style={{textAlign:'center', fontSize: 12}}>Accompagnement</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        onPress={() => {if (this.state.backgroundColorVoice == 'transparent') {
          console.log('Pressed shop'); 
          this.setState({backgroundColorVoice: '#FFD029'})}
          else {
            this.setState({backgroundColorVoice:'transparent'})
          }}}>
    <Image source={require('../../assets/images/voice.png')} 
    style={{ backgroundColor: this.state.backgroundColorVoice, width: 100, height: 100, margin: 10, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7, borderStyle: 'dotted'}}/>
    <Text style={{textAlign:'center', fontSize: 12}}>Visite de courtoisie</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        onPress={() => {if (this.state.backgroundColorPen == 'transparent') {
          console.log('Pressed shop'); 
          this.setState({backgroundColorPen: '#FFD029'})}
          else {
            this.setState({backgroundColorPen:'transparent'})
          }}}>
    <Image source={require('../../assets/images/pen.png')} 
      style={{backgroundColor: this.state.backgroundColorPen, width: 100, height: 100, margin: 10, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7, borderStyle: 'dotted' }}/>
     <Text style={{textAlign:'center', fontSize: 12}}>Démarches</Text>
     <Text style={{textAlign:'center', fontSize: 12}}>administratives</Text>

    </TouchableOpacity>
    </View>
    <View style={{alignItems:'center', justifyContent:'center', textAlign:'center', marginTop:20}}>
    <Button title="RETOUR" onPress={() => console.log('pressed retour')} buttonStyle={{ backgroundColor:"#2C5F13", alignItems:'center', textAlign:'center', justifyContent: 'center'}}/>
    </View>
</View> 


) : null}
 
 
 
 </ScrollView>
 
  )
}}

