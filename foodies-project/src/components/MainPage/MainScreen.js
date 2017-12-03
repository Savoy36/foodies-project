import React from 'react'; 
import * as firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native'; 
import { StackNavigator, SafeAreaView } from 'react-navigation';

const MainScreen = ({ navigation }) => (
	<View style={styles.container}>
		<Text>MainScreen</Text>
	</View> 
	);


//const MainScreen = StackNavigator({
	//Pages to navigate to go here
//},
//	{
//		headerMode: 'none',
//	}
//);

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default MainScreen; 