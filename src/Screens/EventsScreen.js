import React, { useContext, useState, useEffect } from 'react';
import {Text,StyleSheet,View,ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import { Card, Title, Paragraph,Button,Searchbar } from 'react-native-paper';
import {EventContext} from '../context/EventContext'

const EventsScreen = props => {
    const baseURL = "https://api.predicthq.com/v1/events/"
    var navigation = props.navigation;
    const {name,getEvents,EventDetails,addWish} = useContext(EventContext);
    console.log(name)
    const Events = []

    const [EventCard,setEventCard] = useState([]);

    const [Details,setDetails] = useState([]);
    // const [dummy,setDummy] = useState(0)
    
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);


    useEffect(() => {



      const unsubscribe = navigation.addListener('focus', () => {        
          
          setDetails(EventDetails)
          console.log('event screen mounted');
      })
      
      return unsubscribe
          
  }, [navigation, Details, EventDetails])


    return (
      <View >

          <View style={style.filter}>
          <Searchbar style={style.cards}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          {/* <Button onPress={()=>{
            getEvents()
            setTimeout(() => {
              setDummy(dummy+1)
            }, 2000)
          }}><Entypo name="share" size={28} color="black" /></Button> */}
          </View>
        <ScrollView style={style.container}>
          
          {Details.filter((item) => {
            if(searchQuery==""){
              return item
            }else if(item.title.toLowerCase().includes(searchQuery.toLowerCase())){
              return item
            }
          }).map((item) => {
            return(
              <Card style={style.cards} key={item.title}>
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
                <Paragraph>{item.date}</Paragraph>
              </Card.Content>
              <Card.Actions style={style.butons}>
                <Button onPress={()=> {  
                    addWish(item)

                  }}><Entypo name="heart" size={28} color="red" /></Button>
                <Button><Entypo name="share" size={28} color="black" /></Button>
              </Card.Actions>
          </Card>
            )
          })}
        
      </ScrollView>
      </View>
    );
}

const style = StyleSheet.create({
  filter:{
    marginTop:10

  },
    container : {
      marginTop:10
    },
    cards : {
      margin:7
    },
    butons:{
      marginLeft:250
    }
  });

export default EventsScreen;