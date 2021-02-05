// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();
// import HomeScreen from './src/Screens/HomeScreen';
// export default function App() {
//   return (
//     <View>
//       <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Welcome' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
import * as React from 'react';
import { Text, View,SafeAreaView,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { Input,Button } from 'react-native-elements';
import HomeScreen from './src/Screens/HomeScreen';
import RootStackScreen from './src/Screens/RootStackScreen';
//import { Dimensions } from 'react-native';
const Stack = createStackNavigator();
// function SettingsScreen() {
//   return (
//     <View>
//       <Text textAlign={'center'}>Settings!</Text>
//       {/* <Input
//         placeholder='BASIC INPUT'
//       />
//       <Input placeholder="Password" secureTextEntry={true} />
//       <Button
//         title="Solid Button"
//       /> */}

//     </View>
//   );
//   const style = StyleSheet.create({
//   });
// }

// function HomeScreen() {

//   return (
//     <View>
//       <Text>Home</Text>
      
//     </View>
//   );
// }

// const {height} = Dimensions.get("screen");

// function LoginScreen() {
//   const [text, setText] = React.useState('');
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Login</Text>
//       <TextInput
//       label="Email"
//       value={text}
//       placeholder="Email"
//       onChangeText={text => setText(text)}
//       mode="outlined"
//       style={styles.text}
//       color="#009387"
//     />
//     <TextInput
//       label="Password"
//       value=""
//       // onChangeText={text => setText(text)}
//       placeholder="Password" 
//       secureTextEntry={true}
//       mode="outlined"
//       style={styles.text}

//     />
//     <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')} style={styles.text} color="#009387">
//        Login
//     </Button>
//     </View>
//   );
  
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: "white",
//     marginTop: 50
//   },
//   text: {
//     margin:10,
//     color: "#009387"
//   },
//   heading:{
//     textAlign: "center",
//     fontStyle:"italic",
//     fontWeight:'bold',
//     lineHeight: 50
//   }
// });
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Home" component={HomeScreen} 
      options={{
        headerStyle:{
          backgroundColor:"#009387",
        },
        headerTintColor:"#fff",
        headerTitleStyle:{
          fontWeight: 'bold'
        }
      }}
      />
      {/* <Stack.Screen name="Login" component={LoginScreen} options={{
        headerStyle:{
          backgroundColor:"#009387",
        },
        headerTintColor:"#fff",
        headerTitleStyle:{
          fontWeight: 'bold'
        }
      }}
      /> */}
    {/* </Stack.Navigator> */} 
      <RootStackScreen />
    </NavigationContainer>
  );
}