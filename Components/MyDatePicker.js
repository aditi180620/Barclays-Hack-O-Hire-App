import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Modal } from 'react-native';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

export default function MyDatePicker() {
  const today = new Date();
  const startDate = getFormatedDate(today.getDate() + 1, 'YYYY/MM/DD');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);

  function handleOnPress() {
    setOpen(!open);
  }

  function handleChange(propDate) {
    setDate(propDate);
    setOpen(false);
  }

  return (
    <View style={styles.container}>
      {/* <Text>DatePicker</Text> */}
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.textBoxContainer}>
          <Text style={styles.textBoxText}>{date ? date : 'Select Date'}</Text>
        </View>
      </TouchableOpacity>
      <Modal transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode='calendar'
              selected={date}
              minimumDate={startDate}
              onDateChange={handleChange}
            />
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  textBoxContainer: {
    // width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingRight: 190,
    paddingLeft: 10,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  textBoxText: {
    fontSize: 16,
    color: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
