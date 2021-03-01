import  React,{useContext} from 'react';
import { Text, View,SafeAreaView,StyleSheet} from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import RootStackScreen from './src/Screens/RootStackScreen';
import BottomNavigatorScreen from './src/Screens/BottomNavigatorScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import VerificationScreen from './src/Screens/VerificationScreen'
import EventProvider from './src/context/EventContext'
import AuthProvider from './src/context/AuthContext'


export default function App() {

  return (
    <AuthProvider>
      <EventProvider>
        <NavigationContainer>          
          <VerificationScreen></VerificationScreen>
          {/* <BottomNavigatorScreen /> */}
        </NavigationContainer>
      </EventProvider>
    </AuthProvider>
  );
}