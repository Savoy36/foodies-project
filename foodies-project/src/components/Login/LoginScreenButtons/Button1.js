import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer}>
			<Text style={styles.buttonText}>LOGIN</Text>
		</TouchableOpacity>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	  
  },
  buttonContainer: {
	backgroundColor: '#EB642C',
	paddingVertical: 10
  },
  buttonText: {
	textAlign: 'center',
	color: 'black',
	fontWeight: '700'
  }	  

});

