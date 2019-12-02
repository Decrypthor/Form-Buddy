import * as React from 'react';
import { View, StyleSheet, Dimensions,Text,ActivityIndicator } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { Button,TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Actions} from 'react-native-router-flux';
import Upload from '../pages/upload'
 

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <Upload/>
    </View>
  // <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    
  //   <TouchableOpacity
  //         style={styles.button }
  //         onPress={this._pickImage}
  //         >
  //         <Text style={styles.buttonText}>Upload video</Text>
  //   </TouchableOpacity>
  //   <ActivityIndicator size="large"  animating = {this.animating} color="#0000ff" />
         
  // </View>
);


 
getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this workk!');
    }
  }
}

_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  console.log(result.uri);
  console.log("testttttt");


  const data = new FormData();
  data.append('name', 'testNemdddddd');  
  data.append('video', {
  uri: result.uri,
  type: 'video/mp4',  
  name: 'sample.mp4'
  });
  //https://storage.googleapis.com/upload/storage/v1/b/formbuddy_bucket/o?uploadType=multipart
  fetch('http://10.26.103.112:5000/test', {
  method: 'post',
  body: data
  }).then(res => {
  console.log(res)
  });



  // if (!result.cancelled) {
  //   this.setState({ image: result.uri });
  // }
};




















const FirstRoute = () => (
   
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);









































export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    image: null,
    animating: true,
    routes: [
      { key: 'first', title: 'Home' },
      { key: 'second', title: 'Upload' },
    ],
  };
   
  

  componentDidMount(){
    setTimeout(() => { 
      this.setState({animating: false})
    },2000)
} // simulate loading

login ()  {
  Actions.login();
}



 
  render() {
    const animating = this.animating
    
    return (
        
      
      <TabView
        style={{ paddingTop:49}}
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: '#54016f' }}
          />
          
        }
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  
  scene: {
    flex: 1,
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:  0,
  },

  button:{
    width:300,
    marginTop: 20,
    height:40,
    backgroundColor: '#54016f',
    borderRadius:25,
    color: 'white',
    justifyContent: 'center',    
},
buttonText:{
    color:'white',
    textAlign: 'center',
    fontSize:16,
},
});



 