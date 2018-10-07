import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Icon,Container,Content,Thumbnail, Body,Right,Left,Header} from "native-base";
import CardComponent from "../Card";

export default class HomeTab extends React.Component {

    static navigationOptions = {
      tabBarIcon:({tintColor}) => (
          <Icon name={"md-home"} style={{color:tintColor}}/>
      )
    };


    render() {
        return (
            <Container>
                <Header style={{backgroundColor:"white",marginTop: 15}}>
                    <Left style={{paddingLeft:10}}><Icon name={"ios-camera-outline"}/></Left>
                    <Body><Text style={{fontWeight: "bold"}}>Outstagram</Text></Body>
                    <Right style={{paddingRight: 10}}><Icon name={"ios-send-outline"}/></Right>
                </Header>
                <View style={{width:"100%",height:1,backgroundColor:"black"}}/>
                <Content>
                    <View style={{height:100}}>
                        <View style={{flex:1,flexDirection: "row",justifyContent: "space-between",paddingHorizontal:7, alignItems:"center"}}>
                            <Text>Stories</Text>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Icon name={"md-play"} style={{fontSize: 14}}/>
                                <Text>Watch all</Text>
                            </View>
                        </View>
                        <View style={{flex:3}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: "center",
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}
                            >
                                <Thumbnail
                                    source={require('../../../assets/avt1.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt2.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt3.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt4.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt5.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt1.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt2.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt3.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt4.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt5.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent likes={"201 Likes"} imageSource={"1"}/>
                    <CardComponent likes={"202 Likes"} imageSource={"2"}/>
                    <CardComponent likes={"203 Likes"} imageSource={"3"}/>
                    <CardComponent likes={"204 Likes"} imageSource={"4"}/>
                    <CardComponent likes={"205 Likes"} imageSource={"5"}/>
                    <CardComponent likes={"205 Likes"} imageSource={"6"}/>
                    <CardComponent likes={"205 Likes"} imageSource={"7"}/>
                    <CardComponent likes={"205 Likes"} imageSource={"8"}/>
                </Content>
            </Container>


        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
