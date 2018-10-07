import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
import {Icon,Container,Content,Thumbnail, Body,Right,Left,Header, Button} from "native-base";
import CardComponent from "../Card";


const albums = [
    require('../../../assets/bg.jpeg'),
    require('../../../assets/bg1.jpg'),
    require('../../../assets/bg2.jpg'),
    require('../../../assets/bg3.jpg'),
    require('../../../assets/bg4.jpg'),
    require('../../../assets/bg5.jpg'),
    require('../../../assets/bg6.jpg'),
    require('../../../assets/bg7.jpg'),
    require('../../../assets/bg8.jpg'),
];

const {width,height} = Dimensions.get('window');

export default class ProfileTab extends React.Component {
    static navigationOptions = {
        tabBarIcon:({tintColor}) => (
            <Icon name={"person"} style={{color:tintColor}}/>
        )
    };

    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked = (index) => {
      this.setState({
          activeIndex: index
      });
    };

    renderSectionOne = () => {
        return albums.map((item,index) => {
            return (
                <View key={index}
                      style={[{width:(width)/3}, {height:(width)/3},
                              {marginBottom:2},
                              index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft:0}
                ]}>
                    <Image style={{flex:1,width:undefined, height:undefined}} source={item}/>
                </View>
            );
        });
    };

    renderSection = () => {
      if(this.state.activeIndex === 0) {
          return(
              <View style={{flexDirection:"row", flexWrap: "wrap"}}>
                  {this.renderSectionOne()}
              </View>
          );
      }
      else if(this.state.activeIndex === 1){
          return(
              <View>
                  <CardComponent likes={"205 Likes"} imageSource={"2"}/>
                  <CardComponent likes={"205 Likes"} imageSource={"3"}/>
                  <CardComponent likes={"205 Likes"} imageSource={"5"}/>
                  <CardComponent likes={"205 Likes"} imageSource={"6"}/>
                  <CardComponent likes={"205 Likes"} imageSource={"8"}/>
                  <CardComponent likes={"205 Likes"} imageSource={"4"}/>
              </View>
          );
      }
    };

    render() {
        return (
            <Container style={{flex:1,backgroundColor:"white"}}>
                <Header style={{backgroundColor:"white",marginTop: 15}}>
                    <Left style={{paddingLeft:10}}><Icon name={"md-person-add"}/></Left>
                    <Body><Text style={{fontWeight: "bold"}}>Outstagram</Text></Body>
                    <Right style={{paddingRight: 10}}><Icon name={"ios-reverse-camera-outline"}/></Right>
                </Header>
                <Content>
                    <View style={{flexDirection: "row", paddingTop:10}}>
                        <View style={{flex:1, alignItems:"center"}}>
                            <Thumbnail source={require('../../../assets/avt1.jpg')}/>
                        </View>
                        <View style={{flex:3}}>
                            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10}}>
                                <View style={{alignItems: "center"}}>
                                    <Text>20</Text>
                                    <Text style={{fontSize:10,color:"grey"}}>Post</Text>
                                </View>

                                <View style={{alignItems: "center"}}>
                                    <Text>202</Text>
                                    <Text style={{fontSize:10,color:"grey"}}>followers</Text>
                                </View>

                                <View style={{alignItems: "center"}}>
                                    <Text>302</Text>
                                    <Text style={{fontSize:10,color:"grey"}}>following</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:"row"}}>
                                <Button border  style={{flex:3,marginLeft:10,justifyContent:"center",height:30, backgroundColor:"white"}}>
                                    <Text>Edit profile</Text>
                                </Button>
                                <Button border style={{flex:1,marginRight:10,justifyContent:"center",marginLeft:5,height:30,backgroundColor:"white" }}>
                                    <Icon name={"md-settings"} style={{color:"black"}}/>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingBottom:10,paddingHorizontal: 10,paddingTop:15}}>
                        <Text>Ngộ Không</Text>
                        <Text>Developer | traveler | Designer</Text>
                        <Text>WWW.WuKongImmortal.com</Text>
                    </View>

                    <View>
                        <View style={{flexDirection:"row",justifyContent:"space-around", borderTopWidth: 1, borderTopColor:"#eae5e5"}}>
                            <Button transparent
                                    onPress={() => this.segmentClicked(0)}
                                    active={this.state.activeIndex === 0}
                            >
                                <Icon name={"ios-apps-outline"} style={[this.state.activeIndex === 0 ? {} : {color:"grey"}]}/>
                            </Button>
                            <Button transparent
                                    onPress={() => this.segmentClicked(1)}
                                    active={this.state.activeIndex === 1}>
                                <Icon name={"ios-list-outline"} style={[this.state.activeIndex === 1 ? {} : {color:"grey"}]}/>
                            </Button>
                            <Button transparent
                                    onPress={() => this.segmentClicked(2)}
                                    active={this.state.activeIndex === 2}
                            >
                                <Icon name={"ios-people-outline"} style={[this.state.activeIndex === 2 ? {} : {color:"grey"}]}/>
                            </Button>
                            <Button transparent
                                    onPress={() => this.segmentClicked(3)}
                                    active={this.state.activeIndex === 3}>
                                <Icon name={"ios-bookmark-outline"} style={[this.state.activeIndex === 3 ? {} : {color:"grey"}]}/>
                            </Button>
                        </View>
                    </View>

                    {this.renderSection()}


                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
