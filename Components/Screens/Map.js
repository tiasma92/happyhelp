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
      currentLongitude:0,
      allRequest: [],
    }
  }

  async componentDidMount() {
    var ctx = this;
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf'),
      'openSansRegular': require('../../assets/fonts/OpenSans-Regular.ttf')
    });
    ctx._getLocationAsync();
ctx.setState({ fontLoaded: true });

fetch(`http://10.2.4.23:3000/request`)
.then(function(res, err){
  return res.json()
}).then((data)=> {
  console.log('RESULTAT DE Recuperation EN BD Request sur la map--->', data)
  ctx.setState({
    allRequest: data.request,
  })
  console.log(ctx.state.allRequest)
})
.catch((error)=> {
    console.log('Request failed in my Map Home request', error)
});
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
  console.log(this.state.allRequest)
  var markerList = [];
  markerallRequest = [...this.state.allRequest];
  markerList = markerallRequest.map((data,i) =>  
  <Marker
                draggable 
                opacity={0.5}
                pinColor="blue"
                title="Cliquez ici"
                coordinate={{latitude: data.latitude, longitude: data.longitude}}
              >   
              <Callout>
              <View >
                <Text>
              <Image source={require('../../assets/images/tool.png')} resizeMode="cover"
              style={{  width: 100, height: 100, alignItems:'center', borderWidth: 1, borderColor:'grey', borderRadius: 7 }}/>
              </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign:'center', fontFamily:'openSansRegular' }}>{data.category}</Text>
                <Text style={{ fontWeight: 'normal', fontSize: 13, textAlign:'center', fontFamily:'openSansRegular' }}>{data.description}</Text>
                <Button title="J'aide" fontSize="30" onPress={() => this.props.navigation.navigate("Home")} buttonStyle={{ backgroundColor:"#2C5F13", alignItems:'center', justifyContent: 'center', height:12}} />
              </View>
            </Callout></Marker>)

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

       

            {markerList}

            
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