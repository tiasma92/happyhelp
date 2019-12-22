import React from 'react';
import { Text, View, Image, ScrollView, TextInput} from 'react-native';
import { Button, Rating, AirbnbRating } from 'react-native-elements';
import * as Font from 'expo-font';
import ipAdress from "./ip"



export default class Comments extends React.Component {

  constructor () {
    super();
    this.state = {
      fontLoaded: false,
      desc:''
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
      'openSansRegular': require('../../assets/fonts/OpenSans-Regular.ttf')
    });
 
this.setState({ fontLoaded: true });
  }
  handleSubmit() {
    fetch(`http://${ipAdress}:3000/end_request?id_request=${this.props.navigation.getParam("id")}`)
    .then(function(res, err){
      return res.json()
    }).then((data)=> {
      console.log('RESULTAT DE LERENGISTREMENT EN BD USER submit signin--->', data)      
    })
    .catch((error)=> {
        console.log('Request failed in my Comments request', error)
    });
    this.props.navigation.navigate("HomeH")
  }

render(){
  console.log('loaded :',this.state.fontLoaded)
  console.log(this.props.navigation.getParam("id"))
  

  return(
    
      
    <ScrollView>
      <View style={{alignItems:'center'}}>
      <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150, marginTop: 30, alignItems:'center', justifyContent: 'center' }}/>
      </View>

{ this.state.fontLoaded? (
   <View style={{textAlign: 'center', alignContent:'center'}}>
    <Text style={{fontWeight: 'bold', fontFamily: 'openSansRegular', fontSize: 20, textAlign:'center' }}>COMMENTAIRES</Text>

    <View style={{
        textAlign: 'center', 
        alignContent:'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
      }}>
    <Image source={require('../../assets/images/Mattias.jpeg')} 
      style={{ marginLeft: 60, marginRight: 60, backgroundColor: "transparent", width: 100, height: 100, alignItems:'center', justifyContent: 'center', borderRadius: 50 }}/>
    </View>




{/* <AirbnbRating
  count={5}
  reviews={["Mauvais", "Assez bien","Bien", "Tres bien", "Excellent"]}
  defaultRating={5}
  size={20}
/> */}


    <View style={{
        textAlign: 'center', 
        alignContent:'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 20,
        marginLeft:10,
        marginRight:10
      }}>
    <Text style={{fontSize:16}}>Vos commentaires:</Text>
    <View style={{
        textAlign: 'center', 
        justifyContent: 'center',
        alignContent:'center',
        flex: 1,
        marginTop: 20,
      }}>
    <TextInput
      style={{ height: 100, borderColor: 'gray', borderWidth: 1, width:"100%"}}
      onChange={(text) => {this.setState({desc: text})}} 
      placeholder="Décrivez votre expérience"
      multiline={true}
      numberOfLines={4}
    />
    </View>
    <View style={{marginLeft:100, marginRight:100, marginTop: 10}}>
        <Button title="Terminer" buttonStyle={{backgroundColor: '#2C5F13'}} style={{ height: 50, marginTop: '10%' }} onPress = {
         () => this.handleSubmit()}
        /> 
        </View> 
    </View>

</View> 

) : null}
 
 </ScrollView>
 
  )
}}