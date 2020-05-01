import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import ipAdress from "./ip"


const styles = StyleSheet.create({
    infoText: {
        fontWeight: 'bold',
        fontSize: 15,
        margin: 8
    }
});


class Profil extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            phone: "",
            change: false,
        })
    }
    componentDidMount() {
        var ctx = this;
        /* Take from the database my information  */
        fetch(`http://${ipAdress}:3000/profil?id=${ctx.props.userIdfromStore}`)
            .then(function (res, err) {
                return res.json()
            }).then((data) => {
                console.log('RESULTAT DE LERENGISTREMENT EN BD USER --->', data)
                ctx.setState({
                    firstName: data.user.firstName,
                    lastName: data.user.lastName,
                    address: data.user.address,
                    city: data.user.city,
                    phone: data.user.phone,
                })
            })
            .catch((error) => {
                console.log('Request failed in my Sign-In Home request', error)
            });
    }

    changeData() {
        this.setState({ change: !this.state.change })
    }

    confirmData() {
            fetch(`http://${ipAdress}:3000/update_profil`, {
              method: 'POST',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              body: `firstName=${this.state.firstName}&lastName=${this.state.lastName}&telephone=${this.state.phone}&address=${this.state.address}&city=${this.state.city}&id=${this.props.userIdfromStore}`
            }
            ).then(function(res, err){
              return res.json()
            }).then((data)=> {
            
               console.log('RESULTAT DE LERENGISTREMENT EN BD USER --->', data.user)
               
              
            })
            .catch((error)=> {
                console.log('Request failed in my Sign-Up Home request', error)
            });
            this.setState({ change: !this.state.change })
    }

    render() {
        var imgAbde = require("../../assets/images/AbdeVieux.png")
        var imgAvatar = require("../../assets/images/avatar.png")
        var imgMat = require("../../assets/images/Mattias.jpeg")
        var img;
        if (this.state.firstName === "Papy Abde") {
            img = imgAbde;
        } else if (this.state.firstName === "Mattias") {
            img = imgMat;
        } else {
            img = imgAvatar;
        }
        const isChange = this.state.change
        console.log(this.state.phone)
        if (!isChange) {
            return (
                <View>
                    <View style={{ alignItems: 'center', }}>
                        <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 100, height: 100, marginTop: 30 }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>MON PROFIL</Text>
                        <Image source={img} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10, marginTop: 10 }} />
                    </View>

                    <View style={{ justifyContent: "center", flexDirection: "row" }}>
                        <View style={{ alignItems: 'flex-start', marginLeft: 30 }}>
                            <Text style={styles.infoText}>Nom: </Text>
                            <Text style={styles.infoText}>Prenom: </Text>
                            <Text style={styles.infoText}>Adresse: </Text>
                            <Text style={styles.infoText}>Ville: </Text>
                            <Text style={styles.infoText}>Telephone: </Text>
                        </View>
                        <View style={{ marginTop: 1 }}>
                            <Text style={styles.infoText}>{this.state.lastName}</Text>
                            <Text style={styles.infoText}>{this.state.firstName}</Text>
                            <Text style={styles.infoText}>{this.state.address}</Text>
                            <Text style={styles.infoText}>{this.state.city}</Text>
                            <Text style={styles.infoText}>{this.state.phone}</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button title="Modifier Profil" onPress={() => this.changeData()} buttonStyle={{ borderRadius: 13, backgroundColor: '#2C5F13', padding: 10, width: 200, marginTop: 30 }} />
                    </View>

                </View>

            )
        }
        else {
            return (
                <View>
                    <View style={{ alignItems: 'center', }}>
                        <Image source={require('../../assets/images/LogoHappyHelp.png')} style={{ width: 100, height: 100, marginTop: 30 }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>MON PROFIL</Text>
                        <Image source={img} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10, marginTop: 10 }} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                    </View>
                    <View style={{ justifyContent: "center", flexDirection: "row" }}>
                        <View style={{ alignItems: 'flex-start'}}>
                            <Text style={styles.infoText}>Nom: </Text>
                            <Text style={styles.infoText}>Prenom: </Text>
                            <Text style={styles.infoText}>Adresse: </Text>
                            <Text style={styles.infoText}>Ville: </Text>
                            <Text style={styles.infoText}>Telephone: </Text>
                        </View>
                        <View style={{ marginTop: 1 }}>
                            <Input style={{ fontSize: 12, borderColor: 'black', borderWidth: 4 }} inputContainerStyle={{ height: 30, width: 140, borderColor: 'black', borderWidth: 1, marginBottom: '3%', paddingLeft: 10 }}
                                value={this.state.lastName}
                                onChangeText={(text) => { this.setState({ lastName: text }) }}
                            />
                            <Input style={{ fontSize: 12, borderColor: 'black', borderWidth: 4 }} inputContainerStyle={{ height: 30, width: 140, borderColor: 'black', borderWidth: 1, marginBottom: '3%', paddingLeft: 10 }}
                                value={this.state.firstName}
                                onChangeText={(text) => { this.setState({ firstName: text }) }}
                            />
                            <Input style={{ fontSize: 12, borderColor: 'black', borderWidth: 4 }} inputContainerStyle={{ height: 30, width: 140, borderColor: 'black', borderWidth: 1, marginBottom: '3%', paddingLeft: 10 }}
                                value={this.state.address}
                                onChangeText={(text) => { this.setState({ address: text }) }}
                            />
                            <Input style={{ fontSize: 12, borderColor: 'black', borderWidth: 4 }} inputContainerStyle={{ height: 30, width: 140, borderColor: 'black', borderWidth: 1, marginBottom: '3%', paddingLeft: 10 }}
                                value={this.state.city}
                                onChangeText={(text) => { this.setState({ city: text }) }}
                            />
                            <Input style={{ fontSize: 12, borderColor: 'black', borderWidth: 4 }} inputContainerStyle={{ height: 30, width: 140, borderColor: 'black', borderWidth: 1, marginBottom: '3%', paddingLeft: 10 }}
                                value={this.state.phone}
                                onChangeText={(text) => { this.setState({ phone: text }) }}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button title="Confirmer" onPress={() => this.confirmData()} buttonStyle={{ borderRadius: 13, backgroundColor: '#2C5F13', padding: 10, width: 200, marginTop: 30 }} />
                    </View>
                </View>
            )
        }
    }
}

/* From Redux, take back the id of my user */
function mapStateToProps(state) {
    console.log(state)
    console.log('je recois de mon reducer lid suivant : ', state.userId)

    return { userIdfromStore: state.userId }
}

export default connect(
    mapStateToProps,
    null
)(Profil);