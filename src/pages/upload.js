import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class upload extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Upload your Video"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
    data.append('name', 'testNe'); // you can append anyone.
    data.append('video', {
    uri: result.uri,
    type: 'video/mp4', // or photo.type
    name: 'sample.mp4'
    });

    fetch('http://10.26.16.78:3001/test', {
    method: 'post',
    body: data
    }).then(res => {
    console.log(res)
    });



    // fetch('http://10.26.214.233:3001/test', {
    // method: 'POST',
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify({
    //     firstParam: 'richie',
    //     secondParam: 'yourOtherValue',
    // }),
    // }).then((response) => console.log(response));
    // console.log("testtttttt22");

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}