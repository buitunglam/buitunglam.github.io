import React , {Component} from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import Word from "./Word";
import Filter from './Filter';
import Header from './Header';
import Form from "./Form";
class Main extends Component {

    getMainList(){
        const {myFilter,myWords} = this.props;
        if (myFilter === "MEMORIZED") return myWords.filter(item => item.memorized);
        if (myFilter === "NEED_PRACTICE") return myWords.filter(item => !item.memorized);
        return myWords;
    }

    render() {
        return (
            <View style={{backgroundColor:'yellow', flex:1,alignSelf: "stretch"}}>
                <Header/>
                <View style={{flex:10}}>
                    {this.props.myIsAdding ? <Form/> : null}
                    <FlatList
                        data={this.getMainList()}
                        renderItem={ ( {item}) => <Word myWord={item}/>}
                        keyExtractor={item => item.id.toString()}
                     />
                </View>
                <Filter />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});


function mapStateToProps (state) {
    return {
      myFilter: state.filterStatus,
      myWords: state.arrWord,
      myIsAdding: state.isAdding
    };
}

export default connect(mapStateToProps)(Main);