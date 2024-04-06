import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      alert("Please Fill all the Fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://192.168.56.1:6000/api/user/login', { email, password });

      if (response.status === 200) {
        // Login successful
        alert("Login Successful");
        // Handle storing user data (e.g., token) in AsyncStorage or Context API
        // Redirect user to the next screen
      } else {
        // Login failed
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          {/* Your UI components */}
          <TextInput
            placeholder='Email'
            style={styles.input}
            value={email}
            onChangeText={handleEmail}
          />
          <TextInput
            placeholder='Password'
            style={styles.input}
            value={password}
            onChangeText={handlePassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={submitHandler} disabled={loading}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    width: '80%',
    marginLeft: '10%',
    marginTop: 50
  },
  logo: {
    width: '70%'
  },
  input: {
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '5%',
    marginVertical: 5,
    backgroundColor: '#fff',
    paddingVertical: '3%',
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  passwordInput: {
    flex: 1,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '5%',
    marginVertical: 5,
    backgroundColor: '#fff',
    paddingVertical: '3%',
  },
  toggleButton: {
    padding: 10,
    position: 'absolute',
    right: 10,
  },
  button: {
    backgroundColor: '#09abe7',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
});
