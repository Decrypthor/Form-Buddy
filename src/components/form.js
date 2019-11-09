import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, StatusBar, Image, TextInput,Div,TouchableOpacity} from 'react-native';


export default class Form  extends Component<{}>{
  render(){
    return (   
        <View style={styles.container}>  
           
            <TextInput style={styles.username} placeholder="Username" placeholderTextColor="white"></TextInput>
            <TextInput  style={styles.password} secureTextEntry={true}  placeholder="Password" placeholderTextColor="white"></TextInput>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
           
        </View>   
    )
  }
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#7b1fa2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    
  },
  username:{
      width:300,
      height:35,
      backgroundColor: 'rgba(255,255,255,0.4)',
      borderRadius:25,
      paddingHorizontal: 16,
      color: 'white',
  },
  button:{
      width:300,
      marginTop: 20,
      height:35,
      backgroundColor: '#54016f',
      borderRadius:25,
      color: 'white',
      paddingVertical: 5,
      //marginVertical: 16,
    
  },
  buttonText:{
      color:'white',
      textAlign: 'center',
      fontSize:16,
  },

  password:{
      width:300,
      marginTop: 20,
      height:35,
      backgroundColor: 'rgba(255,255,255,0.4)',
      borderRadius:25,
      paddingHorizontal: 16,
      color: 'white',
  }
});

 