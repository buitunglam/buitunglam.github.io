import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {showMemorized,showAll,showNeedPractice} from '../Redux/actionCreater';


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
                <TouchableOpacity onPress={() => this.props.showAll()}>
                    <Text style={this.getTextStyle("SHOW_ALL")}>Show all</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.showMemorized()}>
                    <Text style={this.getTextStyle("MEMORIZED")}>Show memorized</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.showNeedPractice()}>
                    <Text style={this.getTextStyle("NEED_PRACTICE")}>Need practice</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {myFilterStatus: state.filterStatus};
}

export default connect(mapStateToProps,{showMemorized,showAll,showNeedPractice})(Filter);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f27d3e',
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    textColor:{
    color: "white"
}
});

