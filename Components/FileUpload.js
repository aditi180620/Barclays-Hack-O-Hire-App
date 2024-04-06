import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';

// const SERVER_URL = 'http://192.168.1.37:3000';


export default function FileUpload() {

  const [jpegFiles, setJpegFiles] = useState([]);
  const [pngFiles, setPngFiles] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);

  const selectDoc = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Accept all file types
        multiple: true,
      });

      if (result.type === 'cancel') {
        console.log('User cancelled the upload');
        return;
      }

      console.log(result); // Log result for debugging

      // Check if any files were selected
      if (!result.assets || result.assets.length === 0) {
        Alert.alert('Invalid File', 'Please select a valid file.');
        return;
      }

      const selectedFile = result.assets[0];
      const { mimeType, name, uri } = selectedFile;
      console.log(mimeType);
      // Check if the selected file is an image or PDF
      if (!(mimeType.startsWith('image/') || mimeType === 'application/pdf')) {
        Alert.alert('Invalid File Type', 'Please select an image or PDF file.');
        return;
      }

      result.assets.forEach(async (selectedFile) => {
        const { mimeType } = selectedFile;
        console.log(mimeType);

        // Check the MIME type and store the file accordingly
        if (mimeType.startsWith('image/jpeg') || mimeType === 'image/jpg') {
          setJpegFiles((prevFiles) => [...prevFiles, selectedFile]);
        } else if (mimeType === 'image/png') {
          setPngFiles((prevFiles) => [...prevFiles, selectedFile]);
        } else if (mimeType === 'application/pdf') {
          setPdfFiles((prevFiles) => [...prevFiles, selectedFile]);
        } else {
          Alert.alert('Invalid File Type', 'Please select an image (JPEG/PNG) or PDF file.');
        }
      });



      // Read the file asynchronously
      const fileContent = await FileSystem.readAsStringAsync(uri);

      // Calculate the size of the file
      const size = fileContent.length;

      // Check if the file size exceeds the maximum allowed size (256KB)
      if (size > 512 * 1024) {
        Alert.alert('File Size Exceeded', 'Maximum allowed file size is 512KB.');
        return; // Prevent further execution and uploading if size exceeded
      }

      // Scan the selected file for viruses
      // await scanFile(uri); // Invoke scanFile function

      // Valid file selected, proceed with processing (e.g., upload, display details)
      console.log('Valid file selected:', selectedFile);
      // Upload the file or perform further processing here...

    } catch (error) {
      console.log('Error occurred while picking the document:', error);
      Alert.alert('Error', 'An error occurred while picking the document.');
    }
  };

  // const scanFile = async (fileUri) => {
  //   try {
  //     const response = await axios.post(`${SERVER_URL}/scan`, { uri: fileUri });

  //     if (!response.data.isInfected) {
  //       console.log('No virus detected. Proceed with processing.');
  //       // Upload the file or perform further processing here...
  //     } else {
  //       Alert.alert('Virus Detected', 'The selected document contains a virus.');
  //     }
  //   } catch (error) {
  //     console.log('Error occurred while scanning the document:', error);
  //     Alert.alert('Error', 'An error occurred while scanning the document.');
  //   }
  // };

  return (
    <View>
      {/* <Text style={{ color: 'black', fontSize: 28, textAlign: 'center', marginVertical: 40 }}>
        Document Picker
      </Text> */}
      <View style={styles.buttonContainer} >
        <Button 
        title="Upload File" 
        onPress={selectDoc} 
        color="#04b4f0"
        ></Button>
      </View>
      <View>
        <Text>*Max file size: 512MB{'\n'}*Allowed file types: .jpeg, .jpg, .png, .pdf</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 3, // Add elevation for shadow
    },
});
