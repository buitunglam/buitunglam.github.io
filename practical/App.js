import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput'

export default class App extends Component {
    state = {
        placeName: "",
        places: []
    };

    placeAddedHandler = (placeName) => {
        this.setState(prevState => {
            return {
                places: prevState.places.concat(placeName)
            };
        });
    };

    placeDeleteHandler = index => {
      this.setState(prevState => {
          return {
              places: prevState.places.filter((place,i) => {
                  return i !== index;
              })
          }
      })
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList places={this.state.places} onDeleteItem={this.placeDeleteHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    }
});
