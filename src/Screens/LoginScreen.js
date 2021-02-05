import * as React from 'react';
import { TextInput,Button } from 'react-native-paper';
const LoginScreen = () => {
    const [text, setText] = React.useState('');
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
        label="Email"
        value={text}
        placeholder="Email"
        onChangeText={text => setText(text)}
        mode="outlined"
        style={styles.text}
        color="#009387"
      />
      <TextInput
        label="Password"
        value=""
        // onChangeText={text => setText(text)}
        placeholder="Password" 
        secureTextEntry={true}
        mode="outlined"
        style={styles.text}
  
      />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')} style={styles.text} color="#009387">
         Login
      </Button>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "white",
      marginTop: 50
    },
    text: {
      margin:10,
      color: "#009387"
    },
    heading:{
      textAlign: "center",
      fontStyle:"italic",
      fontWeight:'bold',
      lineHeight: 50
    }
  });



export default LoginScreen;