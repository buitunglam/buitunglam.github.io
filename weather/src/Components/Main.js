import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import  getTemp from '../Api/getTemp';
import {connect} from 'react-redux';
import { startFetch,fetchSuccess,fetchError} from '../Redux/actionCreators';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          cityName: ''
        };
    }

    // get message
    getMessage() {
        const {cityName,temp,error,isLoading} = this.props;
        if (!cityName) return "Vui lòng nhập tên thành phố của bạn";
        if (isLoading) return "...Loading";
        if (error) return 'Vui lòng thử lại';
        return `Nhiệt độ hiện tại ở ${cityName} là: ${temp}oC`;
    }

    getCityNameById() {
        this.props.startFetch();
        const {cityName} = this.state;
        getTemp(cityName)
                .then(temp => this.props.fetchSuccess(cityName,temp))
                .catch(this.props.fetchError());
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>{this.getMessage()}</Text>
                <TextInput
                    style={styles.TextInput}
                    value={this.state.cityName}
                    onChangeText={ (text) => {this.setState({cityName: text})}}
                    placeholder={"Text your city name"}
                />
                <TouchableOpacity style={styles.Button}
                                  onPress={() => this.getCityNameById()}
                >
                    <Text style={styles.ButtonText}>Lấy nhiệt độ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.cityName,
        temp: state.temp,
        error: state.error ,
        isLoading:state.isLoading
    }
}

export default connect(mapStateToProps,{startFetch,fetchSuccess,fetchError})(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message:{
        color:'white',
        fontSize:30,
    },
    Button: {
        backgroundColor: "gray",
        padding:10,
        margin:10
    },
    ButtonText: {
        color:"white"
    },
    TextInput:{
        height:50,
        width:300,
        marginTop:70,
        marginBottom:10,
        color:"wheat",
        backgroundColor:"#a79eb1d6",
    }
});