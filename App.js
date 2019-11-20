import React,{Component} from 'react';
import { StyleSheet,  Text ,View, StatusBar, Image,Dimensions,ImageBackground} from 'react-native';
import Routes from './src/routes'

export default class App  extends Component<{}>{
  render(){
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='blue' barStyle="light-content" />
          <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    // backgroundColor: '#7b1fa2',
    justifyContent: 'center',
  },
});
