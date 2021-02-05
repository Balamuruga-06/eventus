import React from 'react';

import {createStackNavigator} from  '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator headerMode = 'none'>
        <RootStack.Screen name = "Home" component = {HomeScreen} />
        <RootStack.Screen name = "SignIn" component = {SignInScreen} />
        <RootStack.Screen name = "SignUp" component = {SignUpScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;