import React from 'react';
import { View, StyleSheet, Text, ScrollView, KeyboardAvoidingView, Platform, Button, Alert } from 'react-native';
import SlideSwitch from './SlideSwitch';
import CatDrop from './CatDrop';
import MyDatePicker from './MyDatePicker';
import { TextInput } from 'react-native';
import FileUpload from './FileUpload';

export default function ComplaintForm() {

  const handleSubmit = () => {
    // Perform any action you want when the submit button is pressed
    // For example, you can display an alert
    Alert.alert('Submitted Succesfuly!');
  };

  return (
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   behavior={Platform.OS === 'ios' ? 'padding' : null}
    //   keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500} // Adjust offset as needed
    // >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* SlideSwitch */}
        <View style={[styles.componentContainer, { width: '85%', marginBottom: 50 }]}>
          <SlideSwitch />
        </View>

        {/* Title of Complaint */}
        <View style={styles.componentContainer}>
          <Text style={styles.containerTitle}>Title of Complaint</Text>
          <View style={styles.boxStyle}>
            <TextInput style={styles.input}
              placeholder="Title"
            />
          </View>
        </View>

        {/* CatDrop */}
        <View style={styles.componentContainer}>
          <Text style={styles.containerTitle}>Categories</Text>
          <CatDrop />
        </View>

        {/* Date */}
        <View style={styles.componentContainer}>
          <Text style={styles.containerTitle}>Date of Complaint</Text>
          <MyDatePicker />
        </View>

        {/* Description */}
        <View style={styles.componentContainer}>
          <Text style={styles.containerTitle}>Description</Text>
          <View style={[styles.boxStyle, styles.multilineBox]}>
            <TextInput
              style={[styles.input, styles.multilineInput]}
              placeholder="Describe the complaint"
              multiline={true}
            />
          </View>
        </View>
        <View style={styles.componentContainer}>
          <FileUpload />
        </View>
        <View style={[styles.componentContainer, styles.buttonContainer]}>
          <Button title="Submit" onPress={handleSubmit} color="#04b4f0" />
        </View>
      </ScrollView>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentContainer: {
    width: '80%',
    marginBottom: 20,
  },
  containerTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 5,
  },
  boxStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  multilineBox: {
    minHeight: 100,
  },
  input: {
    flex: 1,
  },
  multilineInput: {
    height: 100,
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // Add elevation for shadow
  },
});
