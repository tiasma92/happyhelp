import React from 'react';
import { Text, View, Image, TextInput, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import * as Font from 'expo-font';
import {connect} from 'react-redux';



class HelperValid extends React.Component {

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
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
      'openSansRegular': require('../../assets/fonts/OpenSans-Regular.ttf')
    });
    this.setState({ fontLoaded: true})
    
  }
  handleSubmitRequest() {
    console.log(this.props.navigation.getParam("id"))
    fetch(`http://10.2.4.23:3000/valid_request?id_request=${this.props.navigation.getParam("id")}&id_user=${this.props.userIdfromStore}`)
    .then(function(res, err){
      return res.json()
    }).then((data)=> {
      console.log('RESULTAT DE Recuperation EN BD Request sur la map--->', data)
      this.setState({
        allRequest: data.request,
      })
      console.log("-------------------"+this.state.allRequest)
    })
    .catch((error)=> {
        console.log('Request failed in my HelperValid Home request', error)
    });
    this.props.navigation.navigate("helper")
  }


render(){
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
    <Image source={this.props.navigation.getParam("img")} 
      style={{ marginLeft: 60, marginRight: 60, textAlign: 'center', backgroundColor: "transparent", width: 60, height: 60, alignItems:'center', justifyContent: 'center', borderWidth: 1, borderColor:'grey', borderRadius: 7, borderStyle: 'dotted' }}/>
    </View>
    <View style={{alignItems:'center', marginTop: 4}}><Text>{this.props.navigation.getParam("category")}</Text></View>

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
)(HelperValid);
