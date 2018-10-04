import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {addWord} from '../Redux/actionCreater';
import {toggleIsAdding} from '../Redux/actionCreater';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: ''
        };
    }

    onAdd = () => {
        const {en, vn} = this.state;
        this.props.addWord(en,vn);
        this.props.toggleIsAdding();
    };

    render() {
        return (
            <View>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        value={this.state.en}
                        placeholder={"English"}
                        onChangeText={text => {
                            this.setState({en: text})
                        }}
                    />
                    <TextInput style={styles.input}
                               value={this.state.vn}
                               placeholder={"Meaning"}
                               onChangeText={text => {
                                   this.setState({vn: text})
                               }}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.textAdd} onPress={this.onAdd}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, {addWord,toggleIsAdding})(Form);

const styles = StyleSheet.create({
    inputGroup: {
        alignItems: "center"
    },
    input: {
        width: 350,
        height: 30,
    },
    textAdd: {
        textAlign: "center"
    }
});