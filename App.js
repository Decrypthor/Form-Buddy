import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from "./src/pages/login"

export default class App  extends Component<{}>{
  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='blue' barStyle="light-content" />
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
    backgroundColor: '#7b1fa2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
