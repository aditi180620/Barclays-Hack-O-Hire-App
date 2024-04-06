import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

// Define the data array outside of the component function
const data = [
  { key: '1', value: 'Barclaycard' },
  { key: '2', value: 'Borrowing Money' },
  { key: '3', value: 'Current Accounts' },
  { key: '4', value: 'Debit Cards' },
  { key: '5', value: 'Fraud' },
  { key: '6', value: 'Instalment Account' },
  { key: '7', value: 'Mortgages' },
  { key: '8', value: 'Open banking and sharing data' },
  { key: '9', value: 'Payments and Transactions' },
  { key: '10', value: 'Savings and Investments' },
  { key: '11', value: 'Statements' },
  { key: '12', value: 'Using the app and technical support' },
  { key: '13', value: 'Money worries' },
  { key: '14', value: 'Manage your personal details' },
  { key: '15', value: 'Others' }
];

const CatDrop = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <SelectList
        data={data}
        setSelected={setSelected}
        placeholder="Select Category"
        label="Categories"
        // Add custom styles here
        boxStyles={styles.boxStyles}
        inputStyles={styles.inputStyles}
        dropdownStyles={styles.dropdownStyles}
        dropdownItemStyles={styles.dropdownItemStyles}
        dropdownTextStyles={styles.dropdownTextStyles}
        disabledItemStyles={styles.disabledItemStyles}
        disabledTextStyles={styles.disabledTextStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  boxStyles: {
    // width: '80%', // Set width to 80% of the screen width
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  inputStyles: {
    fontSize: 16,
    color: 'black',
  },
  dropdownStyles: {
    marginTop: 7,
    width: '100%', // Set width to 80% of the screen width
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
    // maxHeight: '65%',
    paddingRight: 5,
    paddingLeft: 5,
  },
  dropdownItemStyles: {
    paddingVertical: 7,
    paddingHorizontal: 23,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  dropdownTextStyles: {
    fontSize: 15,
    color: 'black',
  },
  disabledItemStyles: {
    opacity: 0.5,
  },
  disabledTextStyles: {
    color: 'gray',
  },
});

export default CatDrop;
