import * as React from 'react';
import { Button, Image, View,TouchableOpacity,StyleSheet,Text,ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class upload extends React.Component {


   
  closeActivityIndicator = () => setTimeout(() => this.setState({
  animating: false }), 6000)
  
  componentDidMount = () => this.closeActivityIndicator()


  state = {
    image: null,
    animating: true ,
  };

  render() {
    let { image } = this.state;
    const animating = this.state.animating;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
           style={styles.button }
           onPress={this._pickImage}
            >
           <Text style={styles.buttonText}>Upload video</Text>
           </TouchableOpacity>
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
           <ActivityIndicator
               animating = {animating}
               color = '#bc2b78'
               size = "large"
                />
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

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


 
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
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
