import React from 'react';
import {Alert} from 'react-native'
import * as firebase from 'firebase';
import { StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';

import VerifyLogin from './VerifyLogin';
import MainScreen from '../../components/MainPage/MainScreen';  

const firebaseConfig = {
  apiKey: "AIzaSyA45vMMLm17hnDg33BCOFuLX-w96MZnU3Y",
  authDomain: "group-3308-project.firebaseapp.com",
  databaseURL: "https://group-3308-project.firebaseio.com/",
  storageBucket: "gs://group-3308-project.appspot.com"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function createUser(username, name, email, password) {//write user data
  firebase.database().ref('users/' + username).set({
    name: name,
    email: email,
    password: password
  });
}

const Login = ({ navigation }) => (
  this.state={
    username: '',
    password: '',
    found: true
  },
userExistsCallback = (exists) => {
  if (exists) {
    alert('user ' + this.state.username + ' exists!');
  } else {
    alert('user ' + this.state.username + ' does not exist!');
  }
},
verifyPassCallback = (passMatch) => {
  if (passMatch) {
    alert('Successfully Logged In!');
  } else {
    alert('Password Is Incorrect!');
  }
},
userExists = () => {
  usersRef = firebase.database().ref('users');
  //usersRef = new firebase(USERS_LOCATION);
  usersRef.child(this.state.username).once('value', function(snapshot) {
    exists = (snapshot.val() !== null);
    userExistsCallback(exists);
  });
},
verifyPass = () => {
  passRef = firebase.database().ref('users/' + this.state.username + '/password').once('value').then(function(snapshot) {
  passMatch = (snapshot.val() == this.state.password);
  verifyPassCallback(passMatch);
  });
},
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    
    <View>
      <TouchableOpacity 
        style={styles.goBackButton}
          //Standard 'go back button function'
          onPress={() => navigation.goBack(null)}>
          <Text style={styles.goBackButtonText}>Back</Text>          
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('MainScreen')}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
    </View>  

    <View style={styles.logoContainer}>
      <Image 
        style={styles.logo}
        source={require('../../components/images/sandwhich.png')} 
        resizeMode="contain"
      />          
      <Text style={styles.title}>Placeholder Image and Description</Text>
    </View>
      
    <View style={styles.formContainer}>
            
      <View style={styles.formContainerTwo}>
        <TextInput 
          placeholder="username"
          placeholderTextColor="rgba(0,0,0,0.4)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => this.state.username=text}
          style={styles.input}
        />
       
        <TextInput 
          placeholder="password" 
          placeholderTextColor="rgba(0,0,0,0.4)"
          returnKeyType="go"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => this.state.password=text}
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
      <View>
        <TouchableOpacity
          style={styles.loginButtonContainer}
          //Alec: pass text input params to DB here, still could 
          //not figure out how to do this. 
          onPress={() => {//navigation.navigate('VerifyLogin')
              userExists()
              verifyPass()
            }
          }>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>    
  </KeyboardAvoidingView>

);



const LoginScreen = StackNavigator({
    Login: {
      screen: Login,
    },
    VerifyLogin: {
      screen: VerifyLogin,
    },
    MainScreen: {
      screen: MainScreen,
    }
  },
    {
      headerMode: 'none',
    }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F1FE',
  },
  goBackButton: {
    marginTop: 25,
    marginBottom: 10,
    paddingLeft: 10
  },
  goBackButtonText: {
    color: '#013243',
    fontWeight: '100',
    fontSize: 16
  },
  skipButton: {
    justifyContent: 'right',
    alignItems: 'flex-end',
    marginTop: 15,
    marginBottom: 10,
    paddingRight: 15
  },
  skipButtonText: {
    color: '#013243',
    fontWeight: '100',
    fontSize: 16   
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
  formContainerTwo: {
    padding: 60
  },
  input: {
  height: 40,
  backgroundColor: 'rgba(255,255,255,0.4)',
  marginBottom: 20,
  color: 'black',
  paddingHorizontal: 10
  },
  loginButtonContainer: {
  backgroundColor: '#52B3D9',
  paddingVertical: 10
  },
  loginButtonText: {
  textAlign: 'center',
  color: 'black',
  fontWeight: '700'
  }, 

});


export default LoginScreen; 
