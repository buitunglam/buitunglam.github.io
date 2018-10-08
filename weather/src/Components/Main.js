import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput,KeyboardAvoidingView,ImageBackground} from "react-native";
import  getTemp from '../Api/getTemp';
import {connect} from 'react-redux';
import { startFetch,fetchSuccess,fetchError, fetchDataThunk} from '../Redux/actionCreators';


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

    getCityNameByCity() {
        const {cityName} = this.state;

        // this.props.startFetch();
        // getTemp(cityName)
        //         .then(temp => this.props.fetchSuccess(cityName,temp))
        //         .catch(this.props.fetchError());

        //use redux thunk
        this.props.fetchDataThunk(cityName);
    }

    render() {
        return (
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/bg.jpeg')}
                        style={{width:"100%",height:"100%"}}
                    >
                        <Text style={styles.message}>{this.getMessage()}</Text>
                        <KeyboardAvoidingView style={styles.container} behavior="padding">
                            <TextInput
                                clearButtonMode="always"
                                placeholderTextColor="white"
                                underlineColorAndroid="transparent"
                                style={styles.TextInput}
                                value={this.state.cityName}
                                onChangeText={ (text) => {this.setState({cityName: text})}}
                                placeholder={"Text your city name"}
                            />
                        </KeyboardAvoidingView>
                        <TouchableOpacity
                            style={styles.Button}
                            onPress={() => this.getCityNameByCity()}
                        >
                            <View>
                                <Text style={styles.ButtonText}>Lấy nhiệt độ</Text>
                            </View>

                        </TouchableOpacity>
                    </ImageBackground>
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

export default connect(mapStateToProps,{startFetch,fetchSuccess,fetchError,fetchDataThunk})(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column"
    },
    message:{
        color:'white',
        fontSize:20,
        textAlign: "center",
        alignItems:"center",
        paddingTop:200,
    },
    TextInput:{
        width:300,
        height:50,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor:"gray",
        color: "white",
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    Button:{
        width:100,
        height:30,
        marginBottom:300,
        marginLeft:130,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor: "#455837a8",
        borderRadius: 5,
    },
    ButtonText:{
        color:"white"
    }

});