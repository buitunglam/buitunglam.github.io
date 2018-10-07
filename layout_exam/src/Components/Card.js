import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Icon, Card, Right, Left, CardItem, Thumbnail, Body, Button} from "native-base";

export default class CardComponent extends React.Component {

    render() {
        const images = {
            backgroundImage:{
                "1":require("../../assets/bg.jpeg"),
                "2":require("../../assets/bg1.jpg"),
                "3":require("../../assets/bg2.jpg"),
                "4":require("../../assets/bg3.jpg"),
                "5":require("../../assets/bg4.jpg"),
                "6":require("../../assets/bg6.jpg"),
                "7":require("../../assets/bg7.jpg"),
                "8":require("../../assets/bg8.jpg")

            },
            // avatar:{
            //     "1":require("../../assets/avt1.jpg"),
            //     "2":require("../../assets/avt2.jpg"),
            //     "3":require("../../assets/avt3.jpg"),
            //     "4":require("../../assets/avt4.jpg"),
            //     "5":require("../../assets/avt5.jpg"),
            // }
        };
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../../assets/avt1.jpg')}/>
                        <Body>
                            <Text>Ngộ Không</Text>
                            <Text>Otc 05, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images.backgroundImage[this.props.imageSource]} style={{ width:null, height:200, flex: 1}}/>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button style={styles.buttonIcon}>
                            <Icon name={"ios-heart-outline"} style={{color:"black"}}/>
                        </Button>
                        <Button style={styles.buttonIcon}>
                            <Icon name={"ios-chatbubbles-outline"} style={{color:"black"}}/>
                        </Button>
                        <Button style={styles.buttonIcon}>
                            <Icon name={"ios-send-outline"} style={{color:"black"}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height:20}}>
                    <Text>{this.props.likes}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus ad aliquam esse est eum fugit id molestias nam nisi non numquam obcaecati odio quae recusandae repudiandae, similique soluta vel.</Text>
                    </Body>
                </CardItem>
            </Card>
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
    buttonIcon:{
        backgroundColor: "white",
    }
});
