import React from 'react';
import { Text, View, Image, TextInput, ScrollView, Modal, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import * as Font from 'expo-font';
import { connect } from 'react-redux';
import ipAdress from "./ip"
import { TouchableOpacity } from 'react-native-gesture-handler';



class ConfirmRequest extends React.Component {

  constructor(props) {
    super();
    this.state = {
      fontLoaded: false,
      desc: '',
      category: "",
      dateRequest: '',
      position: '',
      address: '',
      city: '',
      img: "",
      modalVisible: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
      'openSansRegular': require('../../assets/fonts/OpenSans-Regular.ttf')
    });

    this.setState({
      fontLoaded: true,
      category: this.props.route.params.type,
      img: this.props.route.params.img,
    });
  }

  /* Register a request from someone who need helps in database */
  //// title="VALIDER" onPress={() => this.handleSubmitRequest()} buttonStyle={{borderRadius: 13, backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10}}/>
  handleSubmitRequest() {

    fetch(`http://${ipAdress}:3000/new_request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${this.state.desc}&category=${this.state.category}&id=${this.props.userIdfromStore}&address=${this.state.address}&city=${this.state.city}`
    })
      .then(function (res, err) {
        return res.json()
      }).then((data) => {
        console.log('RESULTAT DE LERENGISTREMENT EN BD USER --->', data)
      })
      .catch((error) => {
        console.log('Request failed in my ConfirmRequest Home request', error)
      });
      this.setState({modalVisible: !this.state.modalVisible})
    this.props.navigation.navigate("confirmD")
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    console.log(visible)
  }


  render() {
    return (

      <ScrollView  style={ this.state.modalVisible ? {backgroundColor: 'rgba(0, 0, 0, 0.5)'} : {}}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1, flexDirection: 'row', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ marginTop: 22, width: '90%', height: '70%', backgroundColor: 'white' }}>
              <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold", marginBottom: '6%' }}>Localisation de la requête</Text>
              <Input style={{ fontSize: 12, height: 60, borderColor: 'black', borderWidth: 4, alignItems: 'center'}}
                inputContainerStyle={{ height: 35, borderColor: '#2C5F13', borderWidth: 1, marginBottom: '3%' }}
                label='Adresse: '
                placeholder="Votre adresse"
                onChangeText={(text) => { this.setState({ address: text }) }}
              />
              <Input style={{ fontSize: 12, height: 60, borderColor: 'black', borderWidth: 4, alignItems: 'center'}}
                inputContainerStyle={{ height: 35, borderColor: '#2C5F13', borderWidth: 1, }}
                label='Ville: '
                placeholder="Votre ville"
                onChangeText={(text) => { this.setState({ city: text }) }}
              />
              <Button title="Confirmer" onPress={() => this.handleSubmitRequest()}
               style={{ alignItems: 'center', justifyContent: 'flex-end' }}  buttonStyle={{ borderRadius: 13, backgroundColor: '#2C5F13', padding: 8, width: '70%', margin: 10, marginTop: 250}} />
            </View>
          </View>
        </Modal>
        <View >
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 150, height: 150, marginTop: 30, alignItems: 'center', justifyContent: 'center' }} />
        </View>

        {this.state.fontLoaded ? (
          <View style={{ textAlign: 'center', alignContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>RECAPITULATIF DE MA DEMANDE</Text>

            <View style={{
              textAlign: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              flex: 1,
              flexDirection: 'row',
              marginTop: 20,
            }}>
              <Image source={this.state.img}
                style={{ marginLeft: 60, marginRight: 60, backgroundColor: "transparent", width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'grey', borderRadius: 7 }} />
            </View>


            <View style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center'
            }}> 
              <Text style={{ fontWeight: "bold", textAlign: 'center', fontSize: 15, alignItems: 'center', justifyContent: 'center', fontFamily: 'openSansRegular' }}>{this.props.route.params.type}</Text>
            </View>


            <View style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'center'

            }}>

              <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 10 }}>Détaillez votre demande (facultative):</Text>
            </View>

            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10
            }}>
              <Input style={{ fontSize: 12, borderColor: 'black', borderWidth: 1, }} inputContainerStyle={{ height: 100, width: "90%", borderColor: 'grey', borderWidth: 1, alignSelf: 'center' }}
                                placeholder="Détails de votre demande"
                                numberOfLines={0}
                                multiline={true}
                                onChangeText={(text) => { this.setState({ desc: text }) }}
                            />
              {/* <Input
                style={{ height: 100, borderColor: 'gray', borderWidth: 1, width: "90%" }}
                onChangeText={(text) => { this.setState({ desc: text }) }}
                placeholder="Détails de votre demande"
                multiline={true}
                numberOfLines={4}
              /> */}
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 20 }}>
              <Button title="VALIDER" onPress={() => this.setModalVisible(!this.state.modalVisible)} buttonStyle={{ borderRadius: 13, backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10 }} />

            </View>
          </View>
          

        ) : null}
        </View>
      </ScrollView>

    )
  }
}


const styles = StyleSheet.create({
  input: {
    //  flex:1,
    //  flexDirection:'column',
    //  borderWidth: 0,
    //  borderRadius: 13,
    //  marginBottom:15,
    //  marginLeft: 50,
    //  marginRight: 50,

    //  fontSize: 15,
    //  textAlign: 'center' ,
    height: 35,
    borderColor: '#2C5F13',
    borderWidth: 1,
    //  justifyContent:"center",
    //  alignItems:'center'
  }
})

function mapStateToProps(state) {
  console.log(state)
  console.log('je recois de mon reducer lid suivant : ', state.userId)

  return { userIdfromStore: state.userId }
}

export default connect(
  mapStateToProps,
  null
)(ConfirmRequest);