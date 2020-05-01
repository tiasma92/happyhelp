import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from '../Navigation/Navigation';
import AuthStackScreen from '../Navigation/Auth';
import MyDrawer from '../Navigation/Navigation';

const Stack = createStackNavigator();

function AuthLoading({ user, saveId }) {
    // const [userToken, setUserToken] = useState(null);

    // const onChangeToken = value => {
    //     setUserToken(value);
    // }

    // useEffect(() => {
    //     if (user.token) {
    //         console.log('user token', user.token);
    //         onChangeToken(user.token);
    //     }
    // }, [user.token]);

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem("token"); 
            saveId(value)
            console.log("value from asyncstorage",value);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      getData();

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
        saveId: function (id) {
            dispatch({
                type: 'connect',
                id,
            })
        }
    }
}


const mapStateToProps = state => ({
    user: state.userId,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthLoading);