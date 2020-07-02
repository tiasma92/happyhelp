import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import ipAdress from "./ip"
import { TouchableOpacity } from 'react-native-gesture-handler';


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
            hasCameraPermission: null,
            image: ""
        })
    }
    componentDidMount() {
        var ctx = this;
        /* Take from the database my information  */
         fetch(`http://${ipAdress}:3000/profil?token=${ctx.props.userTokenfromStore}`)
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
                    image: data.user.pictureName
                })
            })
            .catch((error) => {
                console.log('Request failed in my Sign-In Home request', error)
            });
    }

    changeData() {
        this.setState({ change: !this.state.change })
    }

    askPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                // this.setState({image: result.uri})
                var data = new FormData();
                data.append('picture', {
                    uri: result.uri,
                    type: 'image/jpeg',
                    name: 'myPicture',
                });
                await fetch(`http://${ipAdress}:3000/upload`, {
                    method: 'POST',
                    body: data
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log("data from cloudinary" + data.data)
                    this.setState({ image: data.data });
                })
                    .catch((error) => {
                        console.log(error)
                    });
            }
        } catch (E) {
            console.log(E);
        }
    };


    confirmData() {
        fetch(`http://${ipAdress}:3000/update_profil`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `firstName=${this.state.firstName}&lastName=${this.state.lastName}&telephone=${this.state.phone}&address=${this.state.address}&city=${this.state.city}&token=${this.props.userTokenfromStore}&image=${this.state.image}`
        }
        ).then(function (res, err) {
            return res.json()
        }).then((data) => {
            console.log('RESULTAT DE LERENGISTREMENT EN BD USER --->', data.user)
        }).catch((error) => {
                console.log('Request failed in my Sign-Up Home request', error)
            });
        this.setState({ change: !this.state.change })
    }

    changePicture = async () => {
        this.askPermission();
        this._pickImage();
    }

    render() {
        var imgAvatar = require("../../assets/images/avatar.png")
        if (this.state.image !== undefined) {
            if (this.state.image.length > 0) {
                var img = { uri: this.state.image }
            } else {
                img = imgAvatar;
            }
        } else {
            img = imgAvatar;
        }
        const isChange = this.state.change
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
                        <TouchableOpacity onPress={() => this.changePicture()}>
                            <Image source={img} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10, marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                    </View>
                    <View style={{ justifyContent: "center", flexDirection: "row" }}>
                        <View style={{ alignItems: 'flex-start' }}>
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
    console.log('je recois de mon reducer lid suivant : ', state.userToken)

    return { userTokenfromStore: state.userToken }
}

export default connect(
    mapStateToProps,
    null
)(Profil);