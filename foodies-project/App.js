//Navigation Root (for now)

import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import * as firebase from 'firebase';

//IMPORT ALL SCREENS THAT CAN BE NAVIGATED FROM THIS PAGE (MAINSCREEN)!!!

import Login from './src/components/Login/Login';
import CreateAccount from './src/components/CreateAccount/CreateAccount'; 

const Routes = {
  Login: {
    name: 'Login',
    description: 'Have an account? Login',
    screen: Login,
  },
  CreateAccount: {
    name: 'Sign Up',
    description: 'Not signed up with us? Create an account',
    screen: CreateAccount, 
  },
};



const MainScreen = ({ navigation }) => (
    <View style={styles.container}>
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
  </View>
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
    fontSize: 32,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#E4F1FE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#52B3D9',
    marginBottom: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingTop:15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom:20,
  },
  buttonContainerText:{
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
    fontSize: 20
  },
  descriptionButtonText:{
    textAlign: 'center',
    color: 'black',
    fontWeight: '200'
  }
});

//Export down here when declaring screens as const vars (best way to do it)
export default() => <AppNavigator /> 