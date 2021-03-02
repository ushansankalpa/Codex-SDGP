import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect ,PureComponent} from 'react';
import { StyleSheet, Text, View ,Button,FlatButton,TouchableOpacity} from 'react-native';
import Header from './components/header';





export default function App() {


  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.buttonContainer}> 
      
        
        <Button
          title="Live Video"
          type="outline"
          
        />        
        
      </View> 

      <View style={styles.buttonContainer}>  
        <Button
          title="Upload Video"
          type="outline"
        />  
      </View> 

      <View style={styles.buttonContainer}>  
        <Button
          title="Sign Dictionary"
          type="outline"
        />  
      </View> 

      <View style={styles.buttonContainer}>  
      <Button
          title="Help"
          type="outline"
        /> 
      </View> 
      
       
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },

  content:{
    padding:40,
  },

  buttonContainer:{
    marginTop:50,
    margin:10,
    
  }

});
