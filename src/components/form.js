import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, StatusBar, Image, TextInput,Div,TouchableOpacity,Dimensions} from 'react-native';


export default class Form  extends Component<{}>{
  render(){
    return (   
        <View style={styles.container}>  
            {/* <Image source={require('./images/landing.png')} style= {styles.backgroundImage}  ></Image> */}
            <TextInput style={styles.username} placeholder="Username" placeholderTextColor="white" 
            selectionColor="white" onSubmitEditing={()=>this.password.focus()}></TextInput>
            <TextInput  style={styles.password} secureTextEntry={true}  placeholder="Password" 
            selectionColor="white" placeholderTextColor="white" ref={(input)=>this.password = input} ></TextInput>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
           
        </View>   
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:  Dimensions.get("window").height*0.5,
    
  },
   
  username:{
      width:300,
      height:40,
      backgroundColor: 'rgba(255,255,255,0.4)',
      borderRadius:25,
      paddingHorizontal: 16,
      color: 'white',
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

  password:{
      width:300,
      marginTop: 20,
      height:40,
      backgroundColor: 'rgba(255,255,255,0.4)',
      borderRadius:25,
      paddingHorizontal: 16,
      color: 'white',
  }
});

 