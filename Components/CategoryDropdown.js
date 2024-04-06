import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, StyleSheet } from 'react-native';

const categories = [
  { category: 'Barclaycard' },
  { category: 'Borrowing Money' },
  { category: 'Current Accounts' },
  { category: 'Debit Cards' },
  { category: 'Fraud' },
  { category: 'Instalment Account' },
  { category: 'Mortgages' },
  { category: 'Open banking and sharing data' },
  { category: 'Payments and Transactions' },
  { category: 'Savings and Investments' },
  { category: 'Statements' },
  { category: 'Using the app and technical support' },
  { category: 'Money worries' },
  { category: 'Manage your personal details' }
];

export default function CategoryDropdown() {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(categories);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const onSearch = (search) => {
    if (search !== '') {
      let tempData = categories.filter(item => {
        return item.category.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(categories);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={styles.touchableText}>
          {selectedCategory === '' ? 'Select Category' : selectedCategory}
        </Text>
        {clicked ? (
          <Image
            source={require('../images/upload.png')} // Update image path
            style={styles.image}
          />
        ) : (
          <Image
            source={require('../images/dropdown.png')} // Update image path
            style={styles.image}
          />
        )}
      </TouchableOpacity>
      {clicked && (
        <View style={styles.dropdown}>
          <TextInput
            placeholder="Search.."
            value={search}
            onChangeText={(txt) => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={styles.textInput}
          />
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => {
                  setSelectedCategory(item.category);
                  setClicked(!clicked);
                  onSearch('');
                  setSearch('');
                }}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchableOpacity: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  touchableText: {
    fontWeight: '600',
    flex: 1,
  },
  image: {
    width: 20,
    height: 20,
  },
  dropdown: {
    elevation: 5,
    marginTop: 20,
    height: 300,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  textInput: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 0.2,
    borderColor: '#8e8e8e',
    borderRadius: 7,
    marginTop: 10,
    paddingLeft: 10,
  },
  categoryItem: {
    width: '85%',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#8e8e8e',
  },
  categoryText: {
    fontWeight: '600',
  },
});
