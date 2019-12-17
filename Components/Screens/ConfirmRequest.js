import React from 'react';
import { Text, View, Image, TextInput, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import * as Font from 'expo-font';
import {connect} from 'react-redux';



class ConfirmRequest extends React.Component {

  constructor (props) {
    super();
    this.state = {
      fontLoaded: false,
      desc: '',
      category: "",
      dateRequest: '',
      position: '',
      img: "",
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
      'openSansRegular': require('../../assets/fonts/OpenSans-Regular.ttf')
    });
 
this.setState({ fontLoaded: true,
              category: this.props.navigation.getParam("type") });
  }

handleSubmitRequest() {
  console.log(this.props.navigation.getParam("img"))
  this.setState({
    img: this.props.navigation.getParam("img")
  })
  console.log(this.state.img)
  fetch(`http://192.168.43.103:3000/new_request`,{
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `description=${this.state.desc}&category=${this.state.category}&id=${this.props.userIdfromStore}`
  })
    .then(function(res, err){
      return res.json()
    }).then((data)=> {
       console.log('RESULTAT DE LERENGISTREMENT EN BD USER --->', data)
    })
    .catch((error)=> {
        console.log('Request failed in my ConfirmRequest Home request', error)
    });
}


render(){
  console.log('loaded :',this.state.fontLoaded)
  const { navigation } = this.props;
  console.log(this.props.navigation.getParam('img'))
  var img=this.props.navigation.getParam("img");
  console.log(img)
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
      style={{ marginLeft: 60, marginRight: 60,  backgroundColor: "transparent", width: 60, height: 60, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7}}/>
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
      onChangeText = {(text) => {this.setState({desc: text})}}
      placeholder="Détails de votre demande"
    />
    </View>
       
    <View style={{alignItems:'center', justifyContent:'center', textAlign:'center', marginTop:20}}>
    <Button title="VALIDER" onPress={() => this.handleSubmitRequest()} buttonStyle={{ backgroundColor:"#2C5F13", alignItems:'center', textAlign:'center', justifyContent: 'center'}}/>
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
)(ConfirmRequest);