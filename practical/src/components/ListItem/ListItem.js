import React from 'react';
import { View,Button, Text, StyleSheet,TouchableOpacity } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Text >{props.placeName}</Text>
            <Button style={{backgroundColor:'red'}} onPress={() => {alert("abc")}} title={"Delete"}/>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: 300,
        marginTop:5,
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        justifyContent: "space-between"

    },
    removeButton: {
        backgroundColor: "red",
        color:"white",
        width:30,
        height:30
    }
});

export default ListItem;