import React from 'react';
import {StyleSheet, Platform, StatusBar, Text} from 'react-native';
//
import {Icon} from "native-base";
import { createMaterialTopTabNavigator} from "react-navigation";
//
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import HomeTab from "./AppTabNavigator/HomeTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import SearchTab from "./AppTabNavigator/SearchTab";

export default class Main extends React.Component {

    static navigationOptions = {
        headerLeft: <Icon
            name={"ios-camera-outline"}
            style={{paddingLeft:10}}
        />,
        title:"Outstagram",
        headerRight: <Icon
            name={"ios-send-outline"}
            style={{paddingRight:10}} />
    };

    render() {
        return (
            <AppTabNavigator/>
        );
    }
};

const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition:"bottom",
    tabBarOptions: {
        style:{
            ...Platform.select({
                android: {
                    backgroundColor:"white"
                },
            })
        },
        activeTintColor:"#000",
        inactiveTintColor:"#d1cece",
        showLabel:false,
        showIcon:true,
        indicatorStyle:{
            backgroundColor: "#000"
        }
    }
});


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

