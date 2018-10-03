import React , {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

class Word extends Component {

    memorizedWord() {
        this.props.dispatch({
            type: "TOGGLE_MEMORIZED",
            id: this.props.myWord.id
        });
    }

    showMeaning() {
        this.dispatch({
            type:"TOGGLE_SHOW",
            id: this.props.myWord.id
        });
    }


    render() {
        const { en, vn, memorized, isShow} = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : "none";
        const toggleMemorized = memorized ? 'forgot' : 'memorized';
        // show meaning
        // const showMeaningWord = isShow ? 'showMeaning' : 'none';
        const toggleShowMeaning = isShow ? 'hide' : 'show';
        return (
            <View style={styles.container}>
                <Text style={{textDecorationLine}}>{en}</Text>
                { isShow ? <Text>{vn}</Text> : null}
                <View style={styles.Controller}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.memorizedWord.bind(this)}
                    >
                        <Text style={styles.textStyle}>{toggleMemorized}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onpress={this.showMeaning.bind(this)}
                    >
                        <Text style={styles.textStyle}>{toggleShowMeaning}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4286f4',
        padding:10,
        margin:10,
    },
    Controller: {
     flexDirection: "column",
     justifyContent: "flex-end",
    },
    button:{
        backgroundColor: "gray",
        marginBottom: 10,
        marginTop:10,
        width:90,
        height:20,
    },
    textStyle:{
        textAlign: "center"
    },
    showMeaning:{
        display:"none"
    }

});

export  default connect()(Word);