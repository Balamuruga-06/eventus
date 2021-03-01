import React,{useState} from 'react';
import axios from 'axios'

export const AuthContext  = React.createContext();

export default AuthProvider = ({children}) => {
    const ngrokURL = "http://64a85b36085f.ngrok.io"

    const [Logverify,setLogverify] = useState(false);

    const [mail,setMail] = useState("");

    const name = "bala";

    const signup = (data, naviagtion) => {
        axios.post(`${ngrokURL}/signup`,data)
             .then((result)=>{
                console.log('msg: ', result.data.msg)
                if(result.data.verified){
                    naviagtion.navigate('SignIn')
                }
                // setMessage(result.data.msg)
                // onToggleSnackBar();
                
             })
            .catch(err => {
                console.log('err signup post: ',err);
            })  
    }      
        
    const signin = (data) => {
        axios.post(`${ngrokURL}/signin`,data)
             .then((result)=>{
                // console.log('result: ', result);
                console.log('msg: ', result.data.msg)
                if(result.data.verified){
                    setLogverify(true);
                    setMail(data.email)
                }
             })
            .catch(err => {
                console.log('err signin post: ',err);
            })   
    }

    return (
        <AuthContext.Provider value={{signup,signin,Logverify,setLogverify,name,ngrokURL,mail}}>
            {children}
        </AuthContext.Provider>
    )
}