//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button} from 'react-native';
import Camera from './Camera';
//import all the components we are going to use.

export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'Sign Master',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#4e2ab8',
      
      
    },
    headerTintColor: '#fff',
   
    headerTitleStyle: {
      fontWeight: 'bold',
      
      
    },

    alignItems:'center',


    
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <View style={styles.buttonContainer}>  
            <Button title='Live Video'
            onPress={() =>navigate('FourthPage')}
            type="outline"
            /> 
        </View>

    
        <View style={styles.buttonContainer}>  
            <Button title='Sign Dictionary'
            onPress={() =>navigate('SecondPage')}
            type="outline"
            /> 
        </View>

        <View style={styles.buttonContainer}>  
            <Button title='Help'
            onPress={() =>navigate('ThirdPage')}
            type="outline"
            /> 
        </View>
        <Camera/>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop:50,
    margin:10,
    
  }
});