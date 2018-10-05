import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from "native-base";


export default class ProfileTab extends React.Component {
    static navigationOptions = {
        tabBarIcon:({tintColor}) => (
            <Icon name={"person"} style={{color:tintColor}}/>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>This is Profile tab</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
