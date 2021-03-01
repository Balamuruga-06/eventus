import React,{useContext} from 'react'
import RootStackScreen from  './RootStackScreen'
import BottomNavigatorScreen  from  './BottomNavigatorScreen'
import {AuthContext} from '../context/AuthContext'
const VerificationScreen = () => {
    const {Logverify,setLogverify} = useContext(AuthContext);
    console.log("verifyss")
    console.log(Logverify)
    
    if (Logverify) {
        return <BottomNavigatorScreen />;
      }
      return <RootStackScreen />;
        
    
}

export default VerificationScreen;