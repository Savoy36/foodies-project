//Navigation Root (for now)

import React from 'react';
import { Platform, StyleSheet, Text, View, BackgroundImage, TouchableOpacity, Image } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import * as firebase from 'firebase';

//IMPORT ALL SCREENS THAT CAN BE NAVIGATED FROM THIS PAGE (MAINSCREEN)!!!

import Login from './src/components/Login/Login';
import CreateAccount from './src/components/CreateAccount/CreateAccount'; 

const Routes = {
  Login: {
    name: 'Login',
    screen: Login,
  },
  CreateAccount: {
    name: 'Sign Up',
    screen: CreateAccount, 
  },
};



const MainScreen = ({ navigation }) => (

    <Image
    source={require('./src/components/images/main_page.jpg')}
     style={styles.container}>
      <Text style={styles.titleStyle}>Mepp</Text>
      {Object.keys(Routes).map((routeName: string) => (
        <TouchableOpacity
          key={routeName}
          onPress={() => {
            const { path, params, screen } = Routes[routeName];
            const { router } = screen; 
            const action = path && router.getActionForPathAndParams(path, params);
            navigation.navigate(routeName, {}, action); 
          }}
        >

        <SafeAreaView
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonContainerText}> {Routes[routeName].name}</Text>
          <Text style={styles.descriptionButtonText}> {Routes[routeName].description}</Text>
        </SafeAreaView>
        </TouchableOpacity>
      ))}
  </Image>
);


const AppNavigator = StackNavigator(
  {
    ...Routes,
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
   *I actually don't know what this does, found it in react-native docs... -Savoy
   *
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   *
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 15,
    marginBottom: 250,
    color: 'black',
    fontSize: 64,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  container: {
    // backgroundColor: '#E4F1FE',
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#1E824C',
    marginBottom: 20, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    borderWidth: 0,
    width: 300,
    borderColor: '#fff',
    paddingTop:10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContainerText:{
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 28
  },
 overlay: {
   position: 'absolute',
   top: 0,
   right: 0,
   bottom: 0,
   left: 0,
   backgroundColor: 'red',
   opacity: 0.3
 }
});

//Export down here when declaring screens as const vars (best way to do it)
export default() => <AppNavigator /> 
