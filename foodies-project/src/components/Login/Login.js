import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<View style={styles.logoContainer}>
				<Image 
					style={styles.logo}
					source={require('../../components/images/mepp4.png')} 
					resizeMode="contain"
					/>					
					<Text style={styles.title}>Placeholder Image and Description</Text>
			</View>
			<View style={styles.formContainer}>
				<LoginForm />
			</View>
		  </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89C4F4',
  },
  logoContainer: {
	alignItems: 'center',
	flexGrow: 2,
	justifyContent: 'center'
  },
  logo: {
	 flexGrow:2,
	 alignSelf:'stretch',
	 width: undefined,
	 height: undefined,
  },
  title: {
	color: '#000',
	marginTop: 10
  }
});

