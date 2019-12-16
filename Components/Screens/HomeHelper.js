import React from 'react';
import { Text, View, Image, } from 'react-native';
import {  Button } from 'react-native-elements';
import {connect} from 'react-redux';


class HomeHelper extends React.Component{
    constructor(props){
        super()
        this.state = ({
            firstName: "",
        })
    }
componentDidMount() {
    var ctx = this;

    fetch(`http://10.2.4.23:3000/profil?id=${ctx.props.userIdfromStore}`)

    .then(function(res, err){
      return res.json()
    }).then((data)=> {
       console.log('RESULTAT DE LERENGISTREMENT EN BD USER --->', data)
       ctx.setState({
           firstName: data.user.firstName
       }, () => console.log('state',ctx.state.firstName))
    })
    .catch((error)=> {
        console.log('Request failed in my Sign-In Home request', error)
    });
}


render(){
    var Name= this.state.firstName;
    return(
        <View>
        <View style={{ alignItems: 'center',}}>
            <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 200, height: 200}}/>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Bienvenue {Name}</Text>
           
            </View>

        <View  style={{ marginTop: 50, alignItems: 'center'}}> 
            
        <Button title="QUI A BESOIN D'AIDE?" onPress={()=>this.props.navigation.navigate('map')}  buttonStyle={{borderRadius: 13, backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10}}/>
        <Button title="  MES AIDES  " onPress={()=>this.props.navigation.navigate('myhelp')}  buttonStyle={{borderRadius: 13, backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10}}/>
            <Button title="  MON PROFIL  " onPress={()=>this.props.navigation.navigate('profil')}  buttonStyle={{borderRadius: 13, backgroundColor: '#2C5F13', padding: 10, width: 250, margin: 10}}/>
            
        </View>


        </View>


    )
}
}

function mapStateToProps(state) {
    console.log(state)
    console.log('je recois de mon reducer lid suivant homepage: ',state.userId)

    return { userIdfromStore: state.userId }
  }
  
  export default connect(
      mapStateToProps,
      null
  )(HomeHelper);