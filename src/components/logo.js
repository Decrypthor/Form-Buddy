import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, StatusBar, Image, Dimensions} from 'react-native';

 
export default class Logo  extends Component<{}>{
  render(){
    return (   
        <View>  
            <StatusBar backgroundColor="#7b1fa2" barStyle="light-content" />
            <Image
            style={{marginTop: 0 ,width: Dimensions.get("window").width, height: Dimensions.get("window").height,}}
            source={require('./images/landing.png')}
            /> 
         </View>   
    )
  }
}

 