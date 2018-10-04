import React , {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {memorizedWord,showMeaning} from '../Redux/actionCreater';



class Word extends Component {
    render() {
        const { en, vn, memorized, isShow,id} = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : "none";
        const toggleMemorized = memorized ? 'forgot' : 'memorized';
        // show meaning
        const showMeaningWord = isShow ? vn : '---';
        return (
            <View style={styles.container}>
                <Text style={{textDecorationLine}}>{en}</Text>
                <Text>{showMeaningWord}</Text>
                <View style={styles.Controller}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {this.props.memorizedWord(id)}}
                    >
                        <Text style={styles.textStyle}>{toggleMemorized}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.showMeaning(id)}
                    >
                        <Text style={styles.textStyle}>Show</Text>
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
    }
});

export  default connect(null,{memorizedWord,showMeaning})(Word);