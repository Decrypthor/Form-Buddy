import React,{Component} from 'react';
import { StyleSheet, Text, View, StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import Logo from "../components/logo";
import Form from "../components/form";
import {Actions} from 'react-native-router-flux';

export default class Login  extends Component<{}>{

  signup ()  {
    Actions.upload();
  }

  render(){

    return (
      <View style={styles.container}>
        <ImageBackground source={require('./landing.png')} style= {styles.backgroundImage}  >
        <StatusBar backgroundColor="#7b1fa2" barStyle="light-content" />
            {/* <Logo/> */}
            <Form type="Login"/>
            <View style={styles.signupTextView} >
              <Text style={styles.signupText}> Don't Have an account yett?</Text>
              <TouchableOpacity onPress={this.signup}>
                <Text style={styles.signupButton}> Signup</Text>
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
