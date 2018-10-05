import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from "native-base";

export default class SearchTab extends React.Component {

    static navigationOptions = {
        tabBarIcon:({tintColor}) => (
            <Icon name={"md-search"} style={{color:tintColor}}/>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>This is Search tab</Text>
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
