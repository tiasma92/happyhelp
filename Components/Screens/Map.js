import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import MapView, {Marker} from 'react-native-maps'; 
import { Button, Card, Icon  } from 'react-native-elements';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as Font from 'expo-font';



class Map extends React.Component {

  constructor () {
    super();
    this.state = {
      fontLoaded: false,
      currentLatitude:0,
      currentLongitude:0
      
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
      'openSansRegular': require('../../assets/fonts/OpenSans-Regular.ttf')
    });
    this._getLocationAsync();
this.setState({ fontLoaded: true });
  }


  _getLocationAsync = async () => {
    var { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    
   Location.watchPositionAsync({distanceInterval: 5}, 
    (location) => {
      this.setState({
        currentLatitude:this.state.currentLongitude,
        currentLongitude:this.state.currentlongitude });

      })
   
    }
   




render(){
  console.log('loaded :',this.state.fontLoaded)
  return(
    
      
    <ScrollView>
<View style={{alignItems:'center'}}>
<Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 100, height: 100, marginTop: 30, alignItems:'center', justifyContent: 'center' }}/>
</View>

{ this.state.fontLoaded? (
   <View style={{textAlign: 'center', alignContent:'center'}}>
    <Text style={{fontWeight: 'bold', fontFamily: 'openSansRegular', fontSize: 18, textAlign:'center' }}>ILS ONT BESOIN DE VOUS</Text>

    <Text style={{fontFamily: 'openSansRegular', fontWeight: 'normal', fontSize: 15, textAlign:'center' }}>Cliquez sur le picto pour voir la demande</Text>
  
      <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        
      }}>

<View style={styles.container}>
        <MapView style={styles.mapStyle}
        initialRegion={{
          latitude: 48.858370,
          longitude: 2.294481,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} >

<Marker
    draggable 
    opacity={0.5}
    pinColor="red"
    title="Je suis ici"
    coordinate={{latitude: this.state.currentLatitude, longitude: this.state.currentLongitude}}
  />
  </MapView>
      </View>

      {/* <Card
        title='yy'
        image={require('./assets/images/tool.png')}>
        <Text style={{marginBottom: 10}}>
          Ma demande: Bricolage
        </Text>
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VALIDER' />
      </Card> */}

        </View>


    <View style={{alignItems:'center', justifyContent:'center', textAlign:'center', marginTop:20}}>
    <Button title="RETOUR" onPress={() => console.log('pressed retour')} buttonStyle={{ backgroundColor:"#2C5F13", alignItems:'center', textAlign:'center', justifyContent: 'center'}}/>
    </View>

</View> 


) : null}
 
 
 
 </ScrollView>
 
  )
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
