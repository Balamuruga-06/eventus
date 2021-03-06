import React,{useContext} from 'react';
import {View,Text,TextInput,StyleSheet, Platform,TouchableOpacity,Dimensions,StatusBar} from 'react-native';
import { Button,Snackbar } from 'react-native-paper';
import * as Animatable from 'react-native-animatable'; 
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import axios from 'axios';
import {AuthContext} from '../context/AuthContext'
const SignUpScreen = ({navigation}) => {

    const {signup} = useContext(AuthContext);

    const [data,setData] = React.useState({
        email:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true
    });    
    
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const [message,setMessage] = React.useState('');

    const textInputChange = (val) => {
        if(val.length != 0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            })            
        }else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password:val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        })
    }

    const submitEvent = () =>{        
        signup(data,navigation);                
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register now!</Text>
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
                >
                <Text style = {styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>{
                            textInputChange(val)
                        }}
                    />
                    {data.check_textInputChange?
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather 
                            name="check-circle" 
                            size={20} 
                            color="green" 
                        />
                    </Animatable.View>
                    :null}
                </View>
                <Text style = {[styles.text_footer,{marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ?  true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>{
                            handlePasswordChange(val)
                        }}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off" 
                            size={20} 
                            color="grey" 
                        />
                        :
                        <Feather 
                            name="eye" 
                            size={20} 
                            color="grey" 
                        />
                        }
                    </TouchableOpacity>
                </View>
                <Text style = {[styles.text_footer,{marginTop:35}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ?  true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>{
                            handlePasswordChange(val)
                        }}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off" 
                            size={20} 
                            color="grey" 
                        />
                        :
                        <Feather 
                            name="eye" 
                            size={20} 
                            color="grey" 
                        />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>    
                    <Button 
                        mode="contained"  
                        style={styles.signIn} 
                        color="#009387"
                        onPress={()=> submitEvent()}
                    >
                    Sign up
                    </Button>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn,{
                            borderColor:'#009387',
                            borderWidth:1,
                            marginTop:15
                        }]}
                    >
                        <Text style={[styles.textSign,{
                            color:'#009387'
                        }]}>SignIn

                        </Text>


                    </TouchableOpacity>
                </View>
            </Animatable.View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Undo',
                }}>
                {message}
            </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:3,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text_header:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        fontSize:30
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }



});

export default SignUpScreen;