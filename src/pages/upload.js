import * as React from 'react';
import { Button, Image, View,TouchableOpacity,StyleSheet,Text,ActivityIndicator,document } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Dialog, { DialogContent,SlideAnimation,DialogTitle } from 'react-native-popup-dialog';
import * as Permissions from 'expo-permissions';
 

export default class upload extends React.Component {

  state = {
    image: null,
    animating: false ,
    showUploading: false,
    myText : "uploading",
    dialog: false,
    myFormText: "Your Form is Good :)",
    showmyFormText: false,
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
           <Text   style={styles.buttonText}>Upload video</Text>
           </TouchableOpacity>
         
           <ActivityIndicator
               animating = {animating}
               style={{marginTop: 10,paddingTop: 10}}
               color = '#54016f'
               size = "large"
                />
        { this.state.showUploading &&  <Text id="statusText"> {this.state.myText} </Text> }
        <Dialog
            visible={this.state.dialog}
            dialogTitle={<DialogTitle title="FormBuddy" />}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
          >
            <DialogContent>
          { this.state.showmyFormText && <Text id="statusText"> {this.state.myFormText} </Text> }
            </DialogContent>
          </Dialog>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  dialogPush(){

    this.setState({showmyFormText:true, dialog:true}, () => 
        console.log("mass"));

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

    this.state.animating = true;
    this.state.showUploading=true;
    this.state.image= null;

    const data = new FormData();
    data.append('name', 'testNemdddddd');  
    data.append('video', {
    uri: result.uri,
    type: 'video/mp4',  
    name: 'sample.mp4'
    });
    //https://storage.googleapis.com/upload/storage/v1/b/formbuddy_bucket/o?uploadType=multipart

    console.log("singhhhhhhhhhh");

    fetch('http://192.168.1.4:5000/test', {
    method: 'post',
    body: data
    }).then(response => 
      response.json().then(jsonObj =>{console.log(jsonObj);
        this.setState({ myText: "Scoring Now"}, () => 
        setTimeout(() => {
          this.setState({ showUploading: false,animating:false});
          this.dialogPush();
        }, 5000));
      })
  );


   
 
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
    marginBottom: 10 
},
buttonText:{
    color:'white',
    textAlign: 'center',
    fontSize:16,
     
},
});
