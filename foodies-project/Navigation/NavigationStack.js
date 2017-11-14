import React from 'react';
import { NavigationActions, StackNavigator } from 'react-navigation';
import Login from '../src/components/Login/Login';
import CreateAccount from '../src/components/CreateAccount/CreateAccount';
import App from '../App';

export const NavigationStack = StackNavigator({
  //Splash Screen Goes here (initial app loading screen)
  Login: {
    screen: Login
  },
  CreateAccount: {
    screen: CreateAccount
  },
}, {
  headerMode: 'none'
})

class NavigationStackk extends React.component{
	render(){
		<Login />
	}
}


