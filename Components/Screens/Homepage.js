import React from 'react';
import { Text, View, Image, } from 'react-native';
import {  Button } from 'react-native-elements';
import {connect} from 'react-redux';
import ipAdress from "./ip"


class HomePage extends React.Component{
    constructor(props){
        super()
        this.state = ({
            firstName: "",
        })
    }
componentDidMount() {
    var ctx = this;
    console.log('componentDidMount',ctx.props.userTokenfromStore)

    /* Recover the id from redux */

    fetch(`http://${ipAdress}:3000/profil?token=${ctx.props.userTokenfromStore}`)
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
        <View style = {{
            width:'100%',
        textAlign:'center',
        alignItems: 'center'
       }}>
        
        <View style={{ 
        alignItems: 'center',
         textAlign:'center',
         marginBottom:20,}}>
        <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 250, height: 250, marginTop: 2}}/>
        </View>

        
        <View style={{ alignItems: 'center',}}>

            <Text style={{fontWeight: 'bold', fontSize: 20 ,marginBottom:30,}}>Bienvenue {Name}</Text>
           
            </View>

      <Button title="BESOIN D'AIDE ?" buttonStyle={{borderRadius: 13,backgroundColor: '#2C5F13', marginBottom:20, width:250}} style={{ height: 50, marginTop: '10%' }} onPress= {() => this.props.navigation.navigate("HomeH")} 
    />

<Button title="JE VEUX AIDER" buttonStyle={{borderRadius: 13,backgroundColor: '#139725', width:250}} style={{ height: 50}} onPress= {() => this.props.navigation.navigate("HomeA")} 
    />
    </View>
    
    


    )
}
}

function mapStateToProps(state) {
    console.log(state)
    console.log('je recois de mon reducer le token suivant homepage: ',state.userToken)

    return { userTokenfromStore: state.userToken }
  }
  
  export default connect(
      mapStateToProps,
      null
  )(HomePage);