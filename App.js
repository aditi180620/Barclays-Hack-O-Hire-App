import ComplaintForm from "./Components/ComplaintForm";
import React from 'react';
import { View, StyleSheet, Text, ScrollView, KeyboardAvoidingView, Platform, Button, Alert } from 'react-native';
// import Signup from "./Components/Signup";
import Login from './Components/Login';
import Home from './Components/Home';
import { ToastProvider } from 'react-native-toast-notifications';
import LoginPage from './Components/LoginPage';

export default function App() {
  return (
    <ToastProvider>
    <View style={styles.container}>
      {/* <ComplaintForm/> */}
      {/* <Signup/> */}
      <Login/>
      {/* <Home /> */}
    </View>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
