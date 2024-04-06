// import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text, Alert, KeyboardAvoidingView } from 'react-native';
// import React, { useState } from 'react';
// import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo Icons
// import { ScrollView } from 'react-native';

// export default function SignupLogin() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const [passwordMatch, setPasswordMatch] = useState(true); // State to track password match
//   const [showErrorMessage, setShowErrorMessage] = useState(false); // State to show/hide error message
//   const [errorMessage, setErrorMessage] = useState(false);

//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');
//   const [alertType, setAlertType] = useState('success'); // 'success' or 'error'

//   // Function to handle password input change
//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     // Check if confirm password matches the new password
//     setPasswordMatch(text === confirmPassword);
//     setShowErrorMessage(false); // Hide error message when typing password
//   };

//   // Function to handle confirm password input change
//   const handleConfirmPasswordChange = (text) => {
//     setConfirmPassword(text);
//     // Check if confirm password matches the password
//     setPasswordMatch(text === password);
//     setShowErrorMessage(true); // Show error message when typing confirm password
//   };

//   const handleSignup = () => {
//     if (!name || !email || !password || !confirmPassword) {
//       setErrorMessage('All fields are required');
//       setShowErrorMessage(true);
//       return;
//     }
  
//     if (password !== confirmPassword) {
//       setErrorMessage('Password and confirm password do not match');
//       setShowErrorMessage(true);
//       return;
//     }
  
//     // Prepare data for signup
//     const userData = {
//       name,
//       email,
//       password,
//     };
  
//     // Make a POST request to your backend API
//     fetch('YOUR_BACKEND_API_ENDPOINT', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Signup failed');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Handle successful signup response from the server
//         setAlertMessage('Signup successful!'); // Set success message
//         setAlertType('success'); // Set alert type to 'success'
//         setShowAlert(true); // Show alert
//         // Optionally, you can navigate to another screen upon successful signup
//         // navigation.navigate('Home'); // Assuming you are using React Navigation
//       })
//       .catch((error) => {
//         console.error('Error signing up:', error.message);
//         // Display error message to the user
//         setErrorMessage('Signup failed. Please try again later.');
//         setShowErrorMessage(true);
//       });
//   };

//   const renderAlert = () => {
//     return (
//       <Alert
//         title="Success"
//         message={alertMessage}
//         confirmText="OK"
//         onConfirm={() => setShowAlert(false)}
//       />
//     );
//   };

//   return (
//     <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <View style={styles.container}>
//           <Image
//             source={require('../images/barclays_logo.png')}
//             style={styles.logo} 
//             resizeMode="contain"
//           />
//           <TextInput 
//             placeholder='Name' 
//             style={styles.input} 
//             value={name} 
//             onChangeText={setName} 
//           />
//           <View style={styles.passwordContainer}>
//             <TextInput 
//               placeholder='Password' 
//               style={styles.passwordInput} 
//               value={password} 
//               onChangeText={handlePasswordChange} 
//               secureTextEntry={!showPassword} // Hide password if showPassword is false
//             />
//             <TouchableOpacity 
//               style={styles.toggleButton} 
//               onPress={() => setShowPassword(!showPassword)}
//             >
//               <MaterialIcons 
//                 name={showPassword ? 'visibility' : 'visibility-off'} 
//                 size={24} 
//                 color="#777"
//               />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.passwordContainer}>
//             <TextInput 
//               placeholder='Confirm Password' 
//               style={[styles.passwordInput, !passwordMatch && styles.inputError]} 
//               value={confirmPassword} 
//               onChangeText={handleConfirmPasswordChange} 
//               secureTextEntry={!showPassword} // Hide password if showPassword is false
//             />
//             <TouchableOpacity 
//               style={styles.toggleButton} 
//               onPress={() => setShowPassword(!showPassword)}
//             >
//               <MaterialIcons 
//                 name={showPassword ? 'visibility' : 'visibility-off'} 
//                 size={24} 
//                 color="#777"
//               />
//             </TouchableOpacity>
//           </View>
//           {showErrorMessage && !passwordMatch && <Text style={styles.errorMessage}>Passwords do not match</Text>}
//           {!showErrorMessage && passwordMatch && password !== '' && <Text style={styles.successMessage}>Passwords matched!</Text>}

