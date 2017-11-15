import React, { Component } from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from '../../components/Login/Login'

const database = firebase.database();


const CreateAccount = ({ navigation }) => (

		this.state={
		username: '',
		name: '',
		email: '',
		password: '',
		enabled: false,
	},
createUser = () => {//write user data
  firebase.database().ref('users/' + this.state.username).set({
    name: this.state.name,
    email: this.state.email,
    password: this.state.password
  });
},
enableButton = () => {
	if (this.state.username.length > 0 && this.state.password.length > 0) {
		this.state.enabled=true;
	}
},
		
    	<View style={styles.container}>
    		<TouchableOpacity 
    			style={styles.goBack}
    			onPress={() => navigation.goBack(null)}>
    			<Text style={styles.goBackText}>Back</Text>
    		</TouchableOpacity>

    		<Text style={styles.pageTitle}>Sign-up</Text>
		
    		<TextInput
    			placeholder="Username"
    			placeholderTextColor="rgba(0,0,0,0.4)"
    			returnKeyType="next"
    			onSubmitEditing={() => this.passwordInput.focus()}
    			autoCapitalize="none"
    			autoCorrect={false}
    			onChangeText={(text) => {
    				this.state.username=text
    				}
    			}
    			style={styles.input}
    		/>

     		<TextInput
    			placeholder="Name"
    			placeholderTextColor="rgba(0,0,0,0.4)"
    			returnKeyType="next"
    			onSubmitEditing={() => this.passwordInput.focus()}
    			autoCapitalize="words"
    			autoCorrect={false}
    			onChangeText={(text) =>
    				this.state.name=text
					}
    			style={styles.input}
    		/>

      		<TextInput
    			placeholder="Email"
    			placeholderTextColor="rgba(0,0,0,0.4)"
    			returnKeyType="next"
    			onSubmitEditing={() => this.passwordInput.focus()}
    			keyboardType="email-address"
    			autoCapitalize="none"
    			autoCorrect={false}
    			onChangeText={(text) =>
    				this.state.email=text
						}
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
	          onChangeText={(text) => {
	    		enableButton()
	          	this.state.password=text
	          		}
	      		}
	          ref={(input) => this.passwordInput = input}
	        />

	       	<TouchableOpacity 
	       		style={styles.signUpButton}
	       		activeOpacity={this.state.enabled ? 0.5 : 1}
	       		//disabled={!this.state.username}
	       		onPress={() => {
	       			if (this.state.enabled){
	       			this.createUser()
	       			navigation.navigate('Login')}
	       			}
	       		}>
	       		<Text style={styles.signUpButtonText}>Sign-up</Text>
	       	</TouchableOpacity>		
    	</View>
);
CreateAccount.navigationOptions = {
	title: 'Sign Up',
}; 


const CreateAccountScreen = StackNavigator({
	CreateAccout: {
		screen: CreateAccount,
	},
	Login: {
		screen: Login,
	}, 
},
	{
		headerMode: 'none',
	}
);

const styles = StyleSheet.create({
	container:{
		marginBottom: 10, 
		padding:10,
		backgroundColor: '#E4F1FE'
	},
	goBack: {
    	marginTop: 25,
		marginBottom: 10,
		paddingLeft: 10
	},
	goBackText: {
		color: '#013243',
    	fontWeight: '100',
    	fontSize: 16
	},
	pageTitle: {
		textAlign: 'center',
		color: 'black',
		fontSize: 32, 
		fontWeight: '700',		
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.4)',
		marginBottom: 20,
		color: 'black',
		paddingHorizontal: 10		
	},
	signUpButton: {
		height: 50, 
		paddingVertical: 10,
		paddingHorizontal: 10, 
		backgroundColor: '#52B3D9',
	},
	signUpButtonText:{
		textAlign: 'center',
		color: 'black',
		fontSize: 18, 
		fontWeight: '700',
	},
}); 

export default CreateAccountScreen; 