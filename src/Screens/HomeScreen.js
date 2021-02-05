import React from 'react';
import {Text,View,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
const HomeScreen = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={style.header}>
              <Animatable.Image 
              animation = "bounceIn"
              duration = {2500}
              source={require('../../assets/event.png')}
              style={StyleSheet.logo}
              resizeMode="stretch"
              />
            </View>
            <Animatable.View style={style.footer}
              animation="fadeInUpBig"
            >
              <Text style={style.title}>Stay connected with events!!!</Text>
              <View style={style.button}>
              <Button mode="contained"  style={style.signIn} color="#009387"
              onPress={()=>navigation.navigate('SignIn')}
              >
                Get Started
              </Button>
              </View>
              
            </Animatable.View>
        </View>
      );
}

const {height} = Dimensions.get("screen");
const height_logo = height*0.28;
const style = StyleSheet.create({
  container:{
    flex:2,
    backgroundColor:'#009387'
  },
  header:{
    flex:2,
    justifyContent:'center',
    alignItems:'center'
  },
  footer:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:30
  },
  logo:{
    width:height_logo,
    height:height_logo
  },
  title:{
    color:'#05375a',
    fontSize:30,
    fontWeight:'bold'
  },
  text:{
    color:'grey',
    marginTop:5
  },
  button:{
    alignItems:'flex-end',
    marginTop:30
  },
  signIn:{
    width:150,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    flexDirection:'row'
  },
  textSign:{
    color:'white',
    fontWeight:'bold'
  }


});

export default HomeScreen;