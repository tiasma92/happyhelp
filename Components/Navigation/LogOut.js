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
    console.log('je recois de mon reducer lid suivant : ', state.userId)

    return { userIdfromStore: state.userId }
}

function mapDispatchToProps(dispatch) {
    return {
        disconnect: function (id) {
            dispatch({
                type: 'deleteConnect',
                id,
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout);