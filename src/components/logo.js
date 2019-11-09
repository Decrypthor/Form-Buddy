import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, StatusBar, Image} from 'react-native';


export default class Logo  extends Component<{}>{
  render(){
    return (   
        <View>  
            <StatusBar backgroundColor="#7b1fa2" barStyle="light-content" />
            <Image
            style={{marginTop: 0,width: 200, height: 200}}
            source={require('./images/formbuddy.png')}
            /> 
         </View>   
    )
  }
}

 