import React, { useContext, useState, useEffect } from 'react';
import {Text,StyleSheet,View,ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import { Card, Title, Paragraph,Button } from 'react-native-paper';
import {EventContext} from '../context/EventContext'

const WishlistScreen = ({navigation}) => {
    const {wishDetails,getWish,delewish} = useContext(EventContext);    
    const [wish,setWish] = useState([]);

    const deletewish = itemid => {
        delewish(itemid)    
        const deleaf = wish.filter((item) => {
          return itemid !== item.id
        })  
        setWish(deleaf)                         
    }
    
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        getWish()
        setTimeout(() => {
          setWish(wishDetails)
        }, 1000)
        console.log('wish screen mounted');        
      })
      
      return unsubscribe
    },[navigation,wish, wishDetails])
    
    return (
        <ScrollView style={style.container}>
            <Text>WIsh</Text>
          {wish.map((item) => {
            return(
              <Card style={style.cards} key={item.title}>
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
                <Paragraph>{item.date}</Paragraph>
              </Card.Content>
              <Card.Actions style={style.butons}>
                <Button onPress={()=> {  deletewish(item.id)
                  }}><Entypo name="heart" size={28} color="red" /></Button>
                <Button><Entypo name="share" size={28} color="black" /></Button>
              </Card.Actions>
          </Card>
            )
          })}
        
      </ScrollView>
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

  export default WishlistScreen;