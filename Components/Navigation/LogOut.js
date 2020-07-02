import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';


function Logout({ navigation, disconnect, removeToken }) {
    this.removeToken()
    disconnect();
    return null
}

removeToken = async () => {
    try {
        await AsyncStorage.removeItem("token");
        return true;
    }
    catch(exception) {
        return false;
    }
}

function mapStateToProps(state) {
    console.log(state)
    console.log('je recois de mon reducer le token suivant : ', state.userToken)

    return { userTokenfromStore: state.userToken }
}

function mapDispatchToProps(dispatch) {
    return {
        disconnect: function (token) {
            dispatch({
                type: 'deleteConnect',
                token,
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout);