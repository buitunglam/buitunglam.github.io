import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Icon,Container,Content,Thumbnail} from "native-base";
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
                <Content>
                    <View style={{height:100}}>
                        <View style={{flex:1,flexDirection: "row",justifyContent: "space-between",paddingHorizontal:7, alignItems:"center"}}>
                            <Text>Stories</Text>
                            <View>
                                <Text>Watch All</Text>
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
                                    source={require('../../../assets/avt1.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt1.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt1.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt1.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt1.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt1.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt1.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt1.jpg')}
                                    style={{marginHorizontal: 5,borderColor:"wheat",borderWidth: 2}}
                                />
                                <Thumbnail
                                    source={require('../../../assets/avt1.jpg')}
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
