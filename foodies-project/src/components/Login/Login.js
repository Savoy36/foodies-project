import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
		
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			
			<View style={styles.logoContainer}>
				<Image 
					style={styles.logo}
					source={require('../../components/images/sandwhich.png')} 
					resizeMode="contain"
					/>					
					<Text style={styles.title}>Placeholder Image and Description</Text>
			</View>
			
			<View style={styles.formContainer}>
				<LoginForm />
			</View>
			
			<TouchableOpacity style={styles.CreateAccountButton}>
				<Text style={styles.CreateAccountButtonText}>Create Account</Text>
			</TouchableOpacity>
		  
		  </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F1FE',
  },
  logoContainer: {
	alignItems: 'center',
	flexGrow: 2,
	justifyContent: 'center'
  },
  logo: {
	 flexGrow:2,
	 width: 280,
	 height: 150,
  },
  title: {
	color: '#000',
	marginTop: 10
  },
  CreateAccountButton: {
  	marginBottom: 10,
  	paddingLeft: 10
  },
  CreateAccountButtonText: {
  	color: '#013243'
  }
});

