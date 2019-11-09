import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, StatusBar,TextInput} from 'react-native';
import Logo from "../components/logo"
import Form from "../components/form"

export default class Login  extends Component<{}>{
  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#7b1fa2" barStyle="light-content" />
            <Logo/>
            <Form/>
            <View style={styles.signupTextView} >
              <Text style={styles.signupText}> Don't Have an account yet?</Text>
              <Text style={styles.signupButton}> Signup</Text> 
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b1fa2',
    alignItems: 'center',
    marginTop: 100,
  },
  signupTextView:{
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 10,

  },
  signupText: {
    color: 'rgba(255,255,255,0.4)',
  },
  signupButton:{
      color:'white',
      fontSize:15,
      fontWeight: '400'
  }
});
