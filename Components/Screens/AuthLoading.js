import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from '../Navigation/Navigation';
import AuthStackScreen from '../Navigation/Auth';
import MyDrawer from '../Navigation/Navigation';

const Stack = createStackNavigator();

function AuthLoading({ user, saveToken }) {
    console.log(user)
    getData = async () => {
        try {
          const value = await AsyncStorage.getItem("token"); 
            saveToken(value)
            console.log("value from asyncstorage",value);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      getData();
    console.log(user)
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                {user ? (
                <Stack.Screen name="Navigation" component={MyDrawer} />
                ) : (
                <Stack.Screen name="Auth" component={AuthStackScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer >
    )
}

function mapDispatchToProps(dispatch) {
    return {
        saveToken: function (token) {
            dispatch({
                type: 'connect',
                token,
            })
        }
    }
}

const mapStateToProps = state => ({
    user: state.userToken,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthLoading);