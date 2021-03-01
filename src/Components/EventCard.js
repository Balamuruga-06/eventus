import React from 'react'
import {Text,View,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';
import { Card, Title, Paragraph,Button } from 'react-native-paper';
const EventCard = (props) => {
    return (
        <View style={style.container}>
          
          <Card style={style.cards}>
              <Card.Content>
                <Title>props.title</Title>
                <Paragraph>props.desc</Paragraph>
                <Paragraph>props.date</Paragraph>
              </Card.Content>
              <Card.Actions style={style.butons}>
                <Button><Entypo name="heart" size={28} color="red" /></Button>
                <Button><Entypo name="share" size={28} color="black" /></Button>
              </Card.Actions>
          </Card>
        </View>
      );
}

const style = StyleSheet.create({
    container : {
      marginTop:50
    },
    cards : {
      margin:7
    },
    butons:{
      marginLeft:250
    }
  });

  export default EventCard;