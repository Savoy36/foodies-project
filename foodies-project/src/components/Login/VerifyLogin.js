//Login Authentication Goes Here

import React from 'react';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import * as firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native'; 


const VerifyLogin = ({ navigation }) => (
	<Text style={styles.textContainer}>Alec: I'm thinking this page we treat as a function
		that either sends the user back to the login page if credentials do not match up or
		breaks the navigation stack by setting their navigation state to root on the next page (home page).
		Still figuring it all out so let me know what you learn about it all. 
	</Text>
);

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',

		justifyContent: 'center',
	},
	textContainer: {
		marginTop: 250, 
		textAlign: 'center',
	}
});

export default VerifyLogin; 