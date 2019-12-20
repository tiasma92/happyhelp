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
      backgroundColorPen: 'transparent',
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
  // requestList = [{img: require('../../assets/images/shop.png'), type: "Courses" },
  // {img: require('../../assets/images/tool.png'), type: "Bricolage" },
  // {img: require('../../assets/images/taptop-windows.png'), type: "Aide informatique" },
  // {img: require('../../assets/images/car.png'), type: "Accompagnement" },
  // {img: require('../../assets/images/voice.png'), type: "Visite de courtoisie" },
  // {img: require('../../assets/images/pen.png'), type: "Démarches Administratives" }]
  return(
    
      
    <ScrollView>
<View style={{alignItems:'center'}}>
<Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150,  alignItems:'center', justifyContent: 'center' }}/>
</View>

{ this.state.fontLoaded? (
   <View style={{textAlign: 'center', alignContent:'center'}}>
    <Text style={{fontWeight: 'bold', fontFamily: 'openSansRegular', fontSize: 20, textAlign:'center' }}>MA DEMANDE D'AIDE</Text>

    <Text style={{ fontWeight: 'normal', fontSize: 15, textAlign:'center' }}>Appuyer sur l'image qui correspond</Text>
    <Text style={{ fontWeight: 'normal', fontSize: 15, textAlign:'center' }}>à votre demande d'aide</Text>
  
      <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft:25
      }}>
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('confirmR', {
            img: require('../../assets/images/shop.png'),
            type: "Courses",
        })}
        // onPress={() => {if (this.state.backgroundColorShop == 'transparent') {
        //   console.log('Pressed shop'); 
        //   this.setState({backgroundColorShop: '#FFD029'})} else {
        //     this.setState({backgroundColorShop:'transparent'})
        //   }}}
          >
    
    <Image source={require('../../assets/images/shop.png')} 
      style={{ backgroundColor: this.state.backgroundColorShop, width: 80, height: 80,  alignItems:'center',margin:10, justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7}}/>
    <Text style={{textAlign:'center', fontSize: 12}}>Courses</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('confirmR', {
            img: require('../../assets/images/tool.png'),
            type: "Bricolage",
        })} 
          // {if (this.state.backgroundColorTool == 'transparent') {
          // console.log('Pressed shop'); 
          // this.setState({backgroundColorTool: '#FFD029'})}
          // else {
          //   this.setState({backgroundColorTool:'transparent'})
          // }}}
          >
    <Image source={require('../../assets/images/tool.png')} 
      style={{ backgroundColor: this.state.backgroundColorTool, width: 80, height: 80,  alignItems:'center', justifyContent: 'center',margin:10, borderWidth: 1, borderColor:'grey', borderRadius: 7}}/>
    <Text style={{textAlign:'center', fontSize: 12}}>Bricolage</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('confirmR', {
            img: require('../../assets/images/taptop-windows.png'),
            type: "Aide informatique",
        })} 
          // {if (this.state.backgroundColorLaptop == 'transparent') {
          // console.log('Pressed shop'); 
          // this.setState({backgroundColorLaptop: '#FFD029'})}
          // else {
          //   this.setState({backgroundColorLaptop:'transparent'})
          // }}
          >
      <Image source={require('../../assets/images/taptop-windows.png')} 
        style={{ backgroundColor: this.state.backgroundColorLaptop, borderColor:'grey', borderRadius: 7, borderWidth: 1, width: 80, height: 80,margin:10, alignItems:'center', justifyContent: 'center'}}/>
      <Text style={{textAlign:'center', fontSize: 12}}>Aide informatique</Text>
      </TouchableOpacity>
    </View>
    
    <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
       marginLeft:25
      }}>
    
    <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('confirmR', {
            img: require('../../assets/images/car.png'),
            type: "Accompagnement",
        })}
          // {if (this.state.backgroundColorCar == 'transparent') {
          // console.log('Pressed shop'); 
          // this.setState({backgroundColorCar: '#FFD029'})}
          // else {
          //   this.setState({backgroundColorCar:'transparent'})
          // }}
          >
    <Image source={require('../../assets/images/car.png')} 
      style={{ backgroundColor: this.state.backgroundColorCar, width: 80, height: 80, margin:10, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7}}/>
    <Text style={{textAlign:'center', fontSize: 12}}>Accompagnement</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('confirmR', {
            img: require('../../assets/images/voice.png'),
            type: "Visite de courtoisie",
        })} 
          // {if (this.state.backgroundColorVoice == 'transparent') {
          // console.log('Pressed shop'); 
          // this.setState({backgroundColorVoice: '#FFD029'})}
          // else {
          //   this.setState({backgroundColorVoice:'transparent'})
          // }}
          >
    <Image source={require('../../assets/images/voice.png')} 
    style={{ backgroundColor: this.state.backgroundColorVoice, width: 80, height: 80,margin:10, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7}}/>
    <Text style={{textAlign:'center', fontSize: 12}}>Visite de</Text>
    <Text style={{textAlign:'center', fontSize: 12}}> courtoisie</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('confirmR', {
            img: require('../../assets/images/pen.png'),
            type: "Démarches administratives",
        })} 
          // {if (this.state.backgroundColorPen == 'transparent') {
          // console.log('Pressed shop'); 
          // this.setState({backgroundColorPen: '#FFD029'})}
          // else {
          //   this.setState({backgroundColorPen:'transparent'})
          // }}
          >
    <Image source={require('../../assets/images/pen.png')} 
      style={{backgroundColor: this.state.backgroundColorPen, width: 80, height: 80, margin:10, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7}}/>
     <Text style={{textAlign:'center', fontSize: 12}}>Démarches</Text>
     <Text style={{textAlign:'center', fontSize: 12}}>administratives</Text>

    </TouchableOpacity>
    </View>
    <View style={{alignItems:'center', justifyContent:'center', textAlign:'center', marginTop:10}}>
    <Button title="RETOUR" onPress={() => this.props.navigation.navigate("HomeH")} buttonStyle={{borderRadius: 13, backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10}}/>
    </View>
</View> 


) : null}
 
 
 
 </ScrollView>
 
  )
}}

