import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import Logo from "../components/logo"
import Form from "../components/form"
import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}>{
    
  login ()  {
    Actions.pop();
  }
  render(){
    return (
      <View style={styles.container}>
             <ImageBackground source={require('./landing.png')} style= {styles.backgroundImage}  >
                <StatusBar backgroundColor="#7b1fa2" barStyle="light-content" />
                <Form type="Sign Up" />
                <View style={styles.signupTextView} >
                    <Text style={styles.signupText}> Already Have an account yet?</Text>
                    <TouchableOpacity onPress={this.login}>
                        <Text style={styles.signupButton}> Signin</Text> 
                    </TouchableOpacity>
                </View>
            </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
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
