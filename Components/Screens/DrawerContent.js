import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from "react-native-paper";
import LogOut from "../Navigation/LogOut";

export function DrawerContent(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "#2C5F13" }}>
            <Image
                source={require("../../assets/images/LogoHappyHelp.png")}
                style={{ width: "100%", height: 200, marginTop: 1, borderRadius: 20 }}
            />
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="home-outline" color="white" size={size} />
                        )}
                        inactiveTintColor="white"
                        label="home"
                        onPress={() => {
                            props.navigation.navigate("Home");
                        }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="account-question-outline"
                                color="white"
                                size={size}
                            />
                        )}
                        inactiveTintColor="white"
                        label="Mes aides"
                        onPress={() => {
                            props.navigation.navigate("myhelp");
                        }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="help-circle-outline" color="white" size={size} />
                        )}
                        inactiveTintColor="white"
                        label="Mon historique d'aides"
                        onPress={() => {
                            props.navigation.navigate("historyhelp");
                        }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="account-outline" color="white" size={size} />
                        )}
                        inactiveTintColor="white"
                        label="Profil"
                        onPress={() => {
                            props.navigation.navigate("Profil");
                        }}
                    />
                    <DrawerItem
            icon={({ color, size }) => (
              <Icon name="logout" color="white" size={size} />
            )}
            inactiveTintColor="white"
            label="déconnexion"
            onPress={() => {
              props.navigation.navigate("Deconnexion")
            }}
          />
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    );
}