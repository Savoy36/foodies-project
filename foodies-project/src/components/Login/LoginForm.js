import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
	  
	  <View style={styles.container}>
        <TextInput 
			placeholder="username or email"
			placeholderTextColor="rgba(0,0,0,0.4)"
			returnKeyType="next"
			onSubmitEditing={() => this.passwordInput.focus()}
			keyboardType="email-address"
			autoCapitalize="none"
			autoCorrect={false}
			style={styles.input}
        />
       
        <TextInput 
			placeholder="password" 
			placeholderTextColor="rgba(0,0,0,0.4)"
			returnKeyType="go"
			secureTextEntry
			autoCapitalize="none"
			autoCorrect={false}
			style={styles.input}
			ref={(input) => this.passwordInput = input}
        />
        
        <TouchableOpacity style={styles.buttonContainer}>
			<Text style={styles.buttonText}>LOGIN</Text>
		</TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	  padding: 60
  },
  input: {
	height: 40,
	backgroundColor: 'rgba(255,255,255,0.4)',
	marginBottom: 20,
	color: 'black',
	paddingHorizontal: 10
  },
    buttonContainer: {
	backgroundColor: '#52B3D9',
	paddingVertical: 10
  },
  buttonText: {
	textAlign: 'center',
	color: 'black',
	fontWeight: '700'
  }	  
});


