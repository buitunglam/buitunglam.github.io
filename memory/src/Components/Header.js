import React , {Component} from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import Word from "./Word";
import Filter from './Filter';

class Header extends Component {

    render() {
        return (
                <View style={styles.header}>
                    <Text/>
                    <Text>MY WORDS</Text>
                    <TouchableOpacity onPress={() => {this.props.dispatch({ type: 'TOGGLE_ADDING'})}}>
                        <Text style={{width:30, height:30}}>+</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

export default connect()(Header);

const styles = StyleSheet.create({
    header:{
        flex:1,
        backgroundColor:'#D9D9D9',
        alignItems: 'center',
        paddingTop: 20
    }
});

