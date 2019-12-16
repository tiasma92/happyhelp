import React from 'react';
import { Text, View, Image,TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {  Button } from 'react-native-elements';
import {connect} from 'react-redux'; 



 class HelperConf extends React.Component {
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
     })
  })
  .catch((error)=> {
      console.log('Request failed in my Sign-In Home request', error)
  });
}


render(){
  var Name= this.state.firstName;

    
  return (
    <View style = {{
    alignItems: 'center'
   }}>

    <View style={{ 
    alignItems: 'center',
     textAlign:'center',
     marginBottom:30,}}>
    <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 200, height: 200, marginTop: 2}}/>
    </View>

       <View style={{ alignItems: 'center', textAlign:'center'}}>
          <Image source={require('../../assets/images/icons8-content-100.png')} style={{marginBottom:20,marginTop:10, width: 100, height: 100}}/>
               
        </View>


    <View style={{}}>
    <Text style={{
        marginBottom:20,
        
        fontSize: 20,
        color:'#000000',
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center'}}>
  Merci {Name} pour ton aide. Martine va te contacter
    </Text>
    </View>


    <TouchableOpacity
           style = {styles.submitButton}
           onPress={()=>this.props.navigation.navigate('Home')
           }>
           <Text style = {styles.submitButtonText}> RETOUR AU MENU </Text>
        </TouchableOpacity>
 </View>
  );
}
}



const styles = StyleSheet.create({
    container: {
      
      width:'100%',
    textAlign:'center'
    
    },
    input: {
       
      
      flex:1,
           flexDirection:'column',
           borderWidth: 0,
           borderRadius: 5,
           marginBottom:15,
           marginLeft: 50,
           marginRight: 50,
          
           fontSize: 15,
           textAlign: 'center' ,
           height: 25,
           borderColor: '#2C5F13',
           borderWidth: 1,
           justifyContent:"center",
           alignItems:'center'
        },
        submitButton: {
           backgroundColor: '#2C5F13',
           padding: 10,
           marginTop:100,
           height: 45,
           borderWidth: 0,
           borderRadius: 13,
           marginBottom:20,
           marginLeft: 50,
           marginRight: 50,
           marginTop:30,
           
           
           justifyContent:"center",
            textAlign:"center",
        },
        submitButtonText:{
            justifyContent:"center",
            textAlign:"center",
           color: 'white'
        }
     })

     function mapDispatchToProps(dispatch) {
      return {
        saveId: function(id) {
            dispatch( {type: 'connect',
             id,
            } );
        }
      }
    }
    
    function mapStateToProps(state) {
      console.log(state)
      console.log('je recois de mon reducer lid suivant : ',state.userId)
  
      return { userIdfromStore: state.userId }
    }
    
    export default connect(
        mapStateToProps,
        null
    )(HelperConf);