//           <Text style={{marginTop:10, marginBottom:20}}>
//             By registering, you confirm that you accept our <Text style={styles.link}>Terms of Use</Text> and <Text style={styles.link}>Privacy Policy</Text>
//           </Text>

//           <View style={styles.signup}>
//             <TouchableOpacity style={styles.button} 
//             onPress={handleSignup}
//             activeOpacity={0.8}>
//               <Text style={styles.buttonText}>SIGNUP</Text>
//             </TouchableOpacity>
//           </View>

//           <Text style={{marginVertical:10}}>Already have an account? Sign in</Text>

//           {showAlert && renderAlert()}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollView:{
//     flexGrow: 1,
//     backgroundColor: '#F9FBFC',
//   },
//   container:{
//     alignItems:'center',
//     height:'100%',
//     width:'80%',
//     marginLeft:'10%'
//   },
//   logo:{
//     width:'70%'
//   },
//   input:{
//     borderColor:'#e8e8e8',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal:'5%',
//     marginVertical: 5,
//     backgroundColor: '#fff',
//     paddingVertical:'3%',
//     width: '100%',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//   },
//   passwordInput: {
//     flex: 1,
//     borderColor: '#e8e8e8',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: '5%',
//     marginVertical: 5,
//     backgroundColor: '#fff',
//     paddingVertical: '3%',
//   },
//   toggleButton: {
//     padding: 10,
//     position: 'absolute',
//     right: 10,
//   },
//   inputError: {
//     borderColor: 'red',
//   },
//   errorMessage: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   successMessage: {
//     color: 'green',
//     marginBottom: 10,
//   },
//   signup: {
//     width: '100%',
//     marginVertical: 10,
//     borderRadius: 10,
//     // elevation:5
//   },
//   button: {
//     backgroundColor: '#09abe7',
//     paddingVertical: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//     elevation: 3
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16
//   },
//   link:{
//     color:'#FDB075'
//   }
// });


import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SignupLogin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordMatch(text === confirmPassword);
    setShowErrorMessage(false);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setPasswordMatch(text === password);
    setShowErrorMessage(true);
  };

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
      setShowErrorMessage(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Password and confirm password do not match');
      setShowErrorMessage(true);
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual endpoint
    fetch('YOUR_BACKEND_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Signup failed');
        }
        return response.json();
      })
      .then((data) => {
        setErrorMessage('Signup successful!');
        setShowErrorMessage(false);
        Alert.alert('Success', 'Signup successful!', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
      })
      .catch((error) => {
        console.error('Error signing up:', error.message);
        setErrorMessage('Signup failed. Please try again later.');
        setShowErrorMessage(true);
      });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Image
            source={require('../images/barclays_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <TextInput
            placeholder='Name'
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder='Password'
              style={styles.passwordInput}
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <MaterialIcons
                name={showPassword ? 'visibility-off' : 'visibility'}
                size={24}
                color="#777"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder='Confirm Password'
              style={[styles.passwordInput, !passwordMatch && styles.inputError]}
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <MaterialIcons
                name={showPassword ? 'visibility-off' : 'visibility'}
                size={24}
                color="#777"
              />
            </TouchableOpacity>
          </View>
          {showErrorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
          <Text style={{ marginTop: 10, marginBottom: 20 }}>
            By registering, you confirm that you accept our <Text style={styles.link}>Terms of Use</Text> and <Text style={styles.link}>Privacy Policy</Text>
          </Text>
          <View style={styles.signup}>
            <TouchableOpacity style={styles.button}
              onPress={handleSignup}
              activeOpacity={0.8}>
              <Text style={styles.buttonText}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginVertical: 10 }}>Already have an account? Sign in</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#F9FBFC',
  },
  container: {
    alignItems: 'center',
    height: '100%',
    width: '80%',
    marginLeft: '10%'
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
  inputError: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  successMessage: {
    color: 'green',
    marginBottom: 10,
  },
  signup: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#09abe7',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 3
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  link: {
    color: '#FDB075'
  }
});

