// import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text, Alert, KeyboardAvoidingView, AsyncStorage } from 'react-native';
// import React, { useState } from 'react';
// import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo Icons
// import { ScrollView } from 'react-native';
// import { ToastAndroid } from 'react-native';

// export default function Login() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const [showErrorMessage, setShowErrorMessage] = useState(false); // State to show/hide error message
//   const [errorMessage, setErrorMessage] = useState(false);
//   const [loading,setLoading]=useState(false);

//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');
//   const [alertType, setAlertType] = useState('success'); // 'success' or 'error'

//   const submitHandler = async () =>{
//     setLoading(true);
//     if(!email || !password){
//       ToastAndroid.show("Please Fill all the Fields", ToastAndroid.LONG);
//       setLoading(false);
//       return;
//     }
//   }

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
          

//           <View style={styles.signup}>
//             <TouchableOpacity style={styles.button} 
//             activeOpacity={0.8}>
//               <Text style={styles.buttonText}>LOGIN</Text>
//             </TouchableOpacity>
//           </View>

//           <Text style={{marginVertical:10}}>Don't have an account yet? SignUp here</Text>
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

// /api/user/login


//CODE 2
// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
// import { Button } from 'react-native-elements';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useToast } from 'react-native-toast-notifications'; // Import useToast hook
// import axios from 'axios';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { toast } = useToast(); // Destructure toast function from useToast hook

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//   };

//   const submitHandler = async () => {
//     setLoading(true);
//     if (!email || !password) {
//       toast({ // Use the toast function provided by useToast hook
//         text: "Please Fill all the Fields",
//         type: "warning",
//         duration: 5000,
//         position: "bottom",
//       });
//       setLoading(false);
//       return;
//     }

//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };

//       // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
//       const response = await axios.post(
//         "YOUR_API_ENDPOINT", // Replace with your actual API endpoint
//         { email, password },
//         config
//       );

//       if (response && response.data) {
//         toast({
//           text: "Login Successful",
//           type: "success",
//           duration: 5000,
//           position: "bottom",
//         });
//       } else {
//         toast({
//           text: "Login Failed: Unexpected response format",
//           type: "error",
//           duration: 5000,
//           position: "bottom",
//         });
//       }
//       setLoading(false);
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.message) {
//         toast({
//           text: "Error Occurred: " + error.response.data.message,
//           type: "error",
//           duration: 5000,
//           position: "bottom",
//         });
//       } else {
//         toast({
//           text: "Error Occurred: " + error.message,
//           type: "error",
//           duration: 5000,
//           position: "bottom",
//         });
//       }
//       setLoading(false);
//     }
//   };

//   return (
//     <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
//       <View style={styles.container}>
//         <Image
//           source={require('../images/barclays_logo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//         <TextInput
//           placeholder='Email Address'
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//         />
//         <View style={styles.passwordContainer}>
//           <TextInput
//             placeholder='Password'
//             style={styles.passwordInput}
//             value={password}
//             onChangeText={handlePasswordChange}
//             secureTextEntry={!showPassword}
//           />
//           <TouchableOpacity
//             style={styles.toggleButton}
//             onPress={() => setShowPassword(!showPassword)}
//           >
//             <MaterialIcons
//               name={showPassword ? 'visibility' : 'visibility-off'}
//               size={24}
//               color="#777"
//             />
//           </TouchableOpacity>
//         </View>
//         <Button
//           title="Login"
//           onPress={submitHandler}
//           disabled={loading}
//           loading={loading}
//           buttonStyle={styles.button}
//           titleStyle={styles.buttonText}
//         />
//         <Button
//           title="Get Guest User Credentials"
//           onPress={() => {
//             setEmail("guest@example.com");
//             setPassword("123456");
//           }}
//           disabled={loading}
//           buttonStyle={[styles.button, { backgroundColor: '#FF6347' }]}
//           titleStyle={styles.buttonText}
//         />
//         <Text style={{ marginVertical: 10 }}>Don't have an account yet? SignUp here</Text>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     height: '100%',
//     width: '80%',
//     marginLeft: '10%',
//     marginTop: 50
//   },
//   logo: {
//     width: '70%'
//   },
//   input: {
//     borderColor: '#e8e8e8',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: '5%',
//     marginVertical: 5,
//     backgroundColor: '#fff',
//     paddingVertical: '3%',
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
//   button: {
//     backgroundColor: '#09abe7',
//     paddingVertical: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16
//   },
// });

// export default Login;


//CODE 3
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { ToastAndroid } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      ToastAndroid.show("Please Fill all the Fields", ToastAndroid.LONG);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        ToastAndroid.show("Login Successful", ToastAndroid.LONG);
        // Handle storing user data (e.g., token) in AsyncStorage or Context API
        // Redirect user to the next screen
      } else {
        // Login failed
        ToastAndroid.show("Invalid email or password", ToastAndroid.LONG);
      }
    } catch (error) {
      console.error('Error:', error);
      ToastAndroid.show("An error occurred. Please try again later.", ToastAndroid.LONG);
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
            onChangeText={setEmail}
          />
          <TextInput
            placeholder='Password'
            style={styles.input}
            value={password}
            onChangeText={setPassword}
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
