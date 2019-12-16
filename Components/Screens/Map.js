import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps'; 
import { Button} from 'react-native-elements';
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
        currentLatitude:location.coords.latitude,
        currentLongitude:location.coords.longitude });

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
    <Text style={{fontWeight: 'bold', fontSize: 18, textAlign:'center', fontFamily:'openSansRegular' }}>ILS ONT BESOIN DE VOUS</Text>

    <Text style={{ fontWeight: 'normal', fontSize: 15, textAlign:'center', fontFamily:'openSansRegular' }}>Cliquez sur le picto pour voir la demande</Text>
  
      <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        
      }}>

      <View style={styles.container}>
      <Button title="RETOUR" onPress={() => this.props.navigation.navigate('Home')} buttonStyle={{borderRadius: 13, backgroundColor:"#2C5F13", alignItems:'center', justifyContent: 'center'}}/>


        <MapView style={styles.mapStyle}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
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

       

            <Marker
                draggable 
                opacity={0.5}
                pinColor="blue"
                title="Cliquez ici"
                coordinate={{latitude: 48.866667, longitude: 2.333333}}
              >   
              <Callout onPress={()=>this.props.navigation.navigate('helper')}>
              <View style={{alignItems:'center'}}>
                
                  <View style={{  width: 50, height: 50, alignItems:'center', borderWidth: 1, borderColor:'grey', borderRadius: 7 }}>
              <Image source={require('../../assets/images/tool.png')} resizeMode="cover" 
             />
              </View>
              
                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign:'center', fontFamily:'openSansRegular' }}>Bricolage</Text>
                <Text style={{ fontWeight: 'normal', fontSize: 13, textAlign:'center', fontFamily:'openSansRegular' }}>Réparation de meuble</Text>
                <Button  title="J'aide" fontSize="30"  buttonStyle={{ backgroundColor:"#2C5F13", alignItems:'center', justifyContent: 'center', height:12}} />
              </View>
            </Callout></Marker>


            <Marker
                draggable 
                opacity={0.5}
                pinColor="blue"
                title="Cliquez ici"
                coordinate={{latitude: 48.2296, longitude: -69.8006}}
              >   
              <Callout>
              <View >
                <Text>
              <Image source={require('../../assets/images/tool.png')} resizeMode="cover"
              style={{  width: 100, height: 100, alignItems:'center', borderWidth: 1, borderColor:'grey', borderRadius: 7 }}/>
              </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign:'center', fontFamily:'openSansRegular' }}>Bricolage</Text>
                <Text style={{ fontWeight: 'normal', fontSize: 13, textAlign:'center', fontFamily:'openSansRegular' }}>Réparation de meuble</Text>
                <Button title="J'aide" fontSize="30" onPress={() => console.log('pressed retour')} buttonStyle={{ backgroundColor:"#2C5F13", alignItems:'center', justifyContent: 'center', height:12}} />
              </View>
            </Callout></Marker>
            
        </MapView>
      

      </View>
   
     

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