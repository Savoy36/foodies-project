import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import Login from './src/components/Login/Login';

const firebaseConfig = {
  apiKey: "AIzaSyA45vMMLm17hnDg33BCOFuLX-w96MZnU3Y",
  authDomain: "group-3308-project.firebaseapp.com",
  databaseURL: "https://group-3308-project.firebaseio.com/",
  storageBucket: "gs://group-3308-project.appspot.com"
};

firebase.initializeApp(firebaseConfig);


export default class App extends React.Component {
  render() {
    return (
		<Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
