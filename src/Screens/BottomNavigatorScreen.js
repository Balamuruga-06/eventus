import React, { useContext, useState, useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Text,View,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';
import { Card, Title, Paragraph } from 'react-native-paper';
import EventCard from '../Components/EventCard';
import EventScreen from './EventsScreen';
import {EventContext} from '../context/EventContext'
import WishlistScreen from './WishlistScreen';

  
  function HomeScreen() {

      return (
        <View>
          <Text>Home</Text>
          
        </View>
      );
    }
    function acountScreen() {

      return (
        <View>
          <Text>Account</Text>
          
        </View>
      );
    }
const Tab = createMaterialBottomTabNavigator();

const  BottomNavigatorScreen = () => (
    <Tab.Navigator
      initialRouteName="Login"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen
        name="Login"
        component={EventScreen}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <AntDesign name="windowso" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ color }) => (
            <Entypo name="star-outlined" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Login2"
        component={acountScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
  export default BottomNavigatorScreen;