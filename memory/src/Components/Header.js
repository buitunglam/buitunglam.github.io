import React , {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {toggleIsAdding} from '../Redux/actionCreater';


class Header extends Component {
    render() {
        return (
                <View style={styles.header}>
                    <Text/>
                    <Text>MY WORDS</Text>
                    <TouchableOpacity onPress={() => {this.props.toggleIsAdding()}}>
                        <Text style={{width:30, height:30}}>+</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}
// map to actions
export default connect(null, {toggleIsAdding})(Header);

const styles = StyleSheet.create({
    header:{
        flex:1,
        backgroundColor:'#D9D9D9',
        alignItems: 'center',
        paddingTop: 20
    }
});

