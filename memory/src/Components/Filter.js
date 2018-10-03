import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Filter extends Component {
    getTextStyle(statusName){
        const {myFilterStatus} = this.props;
        if (statusName === myFilterStatus) return {color: "yellow", fontWeight: "bold"};
        return styles.textColor;
    }

    setFilterStatus(actionType) {
        this.props.dispatch({type: actionType});
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {this.setFilterStatus('FILTER_SHOW_ALL')}}>
                    <Text style={this.getTextStyle("SHOW_ALL")}>Show all</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setFilterStatus('FILTER_MEMORIZED')}}>
                    <Text style={this.getTextStyle("MEMORIZED")}>Show memorized</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setFilterStatus('FILTER_NEED_PRACTICE')}}>
                    <Text style={this.getTextStyle("NEED_PRACTICE")}>Need practice</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {myFilterStatus: state.filterStatus};
}

export default connect(mapStateToProps)(Filter);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f27d3e',
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white"
    },
    textColor:{
    color: "white"
}
});

